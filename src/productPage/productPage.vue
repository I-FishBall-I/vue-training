<script setup>
import '../plugins/css/product.css'
import { ref, onMounted, computed, getCurrentInstance, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useCartState } from '@/uiComponents/state';
const route = useRoute();
const store = useCartState();
const { proxy } = getCurrentInstance();
const data = ref([]);
const productDetail = ref(null);
const productId = ref(null);
// 取得商品資料
const getProductDetail = async () => {
    const res = await fetch('productPage.json');
    const jsondata = await res.json();
    data.value = jsondata;
    productDetail.value = data.value.find(product => product.id === productId.value); // 根據 id 查找對應商品
    // console.log(productDetail.value);
};
watch(route, () => {
    productId.value = parseInt(route.params.id)
    getProductDetail();
}, { immediate: true });

//上一筆資料
const prevHandler = () => {
    if (productDetail.value.id > 1) {
        const prevId = productDetail.value.id - 1;
        productDetail.value = data.value.find(product => product.id === prevId);
        quantity.value = 0
    }
}
//下一筆資料
const nextHandler = () => {
    if (productDetail.value.id < 6) {
        const nextId = productDetail.value.id + 1;
        productDetail.value = data.value.find(product => product.id === nextId);
        quantity.value = 0
    }
}
//更新input的數量
const quantity = ref(0)
const getQuantityData = (event) => {
    quantity.value = event.target.value.replace(/^0+/, '');
}
//當發生變化時時檢視
const isAddToCartDisabled = computed(() => quantity.value <= 0)

const alert = () => {
    proxy.$swal.fire({
        position: "center",
        icon: "success",
        title: "已成功加入購物車",
        showConfirmButton: false,
        timer: 1500
    })
}
//新增產品資料進購物車
const addCartHandler = () => {
    alert();
    //回傳產品的參數
    const cartItem = {
        category: "shop",
        id: store.cartData.length + 1,
        title: productDetail.value.title,
        price: productDetail.value.price,
        quantity: quantity.value,
        src: productDetail.value.img
    }
    //傳進購物車
    store.addToCart(cartItem);
    quantity.value = 0
}
//在網頁載入時執行讀取資料
onMounted(() => {
    getProductDetail();
});
</script>
<template>
    <div class="container my-5 mx-auto" v-if="productDetail">
        <div class="row">
            <div class="col-12">
                <div class="bread">
                    <div class="row row-cols-2">
                        <div class="col-6">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="/" href="#">首頁</router-link></li>
                                <li class="breadcrumb-item"><router-link to="/shop" href="#">商城</router-link></li>
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
                            <img :src="productDetail.img" class="img-fluid">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title">{{ productDetail.title }}</h5>
                                <p class="card-text">$ NTD {{ productDetail.price }}</p>
                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="inputGroup-sizing-default">數量</span>
                                    <input type="number" min="0" max="10" class="form-control" :value="quantity"
                                        @input="getQuantityData">
                                </div>
                                <button type="button" class="btn" :disabled="isAddToCartDisabled"
                                    @click="addCartHandler">Add to Cart</button>
                                <div class="accordion accordion-flush my-5" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                                                產品介紹
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">{{ productDetail.productInfo }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">
                                                退貨與退款政策
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                            data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body">{{ productDetail.policy }}</div>
                                        </div>
                                    </div>
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#flush-collapseThree">
                                                購買資訊
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" class="accordion-collapse collapse"
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