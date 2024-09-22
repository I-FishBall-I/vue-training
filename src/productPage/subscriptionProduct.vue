<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router';
import { useCartState } from '../uiComponents/state';
const store = useCartState();

const route = useRoute();
const data = ref([]);
const productDetail = ref(null);

const getProductDetail = async () => {
    const productId = parseInt(route.params.id); // 從路由參數中獲取商品 id 
    const res = await fetch('Subscription.json');
    const jsondata = await res.json();
    data.value = jsondata;
    productDetail.value = data.value.find(product => product.id === productId); // 根據 id 查找對應商品
    // console.log(productDetail.value);
}

const prevHandler = () => {
    if (productDetail.value.id > 1) {
        const prevId = productDetail.value.id - 1;
        productDetail.value = data.value.find(product => product.id === prevId);
    }
}
const nextHandler = () => {
    if (productDetail.value.id < 3) {
        const nextId = productDetail.value.id + 1;
        productDetail.value = data.value.find(product => product.id === nextId);
    }
}

const selectedOption = ref(1);
watch(selectedOption, (newVal) => {
    if (newVal == 1) {
        productDetail.value.price = "50.00";
        console.log(newVal);
    } else if (newVal == 2) {
        productDetail.value.price = "45.00";
    } else if (newVal == 3) {
        productDetail.value.price = "42.50";
    }
})


const cartItems = ref([]);
const addHandler = () => {
    const currentCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const cartItem = {
        id: currentCart.length + 1,
        category: "subscription",
        title: productDetail.value.title,
        price: productDetail.value.price,
        quantity: 1,
        src: productDetail.value.img
    }
    currentCart.push(cartItem);
    sessionStorage.setItem('cart', JSON.stringify(currentCart));
    cartItems.value = currentCart;
    window.dispatchEvent(new Event('storage'));
    store.toggleCart('subscriptionProduct');
}

onMounted(() => {
    getProductDetail();
})


</script>

<template>
    <div class="container my-5 mx-auto" v-if="productDetail">
        <div class="row">
            <div class="col-12">
                <div class="bread">
                    <div class="row row-cols-2">
                        <div class="col-6">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                                <li class="breadcrumb-item"><router-link to="/Subscription">Subscription</router-link>
                                </li>
                                <li class="breadcrumb-item active">{{ productDetail.title }}</li>
                            </ol>
                        </div>
                        <div class="col-2 offset-1 offset-lg-4">
                            <ul class="pagination">
                                <li class="page-item" @click="prevHandler">
                                    <a class="page-link">
                                        <span>Prev&laquo;</span>
                                    </a>
                                </li>
                                <li class="page-item" @click="nextHandler">
                                    <a class="page-link">
                                        <span>Next&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="card mb-3" style="max-width:70rem;">
                    <div class="row g-0">
                        <div class="col-md-5">
                            <img :src="productDetail.img" class="img-fluid rounded-start">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title">{{ productDetail.title }}</h5>
                                <p class="card-text">$ {{ productDetail.price }} Price</p>
                                <select class="form-select" v-model="selectedOption">
                                    <option v-for="(option, key) in productDetail.option" :key="key" :value="key">{{
                                        option
                                        }}
                                    </option>
                                </select>
                                <button type="button" class="btn" @click="addHandler">Add to Cart</button>
                                <div class="accordion accordion-flush my-5" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                                                PACK SIZE
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">{{ productDetail.packSize }}</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">
                                                PRODUCT INFO
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">{{ productDetail.productInfo }}</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#flush-collapseThree">
                                                RETURN & REFUND POLICY
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" class="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">{{ productDetail.policy }}</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#flush-collapseFour">
                                                SHIPPING INFO
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFour" class="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">{{ productDetail.shopInfo }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.breadcrumb a {
    text-decoration: none;
}

.breadcrumb a:hover {
    margin-bottom: 5px;
    border-bottom: 2px solid var(--font-color);
}

.card {
    border: none;
}

.card-body {
    margin: 0 50px;
}

.card-title {
    font-weight: 700;
    font-size: 2rem;
    margin: 20px 0;
    color: var(--font-color);
}

.card-text {
    font-weight: 400;
    font-size: 1rem;
    margin: 20px 0;
}

.btn {
    background: var(--font-color);
    color: #fff;
    width: 100%;
    border-radius: 20px;
    margin: 20px 0;
}
</style>