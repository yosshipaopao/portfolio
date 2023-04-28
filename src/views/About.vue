<script setup>
import {shallowRef ,onMounted,ref}from "vue";
import { Smoothie } from "vue-smoothie";
import gsap from "gsap";

const observer = new IntersectionObserver(entries=> {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.fromTo(entry.target, {opacity: 0, x: 100}, {opacity: 1, x: 0, duration: 1, delay:entry.target.dataset.enterDelay?parseFloat(entry.target.dataset.enterDelay):.5,ease: 'power2.out'})
            observer.disconnect()
        }
    })
}, {rootMargin: '0px',threshold: 1.0})
onMounted(()=>{
    const els = document.querySelectorAll('[data-enter]');
    for(const i of els){
        observer.observe(i);
    }
})
</script>
<template>
<!--<Smoothie class="container" :weight="0.03">-->
        <div class="main">
            <h1 data-enter><span>Hello!</span> I'm <span>YOSSHIPAOPAO</span></h1>
            <div class="blank"></div>
            <h2 data-enter data-enter-delay="1">Using Softwares</h2>
            <div class="softwares">
                <div v-for="i in ['AviUtl','Blender','VRoid studio','Unreal Engine']">{{i}}</div>
            </div>
        </div>
<!--</Smoothie>-->
</template>
<style lang="scss" scoped>
.blank{
    height: 50px;
}
.container {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    text-align: center;
}
.main{
    width: 80%;
    padding: 100px 0;
    text-align: center;
    margin: 0 auto;
    h1{
        font-size: 50px;
        font-weight: 700;
    }
    h2{
        font-size: 30px;
        font-weight: 700;
    }
    .softwares{
        width: 100%;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        >div{
            width: 200px;
        }
    }
}
</style>