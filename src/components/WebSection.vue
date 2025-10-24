<template>
  <div class="slider-container">
    <div class="slider" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="slide" v-for="(slide, i) in slides" :key="i">
        <img :src="slide.image" :alt="slide.title" />
        <div class="content">
          <h2 v-html="slide.title"></h2>
        </div>
      </div>
    </div>

    <!-- Nút điều hướng -->
    <button class="prev" @click="prevSlide">&#10094;</button>
    <button class="next" @click="nextSlide">&#10095;</button>

    <!-- Dấu chấm nhỏ -->
    <div class="dots">
      <span v-for="(slide, i) in slides" :key="'dot' + i" :class="{ active: i === currentIndex }"
        @click="goToSlide(i)"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const slides = [
  {
    image: require("../assets/images/banner-01.jpg"),
    title: "HURRY! <br> GET THE BEST CAR FOR YOU",
  },
  {
    image: require("../assets/images/banner-02.jpg"),
    title: "LUXURY CAR <br> FOR YOUR FAMILY",
  },
  {
    image: require("../assets/images/banner-03.jpg"),
    title: "ENJOY YOUR <br> DREAM CAR",
  },
];

const currentIndex = ref(0);
let autoSlideInterval;

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.length) % slides.length;
};

const goToSlide = (i) => {
  currentIndex.value = i;
};

// Tự động trượt
onMounted(() => {
  autoSlideInterval = setInterval(nextSlide, 8000);
});

onBeforeUnmount(() => {
  clearInterval(autoSlideInterval);
});
</script>

<style scoped>
.slider-container {
  position: relative;
  width: 100%;
  height: 550px;
  overflow: hidden;
}

/* SLIDER chính */
.slider {
  display: flex;
  transition: transform 1s ease-in-out;
  height: 100%;
}

/* Mỗi SLIDE */
.slide {
  min-width: 100%;
  height: 100%;
  position: relative;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* NỘI DUNG TRÊN HÌNH */
.content {
  position: absolute;
  top: 50%;
  left: 8%;
  transform: translateY(-50%);
  color: white;
  text-align: start;
}

.content span {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 6px 14px;
  border-radius: 4px;
  font-size: 14px;
  text-transform: uppercase;
}

.content h2 {
  font-size: 46px;
  font-weight: 700;
  line-height: 1.2;
  margin-top: 15px;
}

/* Nút điều hướng */
.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  background: rgba(0, 0, 0, 0.4);
  border: none;
  font-size: 28px;
  padding: 8px 14px;
  cursor: pointer;
  border-radius: 50%;
  transition: background 0.3s;
  z-index: 10;
}

.prev:hover,
.next:hover {
  background: #ff5b00;
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}

/* Dấu chấm */
.dots {
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background 0.3s;
}

.dots span.active {
  background: #ff5b00;
}
</style>
