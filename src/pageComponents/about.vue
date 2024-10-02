<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
            <div class="col col-md-6 col-lg-4">
                <div class="d-flex flex-column justify-content-space-around txt">
                    <h3>關於我們</h3>
                    <h1>天然果汁的美味，送達您門前</h1>
                    <p>我們專注於提供最純粹、無添加的100%天然果汁，將新鮮與健康直接送達您的家門。從果園到您的餐桌，我們確保每一瓶果汁都充滿營養與自然風味，讓您輕鬆享受純淨的美味。我們的故事源於對健康生活的熱愛，希望與您一起分享這份自然的恩賜。
                    </p>
                </div>
            </div>
            <div class="col col-md-3 col-lg-4">
                <img src="/about-1.jpg" class="w-100 pic1">
            </div>
            <div class="col col-md-3 col-lg-4">
                <img src="/about-2.jpg" class="w-100 pic2">
            </div>
        </div>
    </div>
</template>
<style scoped>
.container{
    height: 100vh;
    display: flex;
    align-items: center;
}
.txt h3 {
    font-size: 1.5rem;
    color: var(--font-color);
    margin: 100px 0 20px 0;
}

.txt h1 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: .2rem;
    color: var(--font-color);
}

.txt p {
    font-size: 1rem;
    line-height: 2;
}

.pic1 {
    margin: 200px 0 0 150px;
    border-radius: 10px;
}

.pic2 {
    margin: 100px 0 0 50px;
    border-radius: 10px;
}

@media screen and (max-width: 768px) {
    .pic1 {
        margin: 20px 0;
        border-radius: 10px;
    }

    .pic2 {
        margin: 20px 0;
        border-radius: 10px;
    }
}
</style>