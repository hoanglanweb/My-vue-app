<template>
    <div class="ProductsDetails-Layout" v-if="product">
        <div class="ProductsDetails-Layout__Features">
            <!-- Hình sản phẩm -->
            <div class="item-1">
                <img :src="require(`@/assets/product/${product.image}`)" alt="Mercedes C200" />
            </div>

            <!-- Thông tin sản phẩm -->
            <div class="item-2">
                <h1 class="title">{{ product.name }}</h1>
                <p class="price">{{formatCurrency( product.price) }}</p>
                <p class="desc">
                    {{ product.description }}
                </p>

                <div class="item-2__col">
                    <div class="spec">
                        <span class="spec-label">Công suất:</span>
                        <span class="spec-value">{{ product.details.capacity }}</span>
                    </div>
                    <div class="spec">
                        <span class="spec-label">Tốc độ tối đa:</span>
                        <span class="spec-value">{{ product.details.maxspeed }}</span>
                    </div>
                    <div class="spec">
                        <span class="spec-label">Dung tích động cơ:</span>
                        <span class="spec-value">{{ product.details.engine }}</span>
                    </div>
                    <div class="spec">
                        <span class="spec-label">Nhiên liệu:</span>
                        <span class="spec-value">{{ product.details.fuel }}</span>
                    </div>
                     <div class="spec">
                        <span class="spec-label">Động cơ:</span>
                        <span class="spec-value">{{ product.details.engineType }}</span>
                    </div>
                </div>

                <div class="btn-group">
                    <button @click="buyNow" class="btn buy-now">Mua Ngay</button>
                    <button @click="addToCart" class="btn add-cart">Thêm giỏ hàng</button>
                </div>
            </div>
        </div>

        <!-- Mô tả chi tiết -->
        <div class="ProductsDetails-Description">
            <h2>Giới thiệu chi tiết</h2>
            <p>
                {{ product.introduction }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useProductStore } from '@/store/ProductsAPI';
import { computed, onMounted } from 'vue';
import { useCartStore } from '@/store/Cart';


const route = useRoute()
const router =  useRouter()
const store = useProductStore()
const CartStore = useCartStore()

onMounted(() => {
    store.fetchProduct()
    console.log(store.product)
})
const product = computed(() => {
    return store.product.find((p) => p.id == parseInt(route.params.id))
})

function addToCart() {
    if (product.value) {
        CartStore.addItemCart(product.value);
        alert("✅ Đã thêm sản phẩm vào giỏ hàng!");
    }
}

function buyNow() {
    if (product.value) {
        CartStore.addItemCart(product.value); 
        router.push("/cart"); 
    }
}
function formatCurrency(v) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v)
}

</script>

<style scoped>
/* =============================
    CONTAINER CHUNG
============================= */
.ProductsDetails-Layout {
    width: 100%;
    padding: 80px 60px;
    font-family: "Inter", sans-serif;
    color: #e9e9e9;
    background: #303030;
}

/* =============================
    LAYOUT 2 CỘT
============================= */
.ProductsDetails-Layout__Features {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 50px;
    align-items: center;
}

/* =============================
    ẢNH SẢN PHẨM
============================= */
.item-1 img {
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
    background: #fff;
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35);
}

/* =============================
    THÔNG TIN
============================= */
.item-2 .title {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #fff;
}

.item-2 .price {
    font-size: 30px;
    font-weight: 800;
    margin-bottom: 18px;
    color: #FD5622;
    text-align: start;
}

.item-2 .desc {
    font-size: 16px;
    line-height: 1.75;
    margin-bottom: 28px;
    color: #d6d6d6;
    max-width: 500px;
    text-align: start;
}

/* =============================
    THÔNG SỐ (SPEC BOX)
============================= */
.item-2__col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px 18px;
    margin-bottom: 32px;
}

.spec {
    background: #3a3a3a;
    padding: 14px 18px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    border: 1px solid rgba(255,255,255,0.06);
    box-shadow: 0 3px 10px rgba(0,0,0,0.2);
}

.spec-label {
    font-weight: 600;
    color: #e8e8e8;
}

.spec-value {
    color: #FD5622;
    font-weight: 700;
}

/* =============================
    BUTTONS PREMIUM
============================= */
.btn-group {
    display: flex;
    gap: 16px;
}

.btn {
    padding: 14px 28px;
    border-radius: 10px;
    font-size: 17px;
    font-weight: 700;
    cursor: pointer;
    border: none;
    transition: 0.25s;
    letter-spacing: 0.3px;
}

.buy-now {
    background: #FD5622;
    color: #fff;
    box-shadow: 0 4px 14px rgba(253, 86, 34, 0.45);
}

.buy-now:hover {
    background: #e24d1f;
    transform: translateY(-2px);
}

.add-cart {
    background: #464646;
    color: #fff;
    box-shadow: 0 4px 14px rgba(0,0,0,0.3);
}

.add-cart:hover {
    background: #555;
    transform: translateY(-2px);
}

/* =============================
    MÔ TẢ CHI TIẾT
============================= */
.ProductsDetails-Description {
    margin-top: 50px;
}

.ProductsDetails-Description h2 {
    font-size: 28px;
    margin-bottom: 18px;
    border-left: 6px solid #FD5622;
    padding-left: 14px;
    color: #fff;
}

.ProductsDetails-Description p {
    font-size: 18px;
    line-height: 1.8;
    color: #FD5622;
    max-width: 900px;
    text-align: start;
}

/* =============================
    RESPONSIVE
============================= */
@media (max-width: 900px) {
    .ProductsDetails-Layout__Features {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .item-2 .desc,
    .ProductsDetails-Description p {
        margin: 0 auto;
    }

    .item-2__col {
        grid-template-columns: 1fr;
    }

    .btn-group {
        justify-content: center;
    }
}
</style>
