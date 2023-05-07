<script setup>
import {Smoothie} from "vue-smoothie";
import {onMounted, ref} from "vue";
import {enter} from '@/assets/enter.js';
import worksJson from '@/assets/data/works.json';
import {useRouter} from 'vue-router';

import { useScrollStore } from '@/stores/scroll';

const scrollStore = useScrollStore();

const router = useRouter();
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
            <div class="blank"></div>
            <div class="works">
                <div v-for="(work,i) of works['titles']" @click="push('/work/'+works.works[work].href)" class="work" data-enter data-enter-x="0" data-enter-y="100" >
                    <img :src="'https://i.ytimg.com/vi/'+works.works[work].youtube+'/0.jpg'" alt="">
                    <div class="details">
                        <h3>{{works.works[work].info}}</h3>
                        <h3>{{works.works[work].title}}</h3>
                    </div>
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
        align-items: center;
        flex-direction: column;
        .work{
            display: block;
            width: 80%;
            transform: skewY(-20deg);
            height: 200px;
            margin: 10px 0;
            background: #000;
            border-radius: 10px;
            overflow: hidden;
            transition: height 0.5s ease-in-out;
            &:hover{
                cursor: pointer;
                height: 500px;
                img{
                    transform: skewY(20deg) translateY(00%);
                    filter: brightness(100%);
                }
                .details{
                    transform: skewY(10deg);
                    //opacity: 0;
                }
            }
            img{
                transform: skewY(10deg) translateY(-20%);
                width: 100%;
                transition: transform 0.5s ease-in-out,filter 0.5s ease-in-out;
                filter: brightness(50%);
            }
            .details{
                transform: skewY(0deg);
                //opacity: 1;
                transition: transform 0.5s ease-in-out,opacity 0.5s ease-in-out;
                position: absolute;
                bottom: 10px;
                right: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: end;
                overflow: hidden;
                h3{
                    font-size: 50px;
                    mix-blend-mode:exclusion;
                    white-space: nowrap;
                }
            }
        }
    }
}
</style>