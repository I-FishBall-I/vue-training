<script setup>
import { computed, ref, watch } from 'vue'
import { useCartState } from '../uiComponents/state';
const store = useCartState();

const cartData = ref([]);

const sessionCart = ref(JSON.parse(sessionStorage.getItem('cart')) || []);

watch(sessionCart, (newVal) => {
    cartData.value = newVal;
});

// 監控 sessionStorage 並更新 sessionCart
window.addEventListener('storage', () => {
    const updatedCart = JSON.parse(sessionStorage.getItem('cart') || []);
    sessionCart.value = updatedCart; 
});

const shopItems=computed(()=>{
    return cartData.value.filter(item => item.category === "shop");
})
const subscriptionItems=computed(()=>{
    return cartData.value.filter(item => item.category === "subscription");
})


const deleteItem = async (id) => {
    cartData.value = cartData.value.filter(item => item.id !== id);
    sessionStorage.setItem('cart', JSON.stringify(cartData.value));
    window.dispatchEvent(new Event('storage'));
}

</script>
<template>
    <div class="cart" v-show="store.showCart && cartData.length > 0" v-if="cartData">
        <div class="row">
            <div class="col-12 z-index-3">
                <button class="order-btn" @click="store.toggleCart('cart')"><font-awesome-icon
                        :icon="['fas', 'arrow-left']" /><span class="ms-3">Order</span></button>
            </div>
            <div class="col-12 sec-title">Shop Flaves</div>
            <div class="col-3 title">品項</div>
            <div class="col-2 title">數量</div>
            <div class="col-2 title">單價</div>
            <div class="col-2 title">小計</div>
        </div>
            <div class="row my-2" v-for="item in shopItems" :key="item.id">
                <div class="col-3 cartMenu"><img :src="item.src" class="w-25 mx-2">{{ item.title }}</div>
                <div class="col-2 cartMenu">{{ item.quantity }}</div>
                <div class="col-2 cartMenu">{{ item.price }}</div>
                <div class="col-2 cartMenu">{{ parseInt(item.quantity) * parseInt(item.price) }}</div>
                <div class="col-2 cartMenu"><button class="btn btn-danger btn-sm"
                        @click="deleteItem(item.id)">×</button>
                </div>
            </div>
        <div class="row">
            <div class="col-12 sec-title">Subscription</div>
            <div class="col-3 title">品項</div>
            <div class="col-2 title">數量</div>
            <div class="col-2 title">單價</div>
            <div class="col-2 title">小計</div>
        </div>
            <div class="row my-2" v-for="item in subscriptionItems" :key="item.id">
                <div class="col-3 cartMenu"><img :src="item.src" class="w-25 mx-2">{{ item.title }}</div>
                <div class="col-2 cartMenu">{{ item.quantity }}</div>
                <div class="col-2 cartMenu">{{ item.price }}</div>
                <div class="col-2 cartMenu">{{ parseInt(item.quantity) * parseInt(item.price) }}</div>
                <div class="col-2 cartMenu"><button class="btn btn-danger btn-sm"
                        @click="deleteItem(item.id)">×</button>
                </div>
            </div>
        <div class="row">
            <div class="col-12 total-price">
                <span>Total $ {{ cartData.reduce((total, item) => total + parseInt(item.price) *
                    parseInt(item.quantity), 0) }}</span>
            </div>
            <div class="col-12"><button class="btn btn-success w-100">前往付款</button></div>
        </div>
    </div>
</template>

<style scoped>
.cart {
    position: fixed;
    top: 14%;
    right: 0;
    z-index: 9999;
    border: 3px solid #f9f9f9;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);
    background: #fff;
}

.order-btn {
    border: none;
    background: transparent;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--font-color);
    margin: 10px 0;
    padding: 0 10px;
    color: var(--font-color);
}

.title {
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
}

.sec-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 10px 0;
}

.cartMenu {
    display: flex;
    align-items: center;
    justify-content: center;
}

.total-price {
    font-size: 2rem;
    font-weight: 700;
    color: var(--font-color);
    margin: 0 0 10px 0;
    text-align: end;
}
</style>