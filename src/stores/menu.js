import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const open = ref(true);
  function change(v=!open.value){
    open.value=v;
  }
  return {open,change}
})
