<script setup>
import './plugins/css/app.css'
import cart from './uiComponents/cart.vue';
import { useCartState } from './uiComponents/state';
import { getCurrentInstance } from 'vue';
const store = useCartState();
const { proxy } = getCurrentInstance();


window.addEventListener('keydown', function (event) {
  if (event.key === 'F5') {
    event.preventDefault();
    proxy.$swal.fire({
      title: '你確定要離開嗎？',
      text: "未保存的更改將會丟失！",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '是，離開',
      cancelButtonText: '取消'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        location.reload();
      }
    });
  }
});
window.addEventListener('beforeunload', function (event) {
  event.preventDefault();
});
window.addEventListener('unload', function () {
  localStorage.clear();
});
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
            <li class="nav-item cart-icon" @click="store.toggleCart('app')">
              <a class="nav-link"><font-awesome-icon :icon="['fas', 'cart-shopping']" /></a>
              <span v-show="store.cartData.length > 0">{{ store.cartData.length }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <div class="content">
    <transition name="cart">
      <cart v-show="store.showCart" class="cartView" />
    </transition>
    <router-view v-slot="{ Component }">
      <transition name="component">
        <component :is="Component" />
      </transition>
    </router-view>
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
  position: relative;
}

.cartView {
  height: 75vh;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9999;
  background: #fff;
  overflow: hidden auto;
}

.cart-icon {
  display: flex;
  align-items: top;
  justify-content: center;
  position: relative;
  cursor: pointer;
}

.cart-icon span {
  width: 20px;
  height: 20px;
  font-size: .8rem;
  text-align: center;
  line-height: 20px;
  color: #fff;
  background: rgba(255, 0, 0, 0.6);
  border-radius: 50%;
}

.component-enter-active {
  transition: all 1s ease-out;
}

.component-leave-active {
  transition: all ease-in;
}

.component-enter-from,
.component-leave-to {
  opacity: 0;
}

.cart-enter-active {
  transition: all .5s ease-out;
}

.cart-leave-active {
  transition: all ease-in;
}

.cart-enter-from,
.cart-leave-to {
  right: -5%;
}
</style>
