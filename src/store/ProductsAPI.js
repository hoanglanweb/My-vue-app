import axios from "axios";
import { APIURL } from "@/data/Contrusct";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    product: [],
    error: null,
  }),
  actions: {
    async fetchProduct() {
      try {
        const res = await axios.get(APIURL);
        this.product = res.data;
        this.error = null;
      } catch (error) {
        this.error = error;
        console.log("dữ liệu bị lỗi :", error);
      }
    },
  },
});
