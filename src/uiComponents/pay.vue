<script setup>
import { useCartState } from '@/uiComponents/state';
import { getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const store = useCartState();
store.showCart = false

const { proxy } = getCurrentInstance();
const check = () => {
    let timerInterval;
    proxy.$swal.fire({
        title: "已確認您的訂單資訊",
        html: "稍後會在與您致電確認詳細資訊，請耐心等候",
        timer: 5000,
        timerProgressBar: true,
        showConfirmButton: false,
        allowOutsideClick: false,
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === proxy.$swal.DismissReason.timer) {
            router.push({ name: 'home' })
            store.cartData = []
            localStorage.clear()
        }
    })
}
</script>
<template>
    <div class="container d-flex justify-content-center align-items-center">
        <form class="row g-3" @submit.prevent="check">
            <div class="col-12">
                <h1 class="my-4">付款</h1>
            </div>
            <div class="col-md-4">
                <label for="Username" class="form-label">姓名</label>
                <input type="text" class="form-control" id="Username" required>
            </div>
            <div class="col-md-4">
                <label for="inputTel" class="form-label">電話</label>
                <input type="text" class="form-control" id="inputTel" required>
            </div>
            <div class="col-md-4">
                <label for="inputEmail" class="form-label">E-mail</label>
                <input type="email" class="form-control" id="inputEmail" placeholder="test@example.com" required>
            </div>
            <div class="col-12">
                <label for="inputAddress" class="form-label">地址</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="縣市->鄉鎮區->街道門牌號碼" required>
            </div>
            <div class="col-12">
                <button type="submit" class="btn" :disabled="store.cartData.length === 0">送出</button>
            </div>
            <div class="col-12">
                <h1 class="my-4">購買的商品</h1>
                <div class="row my-3">
                    <div class="col-4 title">品項</div>
                    <div class="col-2 title">數量</div>
                    <div class="col-2 title">單價</div>
                    <div class="col-2 title">小計</div>
                </div>
                <div class="row my-2" v-for="item in store.cartData" :key="item.id">
                    <div class="col-4 cartMenu"><img :src="item.src" class="w-25 mx-2">{{ item.title }}</div>
                    <div class="col-2 cartMenu">{{ item.quantity }}</div>
                    <div class="col-2 cartMenu">{{ item.price }}</div>
                    <div class="col-2 cartMenu">{{ parseInt(item.quantity) * parseInt(item.price) }}</div>
                    <div class="col-2 cartMenu"><button class="btn btn-danger btn-sm"
                            @click="store.deleteItem(item.id)">×</button>
                    </div>
                </div>
            </div>
        </form>
    </div>

</template>

<style scoped>
h1 {
    color: var(--font-color);
    font-weight: 600;
}

.title {
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cartMenu {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>