<script setup>
import {enter} from '@/assets/enter.js'
import {onMounted}from "vue";
onMounted(()=>{
  enter();
});

</script>
<template>
<div class="main">
    <h1 data-enter>Twitter</h1>
    <div class="blank"></div>
    <h2 data-enter data-enter-delay="0.6" data-enter-x="-100">My twitter:<a class="ac-color-2" href="https://twitter.com/yosshipaopao">@yosshipaopao</a></h2>
    <div class="blank"></div>
    <h1 data-enter data-enter-delay=".7">YouTube</h1>
    <div class="blank"></div>
    <h2 data-enter data-enter-delay=".8" data-enter-x="-100">My YouTube:<a class="ac-color-2" href="https://youtube.com/c/yosshipaopao">@yosshipaopao</a></h2>
    <div class="blank"></div>
    <h1 data-enter data-enter-delay=".9">GitHub</h1>
    <div class="blank"></div>
    <h2 data-enter data-enter-delay="1" data-enter-x="-100">My GitHub:<a class="ac-color-2" href="https://github.com/yosshipaopao">yosshipaopao</a></h2>
</div>
</template>
<style lang="scss" scoped>
.main{
    width: 80%;
    padding: 100px 0;
    text-align: center;
    margin: 0 auto;
}
</style>