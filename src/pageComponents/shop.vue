<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router';
const products = ref([]);

const getProducts = async () => {
    const res = await fetch('productPage.json');
    const data = await res.json();
    products.value = data;
};
onMounted(() => {
    getProducts();
});

</script>

<template>
    <div class="container" v-if="products.length">
        <transition name="main">
            <div v-show="!$route.params.id">
                <div class="my-5 title">
                    <h1>商城-美味果汁</h1>
                    <p>冷壓技術萃取，100%有機，滿載維生素、營養與天然精華，讓您享受純淨的健康飲品。</p>
                </div>
                <div class="row">
                    <div class="col-12 col-lg-4" v-for="product in products" :key="product.id">
                        <router-link :to="{ name: 'productPage', params: { id: product.id } }"
                            style="text-decoration: none">
                            <div class="pic">
                                <img :src="product.img" class="w-100">
                            </div>
                            <div class="txt">
                                <h2>{{ product.title }}</h2>
                                <p>NTD $ {{ product.price }}</p>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </transition>
        <router-view v-slot="{ Component }">
            <transition name="product">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<style scoped>
.title h1 {
    font-size: 3rem;
    margin: 20px 0;
    color: var(--font-color);
}

.title p {
    font-size: 1rem;
}

.pic img {
    border-radius: 10px;
}

.pic:hover img {
    box-shadow: 0 0 15px rgba(61, 90, 35, 0.6);
}

.txt h2 {
    font-size: 1.6rem;
    font-weight: 700;
    margin: 20px 0;
    color: var(--font-color);
}

.txt p {
    font-size: 1rem;
    font-weight: 400;
    padding: 0 0 20px 10px;
    color: #000;
}

.main-enter-active,
.main-leave-active {
    transition: all 0.05s ease-out;
}

.main-enter-from,
.main-leave-to {
    opacity: 1;
}

.product-enter-active,
.product-leave-active {
    transition: all 0.5s ease;
}

.product-enter-from,
.product-leave-to {
    opacity: 0;
}
</style>