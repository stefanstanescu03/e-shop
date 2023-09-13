<script>
import Product from "../components/Product.vue";
import Searchbar from "../components/Searchbar.vue";
import { ref } from "vue";

export default {
  data() {
    return {
      productsArr: ref([]),
      pattern: ref(""),
    };
  },
  async created() {
    const response = await fetch(`http://localhost:3000/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const products = await response.json();
    this.productsArr = [...products];
  },
  computed: {
    filteredProducts: function () {
      return this.productsArr.filter((product) => {
        return product.product_name
          .toUpperCase()
          .includes(this.pattern.toUpperCase());
      });
    },
  },
  components: { Product, Searchbar },
};
</script>

<template>
  <Searchbar @pattern="(pattern) => (this.pattern = pattern)" />
  <div class="explore">
    <div class="explore-text-container">
      <h1 class="explore-text">EXPLORE</h1>
    </div>
    <div class="products">
      <Product
        v-for="product in filteredProducts"
        :name="product.product_name"
        :price="product.product_price"
        :id="product.id"
        currency="$"
      />
    </div>
  </div>
</template>

<style>
.explore {
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
