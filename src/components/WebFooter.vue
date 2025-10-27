<template>
    <footer class="site-footer">
        <div class="footer-top">
            <div class="brand">
                <div class="logo">AV</div>
                <div>
                    <h3 class="brand-title" style="color: #fff;">AutoVibe</h3>
                    <p class="brand-sub" style="color: #fff;">Driven by performance</p>
                </div>
            </div>

            <form class="newsletter" @submit.prevent="subscribe">
                <label for="email" class="visually-hidden">Email đăng ký</label>
                <input id="email" type="email" v-model="email" placeholder="Nhập email để nhận ưu đãi lái thử"
                    required />
                <button type="submit">Đăng ký</button>
            </form>
        </div>

        <div class="footer-middle">
            <nav class="links">
                <div style="display: flex; justify-content: center; align-items: center; gap: 12rem;">
                    <div>
                        <h4>Khám phá</h4>
                        <ul>
                            <li><a href="#">Inventory</a></li>
                            <li><a href="#">Xe mới</a></li>
                            <li><a href="#">Xe đã qua sử dụng</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Dịch vụ</h4>
                        <ul>
                            <li><a href="#">Bảo dưỡng & Sửa chữa</a></li>
                            <li><a href="#">Tư vấn tài chính</a></li>
                            <li><a href="#">Đặt lịch lái thử</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Hỗ trợ</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Chính sách bảo hành</a></li>
                            <li><a href="#">Liên hệ showroom</a></li>
                        </ul>
                    </div>
                </div>

                <div class="social">
                    <div class="icons">
                        <a aria-label="Facebook" href="#" class="icon" title="Facebook">
                            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path
                                    d="M22 12a10 10 0 10-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.3.2 2.3.2v2.6h-1.3c-1.3 0-1.7.8-1.7 1.6V12H22v0z" />
                            </svg>
                        </a>
                        <a aria-label="Instagram" href="#" class="icon" title="Instagram">
                            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path
                                    d="M12 7a5 5 0 100 10 5 5 0 000-10zm6.4-.5a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM21 8.1c0-1.8-.5-3.2-1.5-4.3C18.2 2.4 16.7 2 14.9 2H9.1C7.3 2 5.8 2.4 4.5 3.8 3.4 4.8 3 6.3 3 8.1v5.8c0 1.8.5 3.2 1.5 4.3 1.3 1.4 2.8 1.8 4.6 1.8h5.8c1.8 0 3.3-.4 4.6-1.8 1-1.1 1.5-2.5 1.5-4.3V8.1z" />
                            </svg>
                        </a>
                        <a aria-label="Youtube" href="#" class="icon" title="YouTube">
                            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path
                                    d="M10 15l5.2-3L10 9v6zm11-6.5s0-2-.8-2.9c-.8-.9-1.7-.9-2.1-1C15.6 4.5 12 4.5 12 4.5s-3.6 0-5.1.1c-.4 0-1.3.1-2.1 1C3.8 6.5 3 8.5 3 8.5S3 10 3 11.5v1c0 1.5 0 3 0 3s.8 2 1.8 2.9c.8.9 1.9.9 2.4 1 1.8.1 7 .1 7 .1s3.6 0 5.1-.1c.4 0 1.3-.1 2.1-1 .8-.9.8-2.9.8-2.9s0-1.5 0-3v-1c0-1.5 0-3 0-3z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>
        </div>

        <div class="footer-bottom">
            <p>© {{ year }} AutoVibe. All rights reserved.</p>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue'
const email = ref('')
const year = new Date().getFullYear()

function subscribe() {
    if (!email.value) return
    alert(`Cảm ơn ${email.value}! Bạn đã đăng ký nhận thông tin lái thử.`)
    email.value = ''
}
</script>

<style scoped>
.site-footer {
    background: #1e1e1e;
    color: #333;
    padding: 40px 20px;
    font-family: 'Poppins', sans-serif;
    border-top: 1px solid #eee;
}

.footer-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
}

.brand {
    display: flex;
    gap: 10px;
    align-items: center;
}

.logo {
    background: #111;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
}

.newsletter {
    display: flex;
    gap: 8px;
}

.newsletter input {
    padding: 10px 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    min-width: 200px;
}

.newsletter button {
    background: #111;
    color: white;
    border: none;
    padding: 10px 14px;
    border-radius: 8px;
    cursor: pointer;
}

.footer-middle {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 24px;
    padding: 24px 0;
}

.links h4 {
    margin-bottom: 8px;
    color: #fff;
    font-weight: 700;
    font-size: 2rem;
}

.links ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.links a {
    color: #fff;
    text-decoration: none;
}

.links a:hover {
    text-decoration: underline;
}

.social .icons {
    display: flex;
    gap: 10px;
}

.icon {
    display: inline-flex;
    width: 36px;
    height: 36px;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    background: #f6f6f6;
    transition: background 0.2s;
}

.icon:hover {
    background: #ddd;
}

.footer-bottom {
    text-align: center;
    padding-top: 16px;
    border-top: 1px solid #eee;
    font-size: 0.9rem;
    color: #777;
}

.visually-hidden {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap;
}
</style>