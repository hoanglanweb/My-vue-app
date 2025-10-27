<template>
    <div class="Product">
        <ProductsCard v-for="item in store.product" :key="item.id" :product="item" />
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useProductStore } from "@/store/ProductsAPI";
import ProductsCard from "./ProductsCard.vue";

const store = useProductStore();

onMounted(() => {
  store.fetchProduct();
});
</script>

<style>
    .Product{
        display: flex;
        justify-content: center;
        gap: 6rem;
        margin-top: 3rem;
        flex-wrap: wrap;
    }
</style>