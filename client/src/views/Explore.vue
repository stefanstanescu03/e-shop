<script>
import Product from "../components/Product.vue";

export default {
  data() {
    return {
      productsArr: [],
    };
  },
  async mounted() {
    const response = await fetch(`http://localhost:3000/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const products = await response.json();
    this.productsArr = products;
  },
  methods: {},
  components: { Product },
};
</script>

<template>
  <div class="explore">
    <div class="explore-text-container">
      <h1 class="explore-text">EXPLORE</h1>
    </div>
    <div class="products">
      <Product
        v-for="product in this.productsArr"
        :name="product.product_name"
        :id="product.id"
        :price="product.product_price"
        currency="$"
      />
    </div>
  </div>
</template>

<style>
.explore {
  padding-top: 6.5rem;
  display: flex;
  flex-direction: column;
}

.explore-text-container {
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #121212;
  background-color: white;
}

.explore-text {
  font-family: "Rubik";
  font-weight: 500;
  color: #121212;
  text-decoration: none;
  font-size: 1.2rem;
}

.products {
  padding-top: 5rem;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(4, 0fr);
  column-gap: 0px;
  gap: 1px;
}
</style>
