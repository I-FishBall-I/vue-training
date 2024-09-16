<script setup>

</script>

<template>
  <div class="container-fluid text-center py-2 coupon">FREE SHIPPING ON ORDERS OVER $75</div>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <router-link to="/" class="navbar-brand" href="#">pure flave</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/shop" class="nav-link" href="#">Shop</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/subscription" class="nav-link" href="#">Subscription</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" href="#">About Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link" href="#">Contact</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/productPage" class="nav-link" href="#">productPage</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/subscriptionProduct" class="nav-link" href="#">SubscriptionProduct</router-link>
          </li>
        </ul>
        <div>
          <ul class="navbar-nav mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">Log In</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><font-awesome-icon :icon="['fas', 'cart-shopping']" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>

  <div class="content">
    <router-view />
  </div>
  <footer class="container-fluid">
    <div class="row footer">
      <div class="col-12 col-lg-3">
        <div class="item">
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <div class="item">
          <ul>
            <li>Cookie Policy</li>
            <li>F&Q</li>
            <li>Payment Methods</li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <div class="item">
          <ul>
            <li>Address:</li>
            <li>500 Terry Francine St.</li>
            <li>San Francisco, CA 94158</li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-lg-3">
        <div class="item">
          <ul>
            <li>Contact:</li>
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
</style>
