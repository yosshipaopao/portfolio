<script setup>
import {Smoothie} from "vue-smoothie";
import worksJson from '@/assets/data/works.json';
const props = defineProps({
  id: String,
});
document.title = worksJson.works[props.id]!=null?worksJson.works[props.id].title+" | yosshipaopao":'404';
</script>

<template>
    <Smoothie class="container" :weight=".03" v-if="worksJson.works[props.id]!=null">
        <div class="main">
          <h1>【{{worksJson.works[props.id].info}}】{{worksJson.works[props.id].title}}</h1>
            <div class="blank"></div>
            <iframe width="560" height="315" :src="'https://www.youtube.com/embed/'+worksJson.works[props.id].youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div class="blank"></div>
            <div v-if="worksJson.works[props.id].yt_main!=null">
                <h2>本編</h2>
                <div class="blank"></div>
              <iframe width="560" height="315" :src="'https://www.youtube.com/embed/'+worksJson.works[props.id].yt_main" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <div class="blank"></div>
               <div v-if="worksJson.works[props.id].syusai!=null">
                 <h2>主催</h2>
                 <h1>{{worksJson.works[props.id].syusai}}</h1>
                   <div class="blank"></div>
             </div>
              <div v-if="worksJson.works[props.id].song!=null">
                 <h2>音楽</h2>
                 <h1>{{worksJson.works[props.id].song}}</h1>
                  <div class="blank"></div>
             </div>
              <div v-if="worksJson.works[props.id].vocal!=null">
                 <h2>Vocal</h2>
                 <h1>{{worksJson.works[props.id].vocal}}</h1>
                  <div class="blank"></div>
             </div>
            </div>
        </div>
    </Smoothie>
    <div v-else>
      <h1>404</h1>
    </div>
</template>

<style scoped lang="scss">
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
}
</style>