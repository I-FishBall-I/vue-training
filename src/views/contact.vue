<script setup>
</script>


<template>
    <div class="container d-flex align-items-center">
        <div class="row row-cols-1 row-cols-lg-2 ">
            <div class="col-12 col-lg-4">
                <div class="title">
                    <h1>Get in Touch</h1>
                    <p>Fill in the form with your questions, comments and concerns, and we will get right back to you.
                    </p>
                </div>
            </div>
            <div class="col-12 col-lg-7 offset-lg-1">
                <form class="row g-3">
                    <div class="col-md-12">
                        <label for="inputEmail4" class="form-label">Name</label>
                        <input type="email" class="form-control" id="inputEmail4">
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">E-mail</label>
                        <input type="text" class="form-control" id="inputMail" placeholder="test@example.com">
                    </div>
                    <div class="col-12">
                        <div class="form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                                style="height: 100px"></textarea>
                            <label for="floatingTextarea2">Comments</label>
                        </div>
                    </div>
                    <div class="col-12 offset-lg-10 mt-4">
                        <button type="submit" class="btn">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    height: 100vh;
}

.title h1 {
    font-size: 3rem;
    margin: 20px 0;
    color: var(--font-color);
    position: relative;
}

.title h1::after {
    content: '';
    width: 100%;
    height: 4px;
    background: var(--font-color);
    position: absolute;
    bottom: -10px;
    left: 0;
}

.title p {
    font-size: 1.5rem;
    margin: 40px 0;
    color: var(--font-color);
}

.btn {
    background-color: var(--font-color);
    color: #fff;
    border-radius: 20px;
}
</style>