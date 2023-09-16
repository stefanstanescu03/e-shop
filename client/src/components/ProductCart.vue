<script>
import { computed } from "vue";

export default {
  props: ["name", "price", "currency", "id"],
  emits: ["deleteId"],
  data(props) {
    return {
      productName: computed(() => props.name),
      productPrice: computed(() => props.price),
      productCurrency: computed(() => props.currency),
      productId: computed(() => props.id),
    };
  },
  methods: {
    getImgUrl: function () {
      return `http://localhost:3000/images/img_${this.productId}.webp`;
    },
  },
};
</script>

<template>
  <div class="product-cart-container">
    <div class="img-cart-container">
      <img class="img-cart" :src="getImgUrl()" alt="default" />
    </div>
    <div class="info-cart-container">
      <p class="info-cart-text">
        Name: {{ this.productName }} <br />
        Price: {{ this.productCurrency }}{{ this.productPrice }}
      </p>
      <button class="delete-button" @click="$emit('deleteId', this.productId)">Delete</button>
    </div>
  </div>
</template>

<style>
.img-cart {
  display: block;
  max-width: 6rem;
  max-height: 8rem;
  width: auto;
  height: auto;
  margin-left: 2rem;
  margin-bottom: 2rem;
  padding-top: 2rem;
}

.delete-button {
  border: none;
  font-family: "Rubik";
  font-size: small;
  background-color: white;
  padding: 0.5rem;
}

.delete-button:hover {
  text-decoration: underline;
}

.product-cart-container {
  border-bottom: 1px solid #121212;
  display: flex;
  align-items: center;
}

.info-cart-container {
    padding-top: 2rem;
    padding-left: 2rem;
}

.info-cart-text {
  font-family: "Rubik";
  font-size: small;
  margin: 0;
  padding: 0.5rem;
}
</style>
