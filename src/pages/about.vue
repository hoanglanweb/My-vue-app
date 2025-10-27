<template>
    <section class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <h1>Giới thiệu</h1>
                    <p> Xin chào! Mình là <strong>Nguyễn Hoàng Lân</strong>, hiện đang theo học tại <strong>Trường Cao
                            đẳng Kinh tế TP. Hồ Chí Minh</strong>. </p>
                    <p> Mình yêu thích công nghệ, lập trình web và đang từng bước phát triển bản thân trong lĩnh vực
                        này. Bên cạnh đó, mình luôn hướng tới việc học hỏi và hoàn thiện kỹ năng để trở thành một lập
                        trình viên chuyên nghiệp. </p>
                    <p> Cảm ơn bạn đã ghé thăm trang web của mình! </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>export default { name: "AboutPage", }; </script>
<style scoped>
.about {
    background-color: #fff;
    color: #333;
    padding: 100px 20px;
    font-family: "Poppins", sans-serif;
}

.container {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
}

.about-text h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #111;
}

.about-text p {
    line-height: 1.8;
    font-size: 1.1rem;
    margin-bottom: 1rem;
}
</style>
