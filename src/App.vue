<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {open} from '@/stores/menu'
</script>

<template>
    <main>
        <div :class="`menu {true ? 'open':''}`">
        {{}}
        </div>
        <div class="content">
        </div>
    </main>
</template>

<style scoped lang="scss">
main{
    display:flex;
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;
    div{
        height:100vh;
        width:100%;
    }
}
.open{
    width:20%;
}
</style>
