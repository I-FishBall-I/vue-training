import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartState = defineStore('cart', () => {
  const cartData = ref([])
  const showCart = ref(false)
  const active = ref(null)

  const toggleCart = (source) => {
    if (showCart.value || active.value === source) {
      showCart.value = false
      active.value = null
      // console.log(showCart.value);
    } else {
      showCart.value = true
      active.value = source
      // console.log(showCart.value);
    }
  }

  const addToCart = (currentCart) => {
    cartData.value.push(currentCart)
    localStorage.setItem('cart', JSON.stringify(currentCart))
  }

  const deleteItem = (id) => {
    cartData.value = cartData.value.filter((item) => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(cartData.value))
    if (cartData.value.length == 0) {
      showCart.value = false
    }
  }

  return { showCart, toggleCart, cartData, addToCart, deleteItem }
})
