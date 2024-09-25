<script setup>
import '../plugins/css/product.css'
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router';
import { getCurrentInstance } from 'vue';
import { useCartState } from '@/uiComponents/state';

const route = useRoute();
const store = useCartState();
const { proxy } = getCurrentInstance();
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
    const optionText = productDetail.value.option[newVal];
    const match = optionText.match(/NT\$([0-9]+)/);
    if (match) {
        productDetail.value.price = match[1]; // 取得價格部分
    }

});

const alert = () => {
    proxy.$swal.fire({
        position: "center",
        icon: "success",
        title: "已成功加入購物車",
        showConfirmButton: false,
        timer: 1500
    })
}

const addHandler = () => {
    alert();
    const cartItem = {
        category: "subscription",
        id: store.cartData.length + 1,
        title: productDetail.value.title,
        price: productDetail.value.price,
        quantity: 1,
        src: productDetail.value.img
    }
    store.addToCart(cartItem);
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
                                <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
                                <li class="breadcrumb-item"><router-link to="/Subscription">訂閱方案</router-link>
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
                                <p class="card-text">NTD $ {{ productDetail.price }}</p>
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
                                                包裝尺寸
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
                                                產品介紹
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">{{ productDetail.productinfo }}</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#flush-collapseThree">
                                                退貨與退款政策
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
                                                購買資訊
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