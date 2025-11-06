<template>
  <section class="contact">
    <div class="container">
      <h1>Liên hệ với chúng tôi</h1>
      <p class="intro">
        Nếu bạn có bất kỳ câu hỏi hoặc góp ý nào, hãy điền thông tin bên dưới. Chúng tôi sẽ phản hồi sớm nhất có thể.
      </p>

      <form class="contact-form" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Họ và tên</label>
          <input type="text" id="name" v-model="form.name" placeholder="Nhập họ tên của bạn" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="form.email" placeholder="Nhập email của bạn" required />
        </div>

        <div class="form-group">
          <label for="message">Nội dung</label>
          <textarea id="message" v-model="form.message" rows="5" placeholder="Nhập nội dung cần gửi" required></textarea>
        </div>

        <button type="submit" class="btn">Gửi liên hệ</button>
      </form>

      <div v-if="submitted" class="success-message">
        Cảm ơn bạn! Chúng tôi đã nhận được thông tin của bạn.
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const submitted = ref(false);

const submitForm = () => {
  console.log("Dữ liệu gửi đi:", form.value);
  submitted.value = true;

  // Reset form (nếu muốn)
  form.value = { name: "", email: "", message: "" };
};
</script>

<style scoped>
.contact {
  padding: 80px 0;
  background: #fafafa;
  font-family: "Poppins", sans-serif;
}

.container {
  max-width: 700px;
  margin: auto;
  background: white;
  padding: 40px 50px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

h1 {
  font-size: 2rem;
  margin-bottom: 10px;
  text-align: center;
  color: #333;
}

.intro {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

label {
  font-weight: 500;
  color: #333;
}

input,
textarea {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border 0.2s;
}

input:focus,
textarea:focus {
  border-color: #007bff;
  outline: none;
}

.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.btn:hover {
  background: #0056b3;
}

.success-message {
  margin-top: 25px;
  text-align: center;
  color: #28a745;
  font-weight: 600;
}
</style>
