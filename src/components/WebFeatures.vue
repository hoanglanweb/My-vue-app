<template>
    <div class="features">
        <div class="logo-banner">
            <img src="../assets/logo-audi.png" alt="">
            <img src="../assets/logo-mer.png" alt="">
            <img src="../assets/logo-bmw.png" alt="">
        </div>
        <div class="blur"></div>
        <h1 class="text" style="text-align: center;">The Ultimate Driving Experience</h1>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4 column-1">
                    <img src="../assets/images/features-01.jpg" alt="">
                </div>
                <div class="col-lg-5 column-2">
                    <h1 style="text-align: center;">Our Greatest Car Sellers</h1>
                    <div v-for="item in featuresContent" :key="item.id" class="feature-box">
                        <!-- Tiêu đề có thể click -->
                        <div class="header" @click="toggleBox(item.id)">
                            <p class="title">{{ item.title }}</p>
                            <span>{{ activeBox === item.id ? '' : '' }}</span>
                        </div>

                        <!-- Nội dung ẩn/hiện theo hộp đang mở -->
                        <transition name="slide">
                            <div v-if="activeBox === item.id" class="content">
                                <p>{{ item.content }}</p>
                            </div>
                        </transition>
                    </div>
                </div>
                <div class="col-lg-3 column-3">
                    <ul>
                        <li>
                            <img src="" alt="">
                            <h4>
                                Limit
                                <span></span>
                            </h4>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src="" alt="">
                            <h4>
                                Contact
                                <span></span>
                            </h4>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src="" alt="">
                            <h4>
                                Payment
                                <span></span>
                            </h4>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src="" alt="">
                            <h4>
                                Safety
                                <span></span>
                            </h4>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import featuresContent from '../data/Data.json'
const activeBox = ref(null)
function toggleBox(id) {
    activeBox.value = activeBox.value === id ? null : id
}
</script>

<style>
.features {
    padding: 80px 0;
    background: linear-gradient(180deg, #ffffff 0%, #f8f9fb 100%);
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
}
.features .text{
    margin-top: 4rem;
    margin-bottom: 4rem;
    font-size: 3.5rem;

}
.blur{
    width: 1250px;
    margin: auto;
    border: 1px solid rgba(128, 128, 128, 0.123);
    margin-top: 2.5rem;
    margin-bottom: 2rem;
}
.logo-banner{
    max-width: 650px;
    margin: auto;
    display: flex;
    justify-content: center;
    gap: 12rem;
}
.logo-banner img{
    width: 25%;
    filter: opacity(0.6);
}
.container {
    max-width: 1300px;
    margin: auto;
}

.row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 50px;
}

/* ===== CỘT 1 ===== */
.column-1 {
    width: 540px;
    position: relative;
}

.column-1 img {
    width: 100%;
    object-fit: cover;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    transition: transform 0.4s ease;
}

.column-1 img:hover {
    transform: scale(1.03);
}

/* ===== CỘT 2 ===== */
.column-2 {
    width: 400px;
    margin: 0 auto;
}

.feature-box {
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    margin-bottom: 14px;
    background: #fff;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.25s ease, box-shadow 0.3s ease;
}

.feature-box:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 18px;
    cursor: pointer;
    background: #f9fafc;
    font-weight: 600;
    font-size: 15px;
    color: #333;
    transition: all 0.3s ease;
}

.header:hover {
    background: #eef2f7;
}

.header span {
    font-size: 20px;
    color: #ff6b35;
    transition: transform 0.3s ease;
}

/* Mũi tên xoay khi mở */
.header.active span {
    transform: rotate(180deg);
}

/* Nội dung ẩn/hiện */
.content {
    padding: 12px 18px 18px;
    line-height: 1.6;
    font-size: 14px;
    color: #555;
    overflow: hidden;
}

/* Hiệu ứng trượt */
.slide-enter-active,
.slide-leave-active {
    transition: max-height 0.4s ease, opacity 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    max-height: 0;
    opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
    max-height: 400px;
    opacity: 1;
}

/* ===== CỘT 3 ===== */
.column-3 {
    width: 260px;
    background: #fff;
    border-radius: 12px;
    padding: 30px 28px;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
}

.column-3 ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.column-3 li {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding: 16px 0;
    transition: all 0.3s ease;
}

.column-3 li:last-child {
    border-bottom: none;
}

.column-3 li:hover {
    transform: translateX(5px);
}

.column-3 img {
    width: 40px;
    height: 40px;
    margin-right: 14px;
    filter: invert(50%) sepia(97%) saturate(1730%) hue-rotate(346deg) brightness(99%) contrast(96%);
}

.column-3 h4 {
    font-size: 16px;
    font-weight: 600;
    color: #222;
    margin: 0;
}

.column-3 span {
    display: block;
    font-size: 13px;
    color: #999;
    margin-top: 4px;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 992px) {
    .row {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .column-1,
    .column-2,
    .column-3 {
        width: 100%;
    }

    .column-3 {
        margin-top: 30px;
    }
}
</style>