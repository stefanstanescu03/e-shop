<script>
import { computed } from "vue";

export default {
  props: ["name", "price", "currency", "id"],
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
  <div class="product-box">
    <div class="details">
      <button class="product-name" @click="$router.push(`/product/${this.productName}`)">{{ this.productName }}</button>
      <p>{{ this.currency }}{{ this.productPrice }}</p>
    </div>
    <img class="product-img" :src="getImgUrl()" alt="default" />
  </div>
</template>

<style>
.product-img {
  display: block;
  max-width: 12rem;
  max-height: 16rem;
  width: auto;
  height: auto;
  margin-left: 2rem;
  margin-bottom: 2rem;
}

.product-name {
  border: none;
  font-family: "Rubik";
  font-size: small;
  background-color: white;
  padding: 0.5rem;
}

.product-name:hover {
  text-decoration: underline;
}

.product-box {
  width: 16rem;
  height: 23rem;
  outline: 1px solid #121212;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

p {
  font-family: "Rubik";
  font-size: small;
  margin: 0;
  padding: 0.5rem;
}

.details {
  display: flex;
  justify-content: space-between;
}
</style>
