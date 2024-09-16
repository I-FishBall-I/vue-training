<script setup>
</script>


<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-2">
            <div class="col col-md-6 col-lg-4">
                <div class="d-flex flex-column justify-content-space-around txt">
                    <h3>About Us</h3>
                    <h1>Bringing 100% natural juices straight to your door</h1>
                    <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text”
                        or double click me to add your own content and make changes to the font. I’m a great place for
                        you to tell a story and let your users know a little more about you.</p>
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