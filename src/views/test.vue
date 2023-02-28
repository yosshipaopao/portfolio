<script setup>
import { ref } from 'vue'
/*
const scroll=document.querySelector("body > main > div.scroll-control")
const contents=document.querySelector("body > main > div.content").children;
scroll.addEventListener('scroll', (event) => {
    const i=Math.floor((scroll.scrollTop*6.999)/(scroll.scrollHeight-scroll.clientHeight));
    console.log(i,contents[i+3]);
});*/
</script>
<template>
    <div class="content">
        <div class="dummy1"></div>
        <div class="dummy2"></div>
        <div class="dummy3"></div>
        <div>a</div>
        <div>b</div>
        <div>c</div>
        <div>d</div>
        <div>e</div>
        <div>f</div>
        <div>g</div>
        <div class="dummy4"></div>
        <div class="dummy5"></div>
        <div class="dummy6"></div>
    </div>
    <div class="scroll-control">
        <div class="height-controller"></div>
    </div>
</template>