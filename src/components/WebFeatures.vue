<template>
    <div class="features">
        <div class="logo-banner">
            <img src="../assets/logo-audi.png" alt="">
            <img src="../assets/logo-mer.png" alt="">
            <img src="../assets/logo-bmw.png" alt="">
            <img src="../assets/logo-rr.png" alt="">
            <img src="../assets/logo-porsche.png" alt="">
        </div>
        <div class="blur"></div>
        <h1 class="text" style="text-align: center; font-size: 5rem;">Với 14 năm kinh nghiệm </h1>
        <div class="section">
            <div>
                <img src="../assets/images/banner-04.jpg" alt="">
            </div>
            <div class="features-card">
                <div class="card-content">
                    <i class="fa-solid fa-car icon"></i>
                    <div class="card-item">
                        <h3 class="card__title">Dòng xe đa dạng</h3>
                        <p class="card__description">Từ sedan sang trọng đến SUV thể thao, bạn có thể dễ dàng chọn chiếc
                            xe
                            phù hợp với phong cách
                            riêng.</p>
                    </div>
                </div>
                <div class="card-content">
                    <i class="fa-solid fa-gem icon"></i>
                    <div class="card-item">
                        <h3 class="card__title">Dịch vụ chuyên nghiệp</h3>
                        <p class="card__description">Đội ngũ nhân viên tận tâm hỗ trợ 24/7, đảm bảo sự hài lòng tuyệt
                            đối.
                        </p>
                    </div>
                </div>
                <div class="card-content">
                    <i class="fa-solid fa-gear icon"></i>
                    <div class="card-item">
                        <h3 class="card__title">Công nghệ hiện đại</h3>
                        <p class="card__description">Hệ thống website thân thiện, tối ưu trải nghiệm người dùng và bảo
                            mật
                            thông tin khách hàng.</p>
                    </div>
                </div>
                <div class="card-content">
                    <i class="fa-solid fa-box icon"></i>
                    <div class="card-item">
                        <h3 class="card__title">Hậu mãi chu đáo</h3>
                        <p class="card__description">Cam kết bảo hành chính hãng, dịch vụ bảo dưỡng chuyên nghiệp và hỗ
                            trợ
                            khách hàng lâu dài.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style>
.features {
    padding: 80px 0;
    background: linear-gradient(180deg, #ffffff 0%, #f8f9fb 100%);
    font-family: "Poppins", sans-serif;
    min-height: 100vh;
}

.features .text {
    margin-top: 4rem;
    margin-bottom: 4rem;
    font-size: 3.5rem;

}

.blur {
    width: 1250px;
    margin: auto;
    border: 1px solid rgba(128, 128, 128, 0.123);
    margin-top: 2.5rem;
    margin-bottom: 2rem;
}

.logo-banner {
    max-width: 650px;
    margin: auto;
    display: flex;
    justify-content: center;
    gap: 8rem;
}

.logo-banner img {
    width: 14%;
    filter: opacity(0.5);
    transition: all .3s ease-in-out;
    cursor: pointer;
}

.logo-banner img:hover {
    filter: opacity(1);
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

.section {
    display: flex;
    justify-content: space-between;
}

.features-card {
   display: grid;
   grid-template-columns: repeat(2,1fr);
   gap: 1rem;
}

.card-content {
    position: relative;
    width: 300px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card-content .icon {
    font-size: 2rem;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card-content:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card-item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card-content:hover .card-item {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
}

.card-item h3 {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
}

.card-item p {
    margin: 10px 0 0;
    font-size: 20px;
    color: #777;
    line-height: 1.4;
}

.card-content:hover .icon {
    scale: 0;
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