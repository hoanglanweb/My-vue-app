<template>
    <div class="card">
        <img :src="require(`@/assets/product/${product.image}`)" class="card-img-top img-fluid" alt="ảnh xe"
            style="height: 200px; object-fit: cover;" />
        <div class="card__content">
            <p class="card__title">{{ product.name }}</p>
            <p class="card__description">{{ product.description }}</p>
            <!-- From Uiverse.io by vinodjangid07 -->
            <button class="Btn" @click.prevent="goToDetails">
                Tìm hiểu thêm
            </button>
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

<style>
/* From Uiverse.io by gharsh11032000 */
.card {
    position: relative;
    width: 430px;
    height: 250px;
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
}

.card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}

.card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card:hover .card__content {
    transform: rotateX(0deg);
}

.card__title {
    margin: 0;
    font-size: 2.5rem;
    color: #333;
    font-weight: 700;
}

.card:hover svg {
    scale: 0;
}

.card__description {
    margin: 10px 0 0;
    font-size: 1.3rem;
    color: #777;
    line-height: 1.4;
}

/* From Uiverse.io by vinodjangid07 */
.Btn {
    width: 130px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(15, 15, 15);
    border: none;
    color: white;
    font-weight: 600;
    gap: 8px;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
    position: relative;
    overflow: hidden;
    transition-duration: .3s;
    margin-top: 1rem;
}

.svgIcon {
    width: 16px;
}

.svgIcon path {
    fill: white;
}

.Btn::before {
    width: 130px;
    height: 130px;
    position: absolute;
    content: "";
    background-color: white;
    border-radius: 50%;
    left: -100%;
    top: 0;
    transition-duration: .3s;
    mix-blend-mode: difference;
}

.Btn:hover::before {
    transition-duration: .3s;
    transform: translate(100%, -50%);
    border-radius: 0;
}

.Btn:active {
    transform: translate(5px, 5px);
    transition-duration: .3s;
}
</style>