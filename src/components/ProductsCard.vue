<template>
    <div class="card shadow-sm border-1 h-100 text-center" style="width: 28rem; border-radius: 12px; overflow: hidden;">
        <img :src="require(`@/assets/product/${product.image}`)" class="card-img-top img-fluid" alt="ảnh xe"
            style="height: 200px; object-fit: cover;" />

        <div class="card-body d-flex flex-column justify-content-between">
            <div>
                <h5 class="card-title fw-blod text-dark mt-2 fs-1">{{ product.name }}</h5>
            </div>

            <a href="#" class="btn btn-primary px-4 py-2 mt-auto fs-4" @click="goToDetails">
                Tìm Hiểu Thêm
            </a>
        </div>
    </div>

</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});

const router = useRouter()

const goToDetails = () => {
    router.push(`/product/${props.product.id}`)
}
</script>

<style></style>