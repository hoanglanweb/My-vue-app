<template>
    <div>
        <div class="layout">
            <h1>Sản phẩm nổi bật</h1>
            <ProductsList />
        </div>
    </div>
</template>

<script setup>
import ProductsList from './ProductsList.vue';

</script>

<style>
    .layout{
        height: 100vh;
    }
</style>