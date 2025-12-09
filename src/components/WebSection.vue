<template>
    <div class="Section-main">
        <section class="hero">

            <div class="hero-wrapper">
                <div class="hero-left">
                    <h1 class="hero-title">
                        Luxuriate in your drive,
                        <span class="highlight">savor every journey</span>
                    </h1>
                    <p class="hero-desc">
                        Sed ut perspiciatis unde omnis iste natus ut perspiciatis unde omnis iste perspiciatis ut
                        perspiciatis
                        unde omnis iste natus.
                    </p>

                    <div class="small-img">
                        <img src="https://rentic.axiomthemes.com/wp-content/uploads/2024/12/rentic-img-2-2-copyright.jpg"
                            alt="Green Car" />
                    </div>
                </div>

                <!-- RIGHT IMAGE -->
                <div class="hero-right">
                    <img src="https://rentic.axiomthemes.com/wp-content/uploads/2024/09/rentic-img-1-copyright.jpg"
                        alt="Model with car" />
                </div>
            </div>
            <!-- LEFT CONTENT -->

        </section>
        <section class="slider">
            <div class="sliders">
                <img v-for="(img, index) in images" :key="index" :src="img" alt="myCar">
            </div>
        </section>
        <section class="testimonial-section">
            <h2 class="title">
                What <span>clients</span> Say
            </h2>
            <p class="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit vitae porta.
            </p>

            <div class="testimonial-cards">
                <div v-for="(item, index) in testimonials" :key="index" class="card" :class="{ active: index === 1 }">
                    <div class="quote-icon">❞</div>
                    <p class="content">{{ item.text }}</p>
                    <div class="triangle"></div>
                </div>
            </div>

            <div class="authors">
                <div v-for="(item, index) in testimonials" :key="'auth-' + index" class="author">
                    <img :src="require(`@/assets/images/${item.avatar}`)" alt="" />
                    <h4>{{ item.name }}</h4>
                </div>
            </div>
        </section>
        <section class="hero-video">
            <div class="video-wrapper">
                <iframe ref="youtubeIframe" width="914" height="314" :src="videoSrc"
                    title="Rolls-Royce | Chapter III: Love Letters to Goodwood" frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture" allowfullscreen controls=0
                    modestbranding=1></iframe>
            </div>
        </section>
        <section class="process">
            <!-- LEFT -->
            <div class="process-left">
                <h2 class="process-title">
                    Simplified car <br />
                    <span>rental process</span>
                </h2>
                <p class="process-desc">
                    Sed ut perspiciatis unde omnis iste natus ut perspiciatis unde omnis
                    iste perspiciatis ut perspiciatis unde omnis iste natus.
                </p>
            </div>

            <!-- RIGHT -->
            <div class="process-right">

                <div class="step">
                    <div class="icon-box"><i class="fas fa-car-side"></i></div>
                    <div>
                        <h3 class="step-title">Vehicle selection</h3>
                        <p class="step-desc">Sed ut perspiciatis unde omnis iste natus ut perspiciatis unde omnis iste
                            perspiciatis ut.</p>
                    </div>
                </div>

                <div class="line"></div>

                <div class="step">
                    <div class="icon-box"><i class="fas fa-file-contract"></i></div>
                    <div>
                        <h3 class="step-title">Insurance services</h3>
                        <p class="step-desc">Sed ut perspiciatis unde omnis iste natus ut perspiciatis unde omnis iste
                            perspiciatis ut.</p>
                    </div>
                </div>

                <div class="line"></div>

                <div class="step">
                    <div class="icon-box"><i class="fas fa-credit-card"></i></div>
                    <div>
                        <h3 class="step-title">Payment</h3>
                        <p class="step-desc">Sed ut perspiciatis unde omnis iste natus ut perspiciatis unde omnis iste
                            perspiciatis ut.</p>
                    </div>
                </div>
                <div class="line"></div>
                <div class="step">
                    <div class="icon-box"><i class="fas fa-smile"></i></div>
                    <div>
                        <h3 class="step-title">Happy driving</h3>
                        <p class="step-desc">Sed ut perspiciatis unde omnis iste natus ut perspiciatis unde omnis iste
                            perspiciatis ut.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="news-section">
            <h2 class="heading">Latest <span>news</span></h2>
            <p class="subtitle">Morbi lorem dolor, congue sed ipsum vel, vulputate sollicitudin ante.</p>


            <div class="news-grid">
                <div v-for="(item, index) in news" :key="index" class="news-card">
                    <img :src="require(`@/assets/product/${item.image}`)" class="thumb" />


                    <div class="content-news">
                        <span class="tag">NEWS</span>
                        <h3 class="title">{{ item.title }}</h3>


                        <div class="meta">
                            <span>{{ item.date }}</span>
                            <span>•</span>
                            <span>0 Comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="discount-banner">
            <div class="content">
                <h2>Buy a car with 15% discount for 2 days</h2>
                <button class="btn">View More</button>
            </div>
        </section>
        <div class="blur"></div>
        <div class="blur"></div>
        <div class="blur"></div>
        <div class="blur"></div>
        <div class="blur"></div>
        <div class="blur"></div>
        <div class="blur"></div>
        <div class="blur"></div>
        <div class="blur"></div>
        <div class="blur"></div>
        <div class="blur"></div>

    </div>
</template>

<script setup>
const images = [
    require('@/assets/logo-audi.png'),
    require('@/assets/logo-bmw.png'),
    require('@/assets/logo-mer.png'),
    require('@/assets/logo-rr.png'),
    require('@/assets/logo-porsche.png'),
]
const testimonials = [
    {
        text: "Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut rspiciatis.",
        name: "Samuel Donovan",
        avatar: "avatar.jpg",
    },
    {
        text: "Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut rspiciatis.",
        name: "Victoria Edwards",
        avatar: "avatar.jpg",
    },
    {
        text: "Sed ut perspiciatis unde omnis iste natus ut perspic iatis unde omnis iste perspiciatis ut rspiciatis.",
        name: "Jason Hall",
        avatar: "avatar.jpg",
    },
];
import { ref, onMounted } from 'vue'

const youtubeIframe = ref(null)

// Gắn video URL với autoplay và mute
const videoSrc =
    'https://www.youtube.com/embed/ZAdP6Wj0c80?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=ZAdP6Wj0c80&showinfo=0&iv_load_policy=3'

onMounted(() => {
    // Không cần JS để play, iframe sẽ tự autoplay nếu mute
    console.log('Iframe loaded, video should autoplay muted')
})
const news = [
    {
        title: "Exploring innovations in automotive safety",
        date: "October 21, 2024",
        image: "post1.jpg"
    },
    {
        title: "Electric vs. gasoline: the ultimate automotive debate",
        date: "October 24, 2024",
        image: "post2.jpg"
    },
    {
        title: "How to choose premium seat covers for your car",
        date: "October 23, 2024",
        image: "post3.jpg"
    }
];
</script>

<style scoped>
.Section-main {
    position: relative;
    margin-top: 5rem;
}

.blur {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 80%);
    filter: blur(120px);
    opacity: 0.8;
}

.blur:nth-of-type(1) {
    top: 200px;
    left: 500px;
}

.blur:nth-of-type(2) {
    top: 250px;
    left: 300px;
}

.blur:nth-of-type(3) {
    top: 350px;
    left: 450px;
}
.blur:nth-of-type(4) {
    top: 250px;
    right: 60px;
}
.blur:nth-of-type(5) {
    top: 650px;
    right: 160px;
}
.blur:nth-of-type(6) {
    top: 1280px;
    right: 470px;
}
.blur:nth-of-type(7) {
    top: 1280px;
    left: 470px;
}
.blur:nth-of-type(8) {
    top: 1680px;
    left: 270px;
    z-index:1;
}
.blur:nth-of-type(9) {
    top: 1980px;
    right: 470px;
}
.blur:nth-of-type(10) {
    top: 2160px;
    right: 70px;
}
.blur:nth-of-type(11) {
    top: 750px;
    left: 70px;
}

/* MAIN CONTAINER */
.hero {
    background: rgb(37, 35, 36);
    padding: 8rem;
}

.hero-wrapper {
    max-width: 1280px;
    margin: auto;
    display: flex;
    flex-direction: row;
    width: 100%;
    color: white;
    height: 100vh;
}

/* LEFT SIDE */
.hero-left {
    width: 70%;
    padding: 60px;

}

/* TITLE */
.hero-title {
    font-size: 56px;
    font-weight: 700;
    line-height: 1.15;
    max-width: 600px;
}

.highlight {
    color: #ff7a1a;
}

/* DESCRIPTION */
.hero-desc {
    margin-top: 30px;
    font-size: 18px;
    line-height: 1.6;
    max-width: 520px;
    color: #d1d1d1;
}

/* SMALL IMAGE */
.small-img {
    margin-top: 40px;
    width: 350px;
    overflow: hidden;
    border-radius: 12px;
}

.small-img img {
    width: 100%;
    display: block;
    object-fit: cover;
}

/* RIGHT SIDE IMAGE BIG */
.hero-right {
    width: 100%;
}

.hero-right img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
    object-fit: cover;
}

/* RESPONSIVE */
@media (max-width: 992px) {
    .hero {
        flex-direction: column;
    }

    .hero-left,
    .hero-right {
        width: 100%;
    }

    .hero-title {
        font-size: 40px;
    }
}

/*SLIDER SECTION */

.slider {
    background: rgb(37, 35, 36);
}

.sliders {
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 5rem 6rem;
}

.slider img {
    width: 100px;
}

/* testimonial */
/* SECTION BACKGROUND */
.testimonial-section {
    text-align: center;
    padding: 80px 0;
    background: rgb(37, 35, 36);
    color: #fff;
}

/* TITLE */
.title {
    font-size: 48px;
    font-weight: 700;
}

.title span {
    color: #ff7a1a;
}

.subtitle {
    color: #d0d0d0;
    margin-top: 10px;
    margin-bottom: 50px;
    font-size: 18px;
}

/* CARD LIST */
.testimonial-cards {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 60px;
}

/* CARD */
.card {
    background: #222;
    width: 380px;
    padding: 40px 30px;
    border-radius: 12px;
    position: relative;
    min-height: 230px;
    transition: 0.3s;
}

/* CARD ACTIVE (middle) */
.card.active {
    background: #ff7a1a;
}

/* QUOTE ICON */
.quote-icon {
    font-size: 36px;
    margin-bottom: 20px;
    color: #ff7a1a;
}

.card.active .quote-icon {
    color: white;
}

/* TEXT */
.content {
    line-height: 1.6;
    font-size: 17px;
}

/* TRIANGLE ARROW */
.triangle {
    width: 0;
    height: 0;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-top: 14px solid #222;
    margin: 0 auto;
    margin-top: 30px;
}

.card.active .triangle {
    border-top-color: #ff7a1a;
}

/* AUTHORS BELOW */
.authors {
    display: flex;
    justify-content: center;
    gap: 120px;
}

.author {
    text-align: center;
}

.author img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    object-fit: cover;
}

.author h4 {
    margin-top: 10px;
    font-weight: 600;
}

@media (max-width: 992px) {
    .testimonial-cards {
        flex-direction: column;
        align-items: center;
    }

    .authors {
        flex-direction: column;
        gap: 40px;
    }
}

/* section-video */
.video-section {
    position: relative;
    width: 100%;
}

/* VIDEO FULL WIDTH */
.video-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    /* tỉ lệ 16:9 */
    height: 9;
}

.video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    border: 0;
    pointer-events: none;
}

.video {
    width: 100%;
    height: auto;
    display: block;
}

/* process */
.process {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 80px;
    padding: 80px 160px;
    background: #1b1b1b;
    color: #fff;
}

/* LEFT SECTION */
.process-left {
    position: sticky;
    top: 0;
    flex: 1;
}

.process-title {
    font-size: 52px;
    line-height: 1.2;
    font-weight: 700;
    margin-bottom: 20px;
}

.process-title span {
    color: #FD5622;
}

.process-desc {
    font-size: 17px;
    color: #ddd;
    max-width: 500px;
    line-height: 1.6;
    text-align: start;
}

/* RIGHT SECTION */
.process-right {
    flex: 1;
    position: relative;
}

.step {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 40px;
}

.icon-box {
    width: 55px;
    height: 55px;
    background: #252525;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    color: #FD5622;
}

.step-title {
    font-size: 24px;
    margin-bottom: 6px;
}

.step-desc {
    text-align: start;
    color: #bdbdbd;
    max-width: 460px;
    line-height: 1.6;
}

/* new-section */
.news-section {
    max-width: 1380px;
    margin: 80px auto;
    text-align: center;
    padding: 20px;
    color: #fff;
}


.heading {
    font-size: 48px;
    font-weight: 700;
}

.heading span {
    color: #ff7a1a;
}


.subtitle {
    margin-top: 10px;
    opacity: 0.8;
}


.news-grid {
    margin-top: 50px;
    display: flex;
    gap: 35px;
}


.news-card {
    background: #111;
    border-radius: 14px;
    overflow: hidden;
    transition: 0.3s;
    cursor: pointer;
}

.news-card:hover {
    transform: translateY(-6px);
}


.thumb {
    width: 100%;
    height: 320px;
    object-fit: cover;
}


.content-news {
    text-align: left;
    padding: 20px;
}


.tag {
    font-size: 12px;
    letter-spacing: 1px;
    color: #ccc;
}


.title {
    margin: 10px 0;
    font-size: 20px;
    font-weight: 600;
}


.meta {
    font-size: 14px;
    opacity: 0.7;
    display: flex;
    gap: 10px;
}

/* green-banner */
.discount-banner {
    width: 100%;
    padding: 80px 40px;
    /* border-radius: 14px; */
    background: linear-gradient(120deg, #4caf50, #6ecf4f, #4caf50);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
}


.content {
    width: 100%;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}


h2 {
    font-size: 40px;
    font-weight: 700;
}


.btn {
    padding: 12px 32px;
    border: 2px solid #fff;
    background: transparent;
    border-radius: 8px;
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
}


.btn:hover {
    background: #fff;
    color: #4caf50;
}

/* TIMELINE LINE */
.line {
    width: 2px;
    height: 50px;
    background: #444;
    margin-left: 26px;
}
</style>
