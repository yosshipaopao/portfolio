import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const close = ref(true);
  return { close }
})
