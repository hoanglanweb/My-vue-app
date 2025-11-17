<template>
    <div class="layout">
        <h1>dòng xe nổi bật</h1>
        <p>Trải nghiệm sự xa hoa tuyệt đối cùng những mẫu xe sang hàng đầu</p>
        <ProductsList />
    </div>
</template>

<script setup>
import ProductsList from './ProductsList.vue';

</script>

<style>
.layout {
    max-width: 1280px;
    margin: auto;
}

.layout h1 {
    color: rgb(253,86,34); 
    text-align: center;
    font-size: 3rem;
}

p {
    margin-top: 1;
    color: #fff;
    text-align: center;
}
</style>