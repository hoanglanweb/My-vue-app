<template>
    <div>
        <div class="Product" v-if="fliterProduct && fliterProduct.length">
            <ProductsCard v-for="item in pageProduct" :key="item.id" :product="item" />
        </div>
        <div class="product-pagination space" v-if="totalPage" 1>
            <button class="page-btn" :disabled="page == 1" @click="gotoPage(page - 1)">Pre</button>
            <button :class="{ active: p == page }" class="page-btn" v-for="p in totalPage" :key="p"
                @click="gotoPage(p)">{{ p }}</button>
            <button class="page-btn" :disabled="page == totalPage" @click="gotoPage(page + 1)">Next</button>
        </div>
        <div v-else class="text-center">Không có sản phẩm nào.</div>
    </div>
</template>


<script setup>
import { computed, onMounted, ref ,watch } from "vue";
import { useProductStore } from "@/store/ProductsAPI";
import ProductsCard from "./ProductsCard.vue";
import { useRoute } from "vue-router";

const store = useProductStore();
const route = useRoute();

onMounted(() => {
    store.fetchProduct();
});

const fliterProduct = computed(() => {
    const brand = route.query.brand
    if (!brand) return store.product
    return store.product.filter((item) => item.brand.toLowerCase() === brand.toLowerCase())
})
const page = ref(1);
const perPage = ref(6)

const totalPage = computed(() => Math.ceil(fliterProduct.value.length / perPage.value))

const pageProduct = computed(() => {
    const start = (page.value - 1) * perPage.value
    return fliterProduct.value.slice(start, start + perPage.value)
})
function gotoPage(p) {
    if (p >= 1 && p <= totalPage.value) {
        page.value = p
    }
}
watch(() => route.query.brand, () => {
    page.value = 1;
});
</script>

<style>
.Product {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 2rem;
    margin-top: 4rem;
}



@media (max-width: 992px) {
    .Product {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .Product {
        grid-template-columns: 1fr;
    }
}

.product-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin: 20px 0;
}

.page-btn {
    padding: 8px 14px;
    font-size: 14px;
    background: #252324;
    color: #fff;
    border: 1px solid #FC5B22;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.25s ease;
}

/* Hover */
.page-btn:hover:not(:disabled) {
    background: #FC5B22;
    border-color: #FC5B22;
    color: #252324;
}

/* Nút đang active */
.page-btn.active {
    background: #FC5B22;
    color: #252324;
    border-color: #FC5B22;
    font-weight: 600;
}

/* Disable nút Pre / Next */
.page-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
}
</style>