import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      products: [],
    };
  },
  actions: {
    addProduct(id) {
      this.products.push(id);
    },
    deleteProduct(id) {
      this.products = this.products.filter((product) => {
        return product != id;
      });
    },
  },
});
