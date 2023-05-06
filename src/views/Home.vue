<script setup>
import {onMounted,shallowRef} from "vue";
import gsap from 'gsap';    
onMounted(()=>{
    const name=document.querySelector(".name");
    const nameText=name.textContent;
    name.textContent="";
    for(const i of nameText){
        const span=document.createElement("div");
        span.textContent=i;
        name.append(span);
    }
    let i =0;
    for(const v of name.children){
        const tl = gsap.timeline();
        tl.fromTo(v,{
            x:i%2==0?i%4==0?100:-100:0,
            y:i%2==1?i%4==1?100:-100:0,
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
                
            }
            });
        i++;
    }
});
</script>

<template>
    <div class="main">
        <h1 class="name">YOSSHIPAOPAO</h1>
    </div>
</template>

<style scoped lang="scss">
.main{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 100px;
        >span{
            display: block;
        }
    }
}
</style>