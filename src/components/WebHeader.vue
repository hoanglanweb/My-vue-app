<template>
    <header>
        <!-- Top Bar -->
        <div class="top-bar">
            <div class="left-info">
                <div class="info-item">
                    <i class="fa-solid fa-envelope"></i>
                    <span>nguyenhoanlan@company.com</span>
                </div>
                <div class="divider"></div>
                <div class="info-item">
                    <i class="fa-solid fa-map-marker-alt"></i>
                    <span>Ho Chi Minh City</span>
                </div>
            </div>

            <div class="social-icons">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-instagram"></i>
            </div>
        </div>
        <div class="blur"></div>
        <!-- Navigation -->
        <nav class="navbar-menu">
            <div class="logo"><router-link to="/">ModelPro</router-link></div>

            <div class="navbar_navigation">
                <ul class="menu">
                    <li><router-link to="/about">Giới thiệu</router-link></li>
                    <li class="dropdown">
                        <router-link to="/product">Sản phẩm</router-link>
                        <ul class="dropdown-menu">
                            <li v-for="brand in brands" :key="brand">
                                <router-link :to="{ path: '/product', query: { brand } }">
                                    {{ brand }}
                                </router-link>
                            </li>
                        </ul>
                    </li>
                    <li><router-link to="/contact">Liên hệ</router-link></li>
                    <li><a href="">Đăng ký</a></li>
                    <li><a href="">Đăng nhập</a></li>
                </ul>
            </div>
        </nav>

    </header>
</template>

<script setup>
import data from '@/data/products.json'
const brands = [...new Set(data.products.map(item => item.brand))]
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");

header {
    width: 100%;
    font-family: "Poppins", sans-serif;
    border-bottom: 1px solid #eee;
    max-width: 1380px;
    margin: auto;
}

/* --- TOP BAR --- */
.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 60px;
    font-size: 26px;
    color: #666;
}

.left-info {
    display: flex;
    align-items: center;
    gap: 20px;
}

.info-item {
    display: flex;
    align-items: center;
    gap: 8px;
}

.info-item i {
    color: #ff5b00;
}

.divider {
    height: 16px;
    width: 1px;
    background-color: #ddd;
}

.social-icons {
    display: flex;
    gap: 16px;
    color: #aaa;
}

.social-icons i {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: color 0.3s;
    width: 45px;
    height: 40px;
    background-color: #cdcdcdb0;
    border-radius: 50%;
}

.social-icons i:hover {
    color: #ff5b00;
}

/* --- NAVBAR --- */
.navbar-menu {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 50px;
}

.logo {
    font-size: 3rem;
    font-weight: bold;
    color: #000;
    text-decoration: none;
}

.navbar_navigation {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.menu {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.menu li {
    position: relative;
}

.menu a,
.menu router-link {
    color: #000;
    text-decoration: none;
    font-weight: 500;
    padding: 10px;
    display: block;
    transition: color 0.3s ease;
    font-size: 1.6rem;
}

.menu a:hover,
.router-link-active {
    color: orangered;
}

/* DROP DOWN */
.dropdown {
    position: relative;
}

.dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #222;
    list-style: none;
    margin: 0;
    padding: 10px 0;
    min-width: 360px;
    border-radius: 6px;
    z-index: 999;
}

/* hiển thị khi hover */
.dropdown:hover .dropdown-menu {
    display: block;
}

.dropdown-menu li {
    padding: 8px 20px;
    white-space: nowrap;
}

.dropdown-menu li a {
    color: #fff;
    text-decoration: none;
    display: block;
}

.dropdown-menu li a:hover {
    color: orangered;
}

/* Nút Schedule */
.visit-btn {
    background-color: #ffce00;
    color: #111;
    border: none;
    padding: 10px 20px;
    border-radius: 30px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: 0.3s ease;
}

.visit-btn:hover {
    background-color: #fff;
    color: #111;
}

.icon-circle {
    background-color: #111;
    color: #ffce00;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* --- BUTTON --- */
.visit-btn {
    background-color: #000;
    color: #fff;
    border: none;
    padding: 10px 22px;
    border-radius: 40px;
    font-weight: 500;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background 0.3s;
}

.visit-btn:hover {
    background-color: #ff5b00;
}

.icon-circle {
    background-color: #ff5b00;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
}
</style>
