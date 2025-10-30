<template>
    <div class="layout">
        <h1>Sản phẩm nổi bật</h1>
        <ProductsList />
    </div>
</template>

<script setup>
import ProductsList from './ProductsList.vue';

</script>

<style>
    .layout{
        max-width: 1380px;
        margin: auto;
    }
</style>