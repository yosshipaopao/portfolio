<script setup>
import {RouterView} from "vue-router";
import {useMenuStore} from "@/stores/menu";
import Menu from "@/components/Menu.vue";

const MenuStore = useMenuStore();
</script>

<template>
  <main :class="{close:MenuStore.close}">
    <div class="menu">
      <Menu />
    </div>
    <div class="content" :weight="0.03">
      <div class="wrapper">
        <RouterView/>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: var(--ac-color);

    > div {
    float: left;
    height: 100vh;
    }
  }
  
  .menu {
  background: #222;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(50vw - 2px);
  transition: width .5s .1s var(--anm1);
  
  .close & {
  width: 120px;
  transition: width .5s var(--anm1);
  }
  }
  
  .content {
  background: #222;
  height: 100vh;
  position: absolute;
  right: 0;
  width: calc(50vw - 2px);
  transition: width .5s var(--anm1);
  padding: 5px;
  overflow: hidden;
  text-align: center;
  .close & {
  width: calc(100vw - 124px);
  transition: width .5s .1s var(--anm1);
  }
  }
</style>