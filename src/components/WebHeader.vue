<template>
    <header>
        <!-- Navigation -->
        <nav class="navbar-menu">
            <div class="banner">
                <img src="../assets/images/banner-07.jpg" alt="">
            </div>
            <div class="text-center">
                <h1>
                    <span style="color: rgb(252,91,34);">Nâng tầm trải nghiệm </span><br> và tinh tế <br> từng nhịp lái
                </h1>
            </div>
            <div class="navbar_navigation">
                <div class="navbar_navigation__nav">
                    <ul class="menu_link">
                        <router-link  class="logo" to="/" style="color: rgb(252,91,34)">AutoDreams</router-link>
                        <div class="menu_link--navigation">
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
                            <li style="font-size: 1.35rem;"><router-link to="/user"><i
                                        class="fa-solid fa-user"></i></router-link></li>
                            <li style="font-size: 1.35rem;"><router-link to="/cart"><i
                                        class="fa-solid fa-cart-shopping"></i></router-link></li>
                        </div>
                    </ul>
                    <ul class="Btn-buy">
                        <li><a href="#" class="sdt">0867790028</a></li>
                        <li><a href="#" class="button">Liên hệ</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import data from '@/data/products.json'
const brands = [...new Set(data.products.map(item => item.brand))]
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");
.navbar-menu{
    margin-bottom: 6rem;
}
/* ==== BANNER + NAVBAR ==== */
.banner {
    position: relative;
    overflow: hidden;
}

.banner img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
    transform: scale(1.1);
    transform-origin: center;
}

/* ==== NAVBAR ==== */
.navbar_navigation {
    position: absolute;
    top: 10px;
    left: 0;
    padding: 22px 70px;
    width: 100%;
    z-index: 100;
}

.navbar_navigation__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.text-center {
    position: absolute;
    top: 300px;
    right: 100px;
}

.text-center h1 {
    color: #fff;
    font-size: 5.5rem;
    text-align: right;
    font-weight: 400;
    text-transform: uppercase;
}

.Btn-buy {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.Btn-buy li a {
    color: #fff;
}

.Btn-buy li .sdt {
    font-size: 1.6rem;
}

.Btn-buy li .button {
    appearance: none;
    background-color: rgb(253,86,34);
    border-radius: 0.9375em;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    min-height: 3.75em;
    min-width: 0;
    outline: none;
    padding: 1em 2.5em;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform;
}

.Btn-buy li .button:disabled {
    pointer-events: none;
}

.Btn-buy li .button:hover {
    color: #fff;
    background-color: orange;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
}

.Btn-buy li .button:active {
    box-shadow: none;
    transform: translateY(0);
}

/* Menu */
.menu_link {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 6rem;
}

.menu_link .menu_link--navigation {
    display: flex;
    justify-content: space-between;
    width: 450px;
}

.menu_link .logo {
    font-size: 2.5rem;
}

.menu_link li {
    position: relative;
}

.menu_link a {
    color: #fff;
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 500;
    transition: 0.3s ease;
}

.menu_link a:hover,
.router-link-active {
    color: #ff6600;
}

/* ==== DROPDOWN ==== */
.dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;

    background: rgba(20, 20, 20, 0.95);
    backdrop-filter: blur(6px);

    padding: 12px 0;
    min-width: 240px;
    border-radius: 10px;
    list-style: none;

    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.3);
}

.dropdown:hover .dropdown-menu {
    display: block;
}

.dropdown-menu li {
    padding: 10px 20px;
}

.dropdown-menu li a {
    color: #fff;
    font-size: 1rem;
    display: block;
}

.dropdown-menu li a:hover {
    color: #ff6600;
}

/* ==== ICONS ==== */
.menu_link i {
    font-size: 1.4rem;
    color: #fff;
    transition: 0.3s;
}

.menu_link i:hover {
    color: #ff6600;
}

</style>
