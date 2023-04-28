<script setup>
import {onMounted,computed,ref, watch} from "vue";
import {  useMenuStore} from "@/stores/menu";
import menudata from "@/assets/data/menu.json";
import {  useRouter} from 'vue-router';
const MenuStore = useMenuStore();
const router = useRouter();
const dummy = {
  "name": "",
  "to": ""
};
const fixedmenudata = [...Array(2).fill(dummy), ...menudata, ...Array(2).fill(dummy)];
const current = ref(menudata.findIndex(o => o.to === location.pathname));
var routetimeout = null;
onMounted(() => {
  let wheelSum = 0;
  let waiting = false;
  document.getElementById("menu").addEventListener('wheel', e => {
    wheelSum += e.deltaY;
    if (!waiting) {
      if (Math.abs(wheelSum) >= 100) {
        waiting = true;
        setTimeout(() => {
          waiting = false;
          wheelSum = 0;
        }, 500);
        if (e.deltaY > 0 && current.value < menudata.length - 1) {
          current.value++;
        } else if (e.deltaY < 0 && current.value > 0) {
          current.value--;
        }
      }
    }
  });
});
watch(current,(n,o)=>{
  clearTimeout(routetimeout);
  routetimeout=setTimeout(()=>router.push(menudata[n].to),1000);
});
</script>
<template>
  <input type="checkbox" v-model="MenuStore.close" id="menu_check" />
  <label for="menu_check">
    <span></span>
  </label>
  <div :class="{links:true,close:MenuStore.close}" id="menu">
    <div :class="{menubutton:1,current:current+2==i,sub1:current+3==i||current+1==i,sub2:current+4==i||current==i}" v-for="(data,i) in fixedmenudata">
      <RouterLink @click="current=i-2" :to="data.to">{{ data.name }}</RouterLink>
    </div>
  </div>
</template>
<style scoped lang="scss">
$menu_button_size: 100px;

input {
  display: none;

  &:checked ~ label span {
    background-color: #ffffff;

    &::before {
      bottom: calc(#{$menu_button_size}/3);
      transform: rotate(0deg);
    }

    &::after {
      top: calc(#{$menu_button_size}/3);
      transform: rotate(0deg);
    }
  }
}

label {
  cursor: pointer;
  position: fixed;
  top: 10px;
  left: 10px;
  display: flex;
  height: $menu_button_size;
  width: $menu_button_size;
  justify-content: center;
  align-items: center;
  z-index: 90;

  span,
  span::before,
  span::after {
    content: "";
    display: block;
    height: 5px;
    width: 100%;
    background-color: #ffffff;
    position: absolute;
    transition: transform 0.5s 0.1s var(--anm1), bottom 0.5s 0.1s var(--anm1),
      top 0.5s 0.1s var(--anm1), background-color 0.5s;
  }

  span {
    background-color: rgba(255, 255, 255, 0);

    &::before {
      bottom: 0;
      transform: rotate(45deg);
    }

    &::after {
      top: 0;
      transform: rotate(-45deg);
    }
  }
}

.links {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - #{$menu_button_size * 5});
  justify-content: center;
  align-items: center;
  scrollbar-width: none;

  > .menubutton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 0%;
    transition: height 0.5s var(--anm1);

    a {
      opacity: 0;
      transition: font-size 0.5s var(--anm1),opacity .5s var(--anm1);
    }
  }

  .current {
    height: 40%;

    a {
      opacity: 1;
      font-size: 100px;
      text-decoration: underline;
    }
  }

  .sub1 {
    height: 20%;

    a {
      opacity: 0.75;
      font-size: 50px;
    }
  }

  .sub2 {
    height: 10%;

    a {
      opacity: 0.5;
      font-size: 25px;
    }
  }

  &.close {
    .current a {
      font-size: 30px;
    }

    .sub1 a {
      font-size: 20px;
    }

    .sub2 a {
      font-size: 10px;
    }
  }
}

</style>