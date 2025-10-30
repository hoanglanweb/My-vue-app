<template>
    <div class="card shadow-sm border-1 h-100 text-center"
        style="width: 28rem; border-radius: 12px; overflow: hidden;">
        <img :src="require(`@/assets/product/${product.image}`)" class="card-img-top img-fluid" alt="ảnh xe"
            style="height: 200px; object-fit: cover;" />

        <div class="card-body d-flex flex-column justify-content-between">
            <div>
                <h5 class="card-title fw-semibold text-dark mt-2">{{ product.name }}</h5>
                <p class="card-text text-muted small mb-3">{{ product.brand }}</p>
            </div>

            <a href="#" class="btn btn-primary px-4 py-2 mt-auto">
                Tìm Hiểu Thêm
            </a>
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

<style></style>