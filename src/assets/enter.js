import {onMounted}from "vue";
import gsap from "gsap";


export function enter(){
    const observer = new IntersectionObserver(entries=> {
    entries.forEach(entry => {
        if (entry.isIntersecting&& !entry.target.dataset.entered) {
            gsap.fromTo(entry.target, {opacity: 0, x:entry.target.dataset.enterX?parseInt(entry.target.dataset.enterX):100 ,y:entry.target.dataset.enterY?parseInt(entry.target.dataset.enterY):0}, {opacity: 1, x: 0,y:0, duration: 1, delay:entry.target.dataset.enterDelay?parseFloat(entry.target.dataset.enterDelay):.5,ease: 'power2.out'})
            entry.target.setAttribute('data-entered',true);
        }
    })
}, {rootMargin: '0px',threshold: .5})
    const els = document.querySelectorAll('[data-enter]');
    for(const i of els){
        i.style.opacity = 0;
        i.removeAttribute('data-entered');
        observer.observe(i);
    }
}