<script setup>
import './plugins/css/app.css'
import cart from './uiComponents/cart.vue';
import { useCartState } from './uiComponents/state';
const store = useCartState();

</script>

<template>
  <div class="container-fluid text-center py-2 coupon">🎉 現在購物滿 $499，即可享受免費運送服務！把握機會，立即購買！🚚✨</div>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <router-link to="/" class="navbar-brand">pure flave</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/shop" class="nav-link">商城</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/subscription" class="nav-link">訂閱方案</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">關於我們</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">聯絡我們</router-link>
          </li>
        </ul>
        <div>
          <ul class="navbar-nav mb-lg-0">
            <li class="nav-item">
              <a class="nav-link">Log In</a>
            </li>
            <li class="nav-item" @click="store.toggleCart('app')">
              <a class="nav-link"><font-awesome-icon :icon="['fas', 'cart-shopping']" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <div class="content">
    <cart v-show="store.showCart" />
    <transition name="slide-fade">
      <router-view />
    </transition>
  </div>
  <footer class="container-fluid">
    <div class="row footer">
      <div class="col-12 col-lg-3">
        <div class="item">
          <ul>
            <li>服務條款</li>
            <li>隱私政策</li>
            <li>運送政策</li>
            <li>退款政策</li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <div class="item">
          <ul>
            <li>Cookie 政策</li>
            <li>常見問題</li>
            <li>付款方式</li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <div class="item">
          <ul>
            <li>聯絡資訊：</li>
            <li>500 Terry Francine St.</li>
            <li>San Francisco, CA 94158</li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <div class="item">
          <ul>
            <li>聯絡方式：</li>
            <li>info@mysite.com</li>
            <li>123-456-7890</li>
          </ul>
        </div>
      </div>
    </div>

  </footer>
  <div class="text-center py-2 bg-secondary">© 2022, pure flave</div>
</template>

<style>
.content {
  min-height: 100vh;
}

.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.6, 0.7, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
