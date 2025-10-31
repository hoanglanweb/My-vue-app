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
                <p class="price">{{ product.price }}</p>
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
                </div>

                <div class="btn-group">
                    <button class="btn buy-now">Mua ngay</button>
                    <button class="btn add-cart">Thêm vào giỏ hàng</button>
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
import { useRoute } from 'vue-router';
import { useProductStore } from '@/store/ProductsAPI';
import { computed, onMounted } from 'vue';


const route = useRoute()
const store = useProductStore()

onMounted(() => {
    store.fetchProduct()
})
const product = computed(() => {
    return store.product.find((p) => p.id === parseInt(route.params.id))
})
</script>

<style scoped>
.ProductsDetails-Layout {
    max-width: 1280px;
    margin: 3rem auto;
    font-family: "Poppins", sans-serif;
    padding: 0 2rem;
}

.ProductsDetails-Layout__Features {
    display: flex;
    gap: 3rem;
    align-items: flex-start;
    flex-wrap: wrap;
}

.item-1 img {
    width: 550px;
    border-radius: 12px;
}

.item-2 {
    flex: 1;
}

.title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.price {
    color: #e63946;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.desc {
    color: #555;
    margin-bottom: 2rem;
    line-height: 1.6;
}

.item-2__col {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem 2rem;
    margin-bottom: 2rem;
}

.spec {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1rem;
    background: #f8f9fa;
    padding: 0.75rem 0.75rem;
    border-radius: 6px;
}

.spec-label {
    font-weight: 500;
    color: #333;
}

.spec-value {
    color: #111;
    font-weight: 600;
}

.btn-group {
    display: flex;
    gap: 1rem;
}

.btn {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.add-cart {
    background: #333;
    color: white;
}

.add-cart:hover {
    background: #555;
}

.buy-now {
    background: #e63946;
    color: white;
}

.buy-now:hover {
    background: #d62828;
}

.ProductsDetails-Description {
    margin-top: 4rem;
    background: #fafafa;
    padding: 2rem;
    border-radius: 12px;
    line-height: 1.8;
}

.ProductsDetails-Description h2 {
    margin-bottom: 1rem;
}
</style>
