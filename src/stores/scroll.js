import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useScrollStore = defineStore('scroll', () => {
  const work = ref(0);
  const setWork = (value) => {
    work.value = value;
  }
  return { work}
})
