import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartState = defineStore('cart', () => {
  const showCart = ref(false)
  const active = ref(null) // 用來記錄當前開啟的來源

  const toggleCart = (source) => {
    if (active.value === source) {
      // 如果當前來源與點擊的來源相同，則關閉購物車
      showCart.value = false
      active.value = null
    } else {
      // 否則，開啟該來源並關閉其他來源
      showCart.value = true
      active.value = source
    }
  }

  return { showCart, active, toggleCart }
})
