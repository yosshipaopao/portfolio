<script setup>
import {onMounted} from "vue";
import {enter} from '@/assets/enter.js'

onMounted(()=>{
  enter();
})
</script>
<template>
        <div class="main">
            <h1 data-enter><span>Hello!</span> I'm <span class="ac-color">YOSSHIPAOPAO</span></h1>
            <div class="blank"></div>
            <h3 data-enter data-enter-delay="0.75" data-enter-x="-100">I am an ordinary person who does video production, web development and other programming.</h3>
            <div class="blank"></div>
            <h2 data-enter data-enter-delay="1">Using Softwares</h2>
            <div class="softwares">
                <div v-for="(i,v) in ['AviUtl','Blender','VRoid studio','Unreal Engine']" data-enter :data-enter-delay="1.1+v*0.1" data-enter-x="0" data-enter-y="100">{{i}}</div>
            </div>
        </div>
</template>
<style lang="scss" scoped>

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
            display:block;
        }
    }
}
</style>