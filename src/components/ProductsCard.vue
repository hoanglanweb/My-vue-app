<template>
    <div class="Product">
        <div class="card" style="width: 32rem;">
            <img :src="require(`@/assets/product/${product.image}`)" class="card-img-top" alt="ảnh xe" />
            <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">{{ product.brand }}</p>
                
                <a href="#" class="btn btn-primary">Tìm Hiểu Thêm</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
    product: {
        type: Object,
        required: true,
    },
});
</script>

<style>
</style>