<script setup>
import {onMounted} from "vue";
import { useMenuStore } from "@/stores/menu";
import menudata from "@/assets/data/menu.json";
const MenuStore = useMenuStore();
onMounted(()=>{
  const menu=document.getElementById("menu");
  menu.onwheel=e=>{
    console.log(event.wheelDelta)
  }
});
</script>
<template>
  <input type="checkbox" v-model="MenuStore.open" id="menu_check" />
  <label for="menu_check">
    <span></span>
  </label>
  <div class="menu" id="menu">
    <div class="menubutton" v-for="data in menudata">
      <RouterLink :to="data.to">{{ data.name }}</RouterLink>
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
.menu {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - $menu_button_size * 3);
  scrollbar-width: none;
  justify-content: center;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
  .menubutton {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
  }
}
.scroll-control{
    position: relative;
    width: 100%;
    overflow-y: scroll;
    height: calc(100% - $menu_button_size * 3);
}
</style>
