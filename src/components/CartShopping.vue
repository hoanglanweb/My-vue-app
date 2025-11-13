<template>
    <div class="container">
        <div class="content">
            <!-- Cart / Selected Cars -->
            <section class="left">
                <h2 class="title">Giỏ hàng — Xe của bạn</h2>

                <button class="btn btn-primary remove" @click="removeFromCart(index)">Xóa</button>
                <div v-if="cart.length" class="cart-list">
                    <div v-for="(item) in cart" :key="item.id" class="cart-item">
                        <img :src="require(`@/assets/product/${item.image}`)" alt="car" class="car-image" />
                    </div>

                    <!-- voucher + notes -->
                    <div class="controls-row">
                        <input v-model="couponCode" placeholder="Mã giảm giá" class="input" />
                        <button class="btn" @click="applyCoupon">Áp dụng</button>
                        <div v-if="couponMessage" class="coupon-msg">{{ couponMessage }}</div>
                    </div>

                    <div class="notes">
                        <label class="label">Ghi chú đặt hàng (tùy chọn)</label>
                        <textarea v-model="note" rows="3" class="textarea"></textarea>
                    </div>
                </div>

                <div v-else class="empty">Giỏ hàng của bạn đang trống.</div>
            </section>

            <!-- Order Summary & Checkout Form -->
            <aside class="right">
                <h3 class="subtitle">Tóm tắt đơn hàng</h3>
                <div v-for="(item) in cart" :key="item.id">
                    <div class="item-info">
                        <h3 class="item-name">{{ item.name }}</h3>
                        <p class="item-meta">{{ item.brand }}</p>
                    </div>
                </div>
                <div class="summary">
                    <div class="row">
                        <span>Số mặt hàng: {{ totalItems }}</span>
                    </div>
                    <div class="row">
                        <span>Tạm tính: {{ formatCurrency(subtotal) }}</span>
                    </div>
                    <div class="row">
                        <span>Thuế (10%): {{ formatCurrency(tax) }}</span>
                    </div>
                    <div v-if="discountAmount" class="row discount">
                        <span>Giảm giá:{{ discountAmount }}</span>
                    </div>

                    <div class="total-row">
                        <div>
                            <div class="small">Tổng cộng</div>
                            <div class="total">{{ formatCurrency(total) }}</div>
                        </div>
                    </div>
                </div>

                <hr />

                <h4 class="subtitle">Thông tin người mua</h4>
                <form @submit.prevent="checkout" class="checkout-form">
                    <input v-model="customer.name" placeholder="Họ và tên" class="input" required />
                    <input v-model="customer.email" placeholder="Email" type="email" class="input" required />
                    <input v-model="customer.phone" placeholder="Số điện thoại" class="input" required />

                    <div class="select-row">
                        <label class="label">Hình thức thanh toán</label>
                        <select v-model="paymentMethod" class="select">
                            <option value="full">Thanh toán toàn bộ</option>
                            <option value="finance">Tín dụng / Trả góp</option>
                            <option value="cod">Trả khi nhận (COD)</option>
                        </select>
                    </div>

                    <div v-if="paymentMethod === 'finance'" class="finance-note">Lựa chọn trả góp: 6 tháng / 12 tháng /
                        24 tháng (thông tin ước tính).</div>

                    <button class="charge-btn">Thanh toán ({{ formatCurrency(total) }})</button>
                </form>

                <div v-if="successMessage" class="success">{{ successMessage }}</div>
            </aside>
        </div>
    </div>
</template>

<script setup>

import { useCartStore } from '@/store/Cart'
import { computed, ref, reactive } from 'vue'

const cartStore = useCartStore()
const cart = computed(() => cartStore.cart)

const couponCode = ref('')
const couponMessage = ref('')
const discountAmount = ref(0)
const note = ref('')
const customer = reactive({ name: '', email: '', phone: '' })
const paymentMethod = ref('full')
const successMessage = ref('')

function removeFromCart(index) {
    cartStore.removeItem(index)
}

function formatCurrency(v) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v)
}

const subtotal = computed(() => cart.value.reduce((s, i) => s + i.price * (i.quantity || 1), 0))
const totalItems = computed(() => cart.value.reduce((s, i) => s + (i.quantity || 1), 0))
const tax = computed(() => Math.round(subtotal.value * 0.1))
const total = computed(() => subtotal.value + tax.value - discountAmount.value)

function applyCoupon() {
    if (!couponCode.value) {
        couponMessage.value = 'Vui lòng nhập mã.'
        return
    }
    if (couponCode.value.toUpperCase() === 'FLASH10') {
        const percent = 0.1
        const calc = Math.min(Math.round(subtotal.value * percent), 200000000)
        discountAmount.value = calc
        couponMessage.value = `Áp dụng thành công - giảm ${formatCurrency(calc)}`
    } else {
        discountAmount.value = 0
        couponMessage.value = 'Mã không hợp lệ.'
    }
}

function checkout() {
    if (!customer.name || !customer.email || !customer.phone) {
        alert('Vui lòng điền đầy đủ thông tin.')
        return
    }
    if (!cart.value.length) {
        alert('Giỏ hàng trống!')
        return
    }

    const order = {
        id: Date.now(),
        customer: { ...customer },
        items: cart.value,
        note: note.value,
        paymentMethod: paymentMethod.value,
        totals: { subtotal: subtotal.value, tax: tax.value, discount: discountAmount.value, total: total.value },
        createdAt: new Date().toISOString(),
    }

    console.log('ORDER:', order)
    successMessage.value = 'Đặt hàng thành công! Chúng tôi sẽ liên hệ bạn sớm.'
    cartStore.cart = [] // làm trống giỏ hàng
}
</script>

<style scoped>
:root {
    --bg: #f7f7f9;
    --card: #ffffff;
    --muted: #6b7280;
    --accent: #16a34a;
    /* green */
    --primary: #475569;
    /* slate */
    --radius: 14px;
}
.remove{
    position: absolute;
    top: 15px;
    right: 20px;
}
.container {
    min-height: 100vh;
    background: var(--bg);
    padding: 24px;
    box-sizing: border-box;
}

.content {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 360px;
    gap: 24px;
}

.left,
.right {
    position: relative;
    background: var(--card);
    padding: 20px;
    border-radius: var(--radius);
    box-shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
}

.title {
    font-size: 20px;
    margin-bottom: 16px;
    color: var(--primary)
}

.subtitle {
    font-size: 2rem;
    margin-bottom: 12px;
    color: var(--primary)
}

.cart-list {
    display: flex;
    flex-direction: column;
    gap: 14px
}

.cart-item {
    display: flex;
    align-items: center;
    gap: 14px;
    border: 1px solid #e6e9ee;
    padding: 12px;
    border-radius: 12px;
}

.car-image {
    width: 100%;
    /* height: 200px; */
    object-fit: cover;
    border-radius: 8px
}

.item-info {
    flex: 1
}

.item-name {
    font-weight: 600;
    margin: 0 0 4px
}

.item-meta {
    margin: 0;
    color: var(--muted);
    font-size: 13px
}

.item-controls {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 10px
}

.label {
    color: var(--muted);
    font-size: 13px
}

.qty-input {
    width: 72px;
    padding: 6px;
    border: 1px solid #d1d5db;
    border-radius: 6px
}

.remove-btn {
    margin-left: auto;
    background: none;
    border: none;
    color: #ef4444;
    cursor: pointer
}

.item-price {
    text-align: right;
    min-width: 120px
}

.small {
    color: var(--muted);
    font-size: 2rem;
}

.price {
    font-weight: 700;
    font-size: 18px
}

.controls-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 12px
}

.input {
    flex: 1;
    padding: 8px;
    border: 1px solid #d1d5db;
    border-radius: 8px
}

.btn {
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    background: #4f46e5;
    color: white;
    cursor: pointer;
    float: right;
}

.coupon-msg {
    color: #b45309;
    font-size: 13px
}

.notes {
    margin-top: 12px
}

.textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #d1d5db;
    border-radius: 8px
}

.empty {
    padding: 40px;
    text-align: center;
    color: var(--muted)
}

/* Right column */
.summary {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.row {
    display: flex;
    justify-content: space-between;
    color: var(--muted)
}

.row span {
    font-size: 1.5rem;
}

.discount {
    color: #059669
}

.total-row {
    border-top: 1px solid #eef2f6;
    padding-top: 12px;
    margin-top: 8px;
}

.total {
    font-size: 2rem;
    font-weight: 800
}

.checkout-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 8px
}

.select-row {
    display: flex;
    flex-direction: column
}

.select {
    padding: 8px;
    border: 1px solid #d1d5db;
    border-radius: 8px
}

.finance-note {
    font-size: 13px;
    color: var(--muted)
}

.charge-btn {
    padding: 12px;
    border-radius: 10px;
    background: var(--accent);
    color: white;
    border: none;
    cursor: pointer;
    font-weight: 700
}

.success {
    margin-top: 12px;
    padding: 10px;
    background: #ecfdf5;
    color: #065f46;
    border-radius: 8px
}

/* Responsive */
@media (max-width: 900px) {
    .content {
        grid-template-columns: 1fr;
    }
}
</style>