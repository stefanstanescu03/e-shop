<script>
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      state: {
        productName: "",
        productPrice: "",
        productDescription: "",
        productId: "",
      },
    };
  },
  methods: {
    getImgUrl: function () {
      return `http://localhost:3000/images/img_${this.state.productId}.webp`;
    },
  },
  async created() {
    const route = useRoute();
    this.productName = route.params.productName;

    const response = await fetch(
      `http://localhost:3000/products/specific?name=${this.productName}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const product = await response.json();

    this.state = {
      productName: product[0].product_name,
      productPrice: product[0].product_price,
      productDescription: product[0].description,
      productId: product[0].id,
    };
  },
};
</script>

<template>
  <div class="product">
    <div class="product-info-container">
      <p class="product-info">
        Product: {{ this.state.productName }} <br />
        Price: ${{ this.state.productPrice }} <br />
      </p>
      <div>
        <button class="add-button">Add to cart</button>
      </div>
    </div>
    <div class="description-container">
      <h1 class="description-text">DESCRIPTION</h1>
      <p class="description">
        {{ this.state.productDescription }}
      </p>
    </div>
    <div class="img-container">
      <img class="product-img-bigger" :src="getImgUrl()" alt="default" />
    </div>
  </div>
</template>

<style>
.product {
  padding-top: 4rem;
}

.img-container {
  display: flex;
  justify-content: center;
}

.add-button {
  border: none;
  font-family: "Rubik";
  font-size: small;
  padding-left: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: white;
}

.add-button:hover {
  text-decoration: underline;
}

.product-img-bigger {
  display: block;
  max-width: 36rem;
  max-height: 48rem;
  width: auto;
  height: auto;
  padding: 5rem;
}

.product-info-container {
  left: 0;
  width: auto;
  left: 0;
  display: flex;
  padding-left: 10rem;
  flex-direction: column;
  border-bottom: 1px solid #121212;
}

.description-container {
  left: 0;
  width: auto;
  left: 0;
  display: flex;
  padding-left: 10rem;
  flex-direction: column;
  border-bottom: 1px solid #121212;
}

.description-text {
  padding-left: 0.5rem;
  font-family: "Rubik";
  font-weight: 500;
  color: #121212;
  text-decoration: none;
  font-size: 1rem;
}

.product-info {
  font-family: "Rubik";
  font-weight: 400;
  color: #121212;
  text-decoration: none;
  font-size: 0.8rem;
}
</style>
