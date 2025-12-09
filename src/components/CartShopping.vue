<template>
    <div class="container">
        <div class="content">
            <!-- Cart / Selected Cars -->
            <section class="left">
                <h2 class="title">Giỏ hàng — Xe của bạn</h2>

                <div v-if="cart.length" class="cart-list">
                    <div v-for="(item) in cart" :key="item.id" class="cart-item">
                        <img :src="require(`@/assets/product/${item.image}`)" alt="car" class="car-image_cart" />
                        <button class="btn btn-primary remove" @click="removeFromCart(index)">Xóa</button>
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
                        <!-- <p class="item-meta">{{ item.brand }}</p> -->
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

.remove {
   
}

/* ====== GLOBAL ====== */
.container {
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    background: #303030;
    border-radius: 12px;
    padding: 40px;
    color: #fff;
    font-family: Arial, sans-serif;
}

.content {
    display: flex;
    gap: 40px;
}

/* ====== LEFT SECTION ====== */
.left {
    width: 60%;
}

.title {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 20px;
}

.cart-list {
    background: #262626;
    padding: 20px;
    border-radius: 10px;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    background: #303030;
    border-radius: 10px;
    margin-bottom: 15px;
    align-items: center;
}

.car-image_cart {
    width: 440px;
    height: 380px;
    object-fit: contain;
}

/* Xóa item */
.remove {
    background: #FD5622;
    color: #fff;
    border: none;
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    margin-bottom: 12px;
}

.remove:hover {
    opacity: 0.8;
}

/* Input + buttons */
.controls-row {
    display: flex;
    gap: 12px;
    align-items: center;
    margin-top: 20px;
}

.input {
    flex: 1;
    padding: 12px;
    background: #1f1f1f;
    border: 1px solid #444;
    border-radius: 6px;
    color: #fff;
}

.btn {
    padding: 12px 20px;
    background: #FD5622;
    border: none;
    border-radius: 6px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
}

.btn:hover {
    opacity: 0.85;
}

.coupon-msg {
    color: #FD5622;
    font-size: 14px;
}

/* Notes */
.notes {
    margin-top: 20px;
}

.label {
    display: block;
    margin-bottom: 6px;
    opacity: 0.8;
}

.textarea {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    background: #1f1f1f;
    border: 1px solid #444;
    color: #fff;
}

.empty {
    padding: 20px;
    background: #262626;
    text-align: center;
    border-radius: 8px;
    font-size: 16px;
}

/* ====== RIGHT SECTION ====== */
.right {
    width: 40%;
    background: #262626;
    padding: 25px;
    border-radius: 12px;
    height: fit-content;
}

.subtitle {
    font-size: 22px;
    margin-bottom: 15px;
}

.item-info {
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #444;
}

.item-name {
    font-size: 18px;
    font-weight: 500;
}

.item-meta {
    font-size: 14px;
    color: #d6d6d6;
}

/* Summary */
.summary {
    margin-top: 15px;
}

.row {
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
}

.discount span {
    color: #FD5622;
}

.total-row {
    margin-top: 15px;
    padding: 14px;
    background: #1f1f1f;
    border-radius: 10px;
}

.total {
    font-size: 22px;
    font-weight: bold;
    margin-top: 4px;
}

/* Checkout form */
.checkout-form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.select {
    width: 100%;
    padding: 12px;
    background: #1f1f1f;
    border: 1px solid #444;
    border-radius: 6px;
    color: #fff;
}

.finance-note {
    background: #303030;
    padding: 10px;
    border-radius: 8px;
    margin-top: 10px;
    font-size: 14px;
    color: #ffb38a;
}

.charge-btn {
    margin-top: 15px;
    width: 100%;
    padding: 14px;
    background: #FD5622;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
}

.charge-btn:hover {
    opacity: 0.85;
}

/* Success */
.success {
    margin-top: 20px;
    background: #1f1f1f;
    padding: 14px;
    border-left: 4px solid #FD5622;
    border-radius: 8px;
    color: #fff;
}

/* Responsive */
@media (max-width: 900px) {
    .content {
        flex-direction: column;
    }

    .left,
    .right {
        width: 100%;
    }
}
</style>