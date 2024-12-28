<script setup>
import {  ref } from 'vue'
import { useCartState } from '@/uiComponents/state'

const store = useCartState()
store.showCart = false

const name = ref('')
const password = ref('')
const sent = (e) => {
  e.preventDefault()
  
}
</script>

<template>
  <div class="container d-flex align-items-center">
    <div class="row row-cols-1 row-cols-lg-2">
      <div class="col-12 col-lg-4">
        <img src="/Background.jpg" class="w-100" />
      </div>
      <div class="col-12 col-lg-7 offset-lg-1">
        <form class="row g-3">
          <div class="col-12">
            <h1>登入</h1>
          </div>
          <div class="col-md-12">
            <label for="inputName" class="form-label">帳號</label>
            <input type="text" class="form-control" id="inputName" v-model="name" />
          </div>
          <div class="col-12">
            <label for="inputPassword" class="form-label">密碼</label>
            <input type="password" class="form-control" id="inputPassword" v-model="password" />
          </div>
          <div class="col-12 offset-lg-10 mt-4">
            <button class="btn" @click="sent">登入</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 100vh;
}

h1 {
  font-size: 3rem;
  margin: 20px 0;
  color: var(--font-color);
  position: relative;
}

.btn {
  width: auto;
  background-color: var(--font-color);
  color: #fff;
  border-radius: 20px;
}
</style>
