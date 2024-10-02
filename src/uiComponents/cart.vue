<script setup>
import { computed, ref } from 'vue'
import { useCartState } from '@/uiComponents/state';
const store = useCartState();
const cartItems = ref([]);

const shopItems = computed(() => {
    return store.cartData.filter(item => item.category === "shop");
})
const subscriptionItems = computed(() => {
    return store.cartData.filter(item => item.category === "subscription");
})

const deleteItem = (id) => {
    store.deleteItem(id);
}

</script>
<template>
    <div class="cart" v-show="store.showCart" v-if="cartItems">
        <div class="row my-2">
            <div class="col-12">
                <button class="order-btn" @click="store.toggleCart('cart')"><font-awesome-icon
                        :icon="['fas', 'arrow-left']" /><span class="ms-3">Order</span></button>
            </div>
            <div class="col-12 sec-title">Shop Flaves</div>
            <div class="col-4 title">品項</div>
            <div class="col-2 title">數量</div>
            <div class="col-2 title">單價</div>
            <div class="col-2 title">小計</div>
        </div>
        <div class="row" v-for="item in shopItems" :key="item.id">
            <div class="col-4 cartMenu"><img :src="item.src" class="w-25 mx-2">{{ item.title }}</div>
            <div class="col-2 cartMenu">{{ item.quantity }}</div>
            <div class="col-2 cartMenu">{{ item.price }}</div>
            <div class="col-2 cartMenu">{{ parseInt(item.quantity) * parseInt(item.price) }}</div>
            <div class="col-2 cartMenu"><button class="btn btn-danger btn-sm" @click="deleteItem(item.id)">×</button>
            </div>
        </div>
        <div class="row my-2">
            <div class="col-12 sec-title">Subscription</div>
            <div class="col-4 title">品項</div>
            <div class="col-2 title">數量</div>
            <div class="col-2 title">單價</div>
            <div class="col-2 title">小計</div>
        </div>
        <div class="row" v-for="item in subscriptionItems" :key="item.id">
            <div class="col-4 cartMenu"><img :src="item.src" class="w-25 mx-2">{{ item.title }}</div>
            <div class="col-2 cartMenu">{{ item.quantity }}</div>
            <div class="col-2 cartMenu">{{ item.price }}</div>
            <div class="col-2 cartMenu">{{ parseInt(item.quantity) * parseInt(item.price) }}</div>
            <div class="col-2 cartMenu"><button class="btn btn-danger btn-sm" @click="deleteItem(item.id)">×</button>
            </div>
        </div>
        <div class="row my-4">
            <div class="col-12 total-price">
                <span>Total $ {{ store.cartData.reduce((total, item) => total + parseInt(item.price) *
                    parseInt(item.quantity), 0) }}</span>
            </div>
            <div class="col-12"><router-link v-if="store.cartData.length > 0" to="/pay"><button class="btn btn-success w-100">前往付款</button></router-link></div>
        </div>
    </div>
</template>

<style scoped>
.cart {
    z-index: 9999;
    border: 3px solid #f9f9f9;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    background: linear-gradient(145deg, #ffffff, #e6e6e6);
    padding: 10px;
}

.order-btn {
    border: none;
    background: transparent;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--font-color);
    margin: 10px 0;
    padding: 0 10px;
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
    margin: 20px 0;
    text-align: center;
    color: var(--font-color);
    position: relative;

}
.sec-title::after {
    content: '';
    width: 20%;
    height: 4px;
    background: var(--font-color);
    position: absolute;
    bottom: -20%;
    left: 50%;
    transform: translate(-50%, -50%);
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