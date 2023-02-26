import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const open = ref(true);
  function change(v) {
    if (typeof v == "boolean") {
      open.value = v;
    } else {
      open.value = !open.value;
    }
  }
  return { open, change }
})
