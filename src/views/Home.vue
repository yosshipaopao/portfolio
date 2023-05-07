<script setup>
import {onMounted,ref} from "vue";
import gsap from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)
const s=ref(1);
onMounted(()=>{
    const name=document.querySelector(".name");
    const nameText=name.textContent;
    name.textContent="";
    for(const i of nameText){
        const span=document.createElement("span");
        span.textContent=i;
        name.append(span);
    }
    let i =0;
    for(const v of name.children){
        const tl = gsap.timeline();
        tl.fromTo(v,{
            x:i%2===0?i%4===0?100:-100:0,
            y:i%2===1?i%4===1?100:-100:0,
            scale:5,
            opacity:0,
        },{
            x:0,
            y:0,
            scale:1,
            opacity:1,
            duration:1,
            ease:"expo.out",
            delay:1+i*.02
        }).to(v,{
            y:-300,
            ease:"expo.out",
            duration:.5
        }).to(v,{
            opacity:0,
            y:800,
            x:Math.random()*400-200,
            rotateX:Math.random()*360-180,
            rotateY:Math.random()*360-180,
            rotateZ:Math.random()*360-180,
            duration:3,
            ease: "power2.in",
            delay:1,    
            onComplete: () => {
                if(document.querySelector(".name")){
                    document.querySelector(".name").remove();
                    s.value=2;
                    setTimeout(s2,100)
                }
            }
            });
        i++;
    }
});
const s2=()=>{
    gsap.fromTo(document.querySelector(".cbox"),{
        opacity:0,
        scale:10,
    },{
        opacity:1,
        scale:1,
        duration:1,
        ease:"expo.out",
        delay:1,
        onComplete: () => {
            const name=document.querySelector(".name2");
            const nameText=name.textContent;
            name.textContent="";
            for(const i of nameText){
                const span=document.createElement("span");
                span.textContent=i;
                name.append(span);
            }
            let i =0;
            for(const v of name.children){
                gsap.fromTo(v,{
                    x:i%2===0?i%4===0?20:-20:0,
                    y:i%2===1?i%4===1?20:-20:0,
                    opacity:0,
                },{
                    x:0,
                    y:0,
                    opacity:1,
                    duration:1,
                    ease:"expo.out",
                    delay:1+i*.02
                });
                i++;
            }
         }
    });
}
</script>

<template>
    <div class="main">
        <h1 class="name">YOSSHIPAOPAO</h1>
        <div v-show="s===2">
            <div class="cbox">
                <h1 class="name2">YOSSHIPAOPAO</h1>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.main{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .name{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 100px;
        >span{
            display: block;
        }
    }
}
.cbox{
    opacity: 0;
    width: 300px;
    height: 300px;
    background-color: #ffffff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .name2{
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        font-size: 20px;
    }
}
</style>
<style lang="scss">
.name2{
    span{
        color: black!important;
    }
}
</style>