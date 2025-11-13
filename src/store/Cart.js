import { APIURL } from "@/data/Contrusct";
import axios from "axios";
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  actions: {
    addItemCart(product) {
      const idx = this.cart.findIndex((item) => item.id === product.id);
      if (idx === -1) {
        this.cart.push({ ...product, quantity: 1 });
      } else {
        this.cart[idx].quantity++;
      }
      axios
        .post(`${APIURL}/cart`, this.cart)
        .then(() => {
          console.log("thêm vào giỏ hàng thành công.");
        })
        .catch((err) => {
          console.log(`loi: ${err}`);
        });
    },
    removeItem(index) {
      this.cart.splice(index, 1);
    },
  },
});
