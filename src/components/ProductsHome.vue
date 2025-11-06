<template>
    <div class="layout">
        <h1 style="text-align: center; font-size: 4.5rem;">Sản phẩm nổi bật</h1>
        <ProductsList />
    </div>
</template>

<script setup>
import ProductsList from './ProductsList.vue';

</script>

<style>
.layout {
    max-width: 1380px;
    margin: auto;
    margin-bottom: 8rem;
}
.layout h1{
    margin-bottom: 4.5rem;
}
</style>