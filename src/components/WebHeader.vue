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
        <nav class="navbar">
            <div class="logo">ModelPro</div>
            <div class="navbar_navigation">
                <ul class="menu">
                    <router-link to="/"><a href="#">Trang Chủ</a></router-link>
                    <router-link to="/about"><a href="#">Giới thiệu</a></router-link>
                    <router-link to="/product"><a href="#">Sản phẩm</a></router-link>
                    <li><a href="#">Liên hệ</a></li>
                </ul>
                <button class="visit-btn">
                    <span class="icon-circle">
                        <i class="fa-solid fa-calendar-alt"></i>
                    </span>
                    Schedule a visit
                </button>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'WebHeader',
}
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
    font-size: 14px;
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
    width: 34px;
    height: 30px;
    background-color: #cdcdcdb0;
    border-radius: 50%;
}

.social-icons i:hover {
    color: #ff5b00;
}

/* --- NAVBAR --- */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 60px;
}

.logo {
    font-size: 26px;
    font-weight: 700;
    letter-spacing: 1px;
}
.navbar_navigation{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 750px;
}
.menu {
    list-style: none;
    display: flex;
    gap: 40px;
    margin: 0;
    padding: 0;
}

.menu a {
    text-decoration: none;
    color: #000;
    font-weight: 500;
    transition: color 0.3s;
}

.menu a:hover {
    color: #ff5b00;
}

.menu a.active {
    color: #ff5b00;
}

.blur{
    border: 1px solid rgba(128, 128, 128, 0.249);
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
