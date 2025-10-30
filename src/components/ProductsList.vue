<template>
    <div class="Product" v-if="fliterProduct && fliterProduct.length">
        <ProductsCard v-for="item in fliterProduct" :key="item.id" :product="item" />
    </div>

    <div v-else class="text-center">Không có sản phẩm nào.</div>
</template>


<script setup>
import { computed, onMounted } from "vue";
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
</script>

<style>
.Product {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 2rem;
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
</style>