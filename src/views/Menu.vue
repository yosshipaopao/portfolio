<script setup>
import { useMenuStore } from "@/stores/Menu";
const MenuStore = useMenuStore();
</script>
<template>
  <input type="checkbox" v-model="MenuStore.open" id="menu_check">
  <label for="menu_check">
    <span></span>
  </label>
  <div class="menu">

  </div>
</template>
<style scoped lang="scss">
$menu_button_size: 100px;
  input{
    display: none;
    &:checked ~ label span{
      background-color: rgba(255, 255, 255, 0);
      &::before {
        bottom: 0;
        transform: rotate(45deg);
      }
      &::after{
        top: 0;
        transform: rotate(-45deg);
      }
    }

  }
  label{
    position: fixed;
    top: 10px;
    left: 10px;
    display: flex;
    height: $menu_button_size;
    width: $menu_button_size;
    justify-content: center;
    align-items: center;
    z-index: 90;
    span,span::before,span::after{
      content: '';
      transition: transform .5s .1s var(--anm1),bottom .5s .1s var(--anm1),top .5s .1s var(--anm1),background-color .5s;
      display: block;
      height: 5px;
      width: 100%;
      background-color: #ffffff;
      position: absolute;
    }
    span{
      &::before{
        bottom: calc($menu_button_size/3);
      }
      &::after{
        top: calc($menu_button_size/3);
      }
    }
  }
.menu{
  display: flex;
  flex-direction: column;
  width: 100%;
  height:calc( 100% - $menu_button_size * 2);
}
</style>