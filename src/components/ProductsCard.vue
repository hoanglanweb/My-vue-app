<template>
    <div class="card" @click.prevent="goToDetails">
        <div class="car-card">
            <!-- Image + Price -->
            <div class="car-image">
                <img :src="require(`@/assets/product/${product.image}`)" alt="ảnh xe" />
            </div>

            <!-- Title -->
            <div class="info">
                <div class="info-content">
                    <div class="item-1">
                        <h2>{{ props.product.name }}</h2>
                        <span class="price">{{ formatCurrency(props.product.price) }}</span>
                    </div>
                    <div class="item-2">
                        <p class="sub">{{ props.product.style }} • {{ props.product.year }}</p>
                    </div>
                </div>

                <!-- Specs -->
                <div class="specs">
                    <div class="spec">
                        <i class="icon">
                            <BsClockHistory />
                        </i>
                        <p>{{ props.product.details.maxspeed }}</p>
                    </div>
                    <div class="spec">
                        <i class="icon">
                            <CoSettings />
                        </i>
                        <p>{{ props.product.details.engine }}</p>
                    </div>
                    <div class="spec">
                        <i class="icon">
                            <BsFuelPumpDiesel />
                        </i>
                        <p>{{ props.product.details.fuel }}</p>
                    </div>
                    <div class="spec">
                        <i class="icon">
                            <CaAutomatic />
                        </i>
                        <p>{{ props.product.transmission }}</p>
                    </div>
                </div>

                <!-- Footer -->
                <div class="footer">
                    <span>Sức Mạnh: <b>{{ props.product.details.capacity }}</b></span>
                    <span>Động cơ: <b>{{ props.product.details.engineType }}</b></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { defineProps } from "vue";
import { useRouter } from "vue-router";
import { BsClockHistory } from '@kalimahapps/vue-icons';
import { CoSettings } from '@kalimahapps/vue-icons';
import { BsFuelPumpDiesel } from '@kalimahapps/vue-icons';
import { CaAutomatic } from '@kalimahapps/vue-icons';

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
function formatCurrency(v) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v)
}
</script>

<style>
.car-card {
    width: 420px;
    background: #1c1c1e;
    color: #fff;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.35);
    cursor: pointer;
}

.car-image {
    position: relative;
}

.car-image img {
    width: 100%;
    display: block;
}


.info {
    padding: 18px;
}

.info h2 {
    font-weight: 450;
    margin: 0;
    font-size: 2rem;
}

.info .price {
    font-size: 2rem;
}

.info .info-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.sub {
    opacity: 0.7;
    margin-bottom: 14px;
}

.specs {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
}

.spec {
    text-align: center;
    font-size: 1rem;
    opacity: 0.9;
}

.spec p {
    color: rgb(82, 80, 80);
}

.icon {
    display: block;
    font-size: 20px;
    margin-bottom: 5px;
}

.footer {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: 10px;
    font-size: 14px;
    opacity: 0.9;
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.footer span {
    font-size: 1.2rem;
    font-weight: 450;
}
</style>