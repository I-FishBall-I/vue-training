<script setup>
import { ref, onMounted } from 'vue'

const products = ref([]);
const getProducts = async () => {
    const res = await fetch('Subscription.json');
    const data = await res.json();
    products.value = data;
}



onMounted(() => {
    getProducts()
})


</script>

<template>
    <div class="container">
        <div class="my-5 title">
            <h1>Subscription</h1>
            <p>Subscribe to any of our plans and select how often you want them delivered.</p>
        </div>
        <div class="row">
            <div class="col-12 col-lg-4" v-for="product in products" :key="product.id">
                <router-link :to="{ name: 'subscriptionProduct', params: { id: product.id } }"
                    style="text-decoration: none">
                    <div class="pic">
                        <img :src="product.img" class="w-100">
                    </div>
                    <div class="txt">
                        <h2>{{ product.title }}</h2>
                        <p>$  {{ product.price }}</p>
                    </div>
                </router-link>
            </div>
        </div>
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

.row img {
    border-radius: 10px;
}

.row .txt h2 {
    font-size: 1.6rem;
    font-weight: 700;
    margin: 20px 0;
    color: var(--font-color);
}

.row .txt p {
    font-size: 1rem;
    font-weight: 400;
    padding: 0 0 20px 10px;
    color: #000;
}
</style>
