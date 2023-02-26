<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useMenuStore } from "@/stores/menu";
import Menu from "@/views/Menu.vue";
const MenuStore = useMenuStore();
</script>

<template>
  <main>
    <div :class="{ menu: true, open: MenuStore.open }">
      <Menu />
    </div>
    <div class="content"></div>
  </main>
</template>

<style scoped lang="scss">
$menu_button_size: 100px;
main {
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  div {
    height: 100vh;
    width: 80%;
  }
}
.menu{
    background: #222;
    transition: width .5s .1s var(--anm1);
    display: flex;
    align-items: center;
    &::after{
        content: '';
        display: block;
        position: fixed;
        width: 51%;
        height: 100vh;
        z-index: -1;    
        background: #050;
        transition: width .5s var(--anm1);
    }
}
.open {
  width: calc($menu_button_size + 20px );
  transition: width .5s var(--anm1);
  &::after{
    width: calc($menu_button_size + 20px + 1%);
    transition: width .5s .1s var(--anm1);
  }
}
</style>
