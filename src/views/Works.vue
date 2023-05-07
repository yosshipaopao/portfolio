<script setup>
import {Smoothie} from "vue-smoothie";
import {onMounted, ref} from "vue";
import {enter} from '@/assets/enter.js';
import worksJson from '@/assets/data/works.json';
import {useRouter} from 'vue-router';

import { useScrollStore } from '@/stores/scroll';

const scrollStore = useScrollStore();

const router = useRouter();
debugger
const works = ref(worksJson);

onMounted(()=>{
  enter();
  setTimeout(()=>{
    document.querySelector('#scroll').scrollTo(0,scrollStore.work);
    scrollStore.work = 0;
  },1000);
});

const push = (path)=>{
  scrollStore.work = document.querySelector('#scroll').scrollTop;
  router.push(path);
}

</script>
<template>
    <Smoothie class="container" id="scroll" :weight=".03">
        <div class="main">
            <h1>My Works</h1>
            <div class="blank"></div>
            <div class="works">
                <div v-for="(work,i) of works['titles']" @click="push('/work/'+works.works[work].href)" class="work" data-enter data-enter-x="0" data-enter-y="100" :data-enter-delay="i*0.1%0.5">
                    <img :src="'https://i.ytimg.com/vi/'+works.works[work].youtube+'/0.jpg'" alt="">
                    <h3>{{works.works[work].info}}</h3>
                    <h3>{{works.works[work].title}}</h3>
                </div>
            </div>
        </div>
    </Smoothie>
</template>
<style lang="scss" scoped>
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
    .works{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .work{
            display: block;
            width: 300px;
            height: 300px;
            margin: 50px 30px;
            background: #000;
            border-radius: 10px;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
    }
}
</style>