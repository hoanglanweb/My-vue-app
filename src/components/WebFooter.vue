<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <div class="footer-container">

        <!-- Hello -->
        <div class="footer-col">
          <h3>Hello</h3>
          <p>
            Ignissimos ducimus qui blanditiis <br />
            prae sentium voluptatum deleniti.
          </p>
        </div>

        <!-- Office -->
        <div class="footer-col">
          <h3>Office</h3>
          <p>VietNam —</p>
          <p>
            33 vĩnh viễn
          </p>
          <a href="#" class="mail">info@email.com</a>
          <p class="phone">+1 840 841 25 69</p>
        </div>

        <!-- Links -->
        <div class="footer-col">
          <h3>Links</h3>
          <ul class="footer-links">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/services">Services</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/shop">Shop</router-link></li>
            <li><router-link to="/contact">Contacts</router-link></li>
          </ul>
        </div>

        <!-- Social -->
        <div class="footer-col">
          <h3>Get in Touch</h3>
          <div class="social-wrap">
            <button><i class="fab fa-facebook-f"></i></button>
            <button><i class="fab fa-x-twitter"></i></button>
            <button><i class="fab fa-dribbble"></i></button>
            <button><i class="fab fa-instagram"></i></button>
          </div>
        </div>

      </div>

      <div class="footer-bottom">
        ngylann © 2025. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #1b1a1a;
  padding: 70px 0;
  color: #d5d5d5;
  font-family: Arial, sans-serif;
}

.footer-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0 40px;
  gap: 70px;
}

/* COLUMN */
.footer-col {
  width: 20%;
  min-width: 200px;
}

.footer-col h3 {
  margin-bottom: 20px;
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
}

.footer-col p {
  margin-bottom: 12px;
  line-height: 1.6;
  text-align: start;
}

.mail {
  display: inline-block;
  color: #fff;
  text-decoration: underline;
  margin-top: 8px;
  cursor: pointer;
}

.phone {
  color: #fff;
  font-weight: bold;
  margin-top: 10px;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: #d5d5d5;
  text-decoration: none;
  transition: 0.2s;
}

.footer-links a:hover {
  color: #fff;
}

/* SOCIAL BUTTONS */
.social-wrap {
  display: flex;
  gap: 12px;
}

.social-wrap button {
  width: 44px;
  height: 44px;
  background: #2b2b2b;
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
}

.social-wrap button i {
  color: #fff;
  font-size: 18px;
}

.social-wrap button:hover {
  background: #3a3a3a;
}

/* FOOTER BOTTOM */
.footer-bottom {
  margin-top: 60px;
  padding-top: 20px;
  text-align: center;
  color: #999;
  font-size: 14px;
  border-top: 1px solid #333;
}
</style>
