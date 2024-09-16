<script setup>



</script>

<template>
    <div class="container my-5 mx-auto">
        <div class="row">
            <div class="col-12">
                <div class="bread">
                    <div class="row row-cols-2">
                        <div class="col-6">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><router-link to="/" href="#">Home</router-link></li>
                                <li class="breadcrumb-item"><router-link to="/Subscription"
                                        href="#">Subscription</router-link></li>
                                <li class="breadcrumb-item active">Apple Citrus</li>
                            </ol>
                        </div>
                        <div class="col-2 offset-1 offset-lg-4">
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#">
                                        <span>Prev&laquo;</span>
                                    </a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">
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
                            <img src="/public/shop-juice1.jpg" class="img-fluid rounded-start">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title">Total Care</h5>
                                <p class="card-text">$50.00Price</p>
                                <select class="form-select">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One-time purchase $50.00</option>
                                    <option value="2">3 months Subscribe   $45.00 every month for 3 months</option>
                                    <option value="3">6 months Subscribe   $42.50every month for 6 months</option>
                                </select>
                                <button type="button" class="btn">Add to Cart</button>
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
                                            <div class="accordion-body">24 Pack</div>
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
                                            <div class="accordion-body">I'm a product detail. I'm a great place to add
                                                more information about your product such as sizing, material, care and
                                                cleaning instructions. This is also a great space to write what makes
                                                this product special and how your customers can benefit from this item.
                                            </div>
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
                                            <div class="accordion-body">I’m a Return and Refund policy. I’m a great
                                                place to let your customers know what to do in case they are
                                                dissatisfied with their purchase. Having a straightforward refund or
                                                exchange policy is a great way to build trust and reassure your
                                                customers that they can buy with confidence.</div>
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
                                            <div class="accordion-body">I'm a shipping policy. I'm a great place to add
                                                more information about your shipping methods, packaging and cost.
                                                Providing straightforward information about your shipping policy is a
                                                great way to build trust and reassure your customers that they can buy
                                                from you with confidence.</div>
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