<script setup>
import {onMounted,ref} from "vue";
import { useMenuStore } from "@/stores/menu";
import menudata from "@/assets/data/menu.json";
const MenuStore = useMenuStore();
onMounted(()=>{
  const menu=document.getElementById("menu");
  menu.onwheel=e=>{
    console.log(e.deltaY)
  }
});
const dummy={"name": "","to": ""};
const fixedmenudata=Array(2).fill(dummy).concat(menudata,Array(2).fill(dummy));
console.log(fixedmenudata);
const current=ref(0);
</script>
<template>
  <input type="checkbox" v-model="MenuStore.close" id="menu_check" />
  <label for="menu_check">
    <span></span>
  </label>
  <div :class="{links:true,close:MenuStore.close}" id="menu">
    <!--<div :class="{menubutton:1,current:0,sub1:0,sub2:0}" v-for="(data,i) in menudata">
      <RouterLink :to="data.to">{{ data.name }}</RouterLink>
    </div>-->
    
    <div class="menubutton">
      <a>HOME</a>
    </div>
    <div class="menubutton sub2">
      <a>HOME</a>
    </div>
    <div class="menubutton sub1">
      <a>HOME</a>
    </div>
    <div class="menubutton current">
      <a>HOME</a>
    </div>
    <div class="menubutton sub1">
      <a>HOME</a>
    </div>
    
    <div class="menubutton sub2">
      <a>HOME</a>
    </div>
    <div class="menubutton">
      <a>HOME</a>
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
      bottom: calc($menu_button_size/3);
      transform: rotate(0deg);
    }
    &::after {
      top: calc($menu_button_size/3);
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
    transition: transform 0.5s 0.1s var(--anm1), bottom 0.5s 0.1s var(--anm1),
      top 0.5s 0.1s var(--anm1), background-color 0.5s;
    display: block;
    height: 5px;
    width: 100%;
    background-color: #ffffff;
    position: absolute;
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
  height: calc(100% - $menu_button_size * 5);
  scrollbar-width: none;
  justify-content: center;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
  > .menubutton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 0px;
    a{
      transition: font-size .5s var(--anm1);
      opacity: 0;
    }
  }
  .current {
    height: 40%;
    a{
      opacity: 1;
      font-size: 100px;
      text-decoration: underline;
    }
  }
  .sub1{
    height: 20%;
    a{
      opacity: .75;
      font-size: 50px;
    }
  }
  .sub2{
    height: 10%;
    a{
      opacity: .5;
      font-size: 25px;
    }
  }
  &.close {
    .current {
      a{
        font-size: 50px;
      }
    }
    .sub1{
      a{
        font-size: 25px;
      }
    }
    .sub2{
      a{
        font-size: 12px;
      }
    }
  }
}
</style>