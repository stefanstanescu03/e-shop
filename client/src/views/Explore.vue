<script>
import Product from "../components/Product.vue";
import Searchbar from "../components/Searchbar.vue";
import { ref } from "vue";

export default {
  data() {
    return {
      productsArr: ref([]),
      pattern: ref(""),
      filterMethod: ref(-1), // 0 - popularity, 1 - low-high, 2 - high-low, -1 - normal
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
      return this.productsArr
        .filter((product) => {
          return product.product_name
            .toUpperCase()
            .includes(this.pattern.toUpperCase());
        })
        .sort((prod1, prod2) => {
          switch (this.filterMethod) {
            case 0:
              return prod2.sells - prod1.sells;
              break;
            case 1:
              return prod1.product_price - prod2.product_price;
              break;
            case 2:
              return prod2.product_price - prod1.product_price;
              break;
            default:
              return 1;
          }
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
      <div class="filter-buttons">
        <button class="filter-button" @click="this.filterMethod = 0">
          Popularity
        </button>
        <button class="filter-button" @click="this.filterMethod = 1">
          Price (low-high)
        </button>
        <button class="filter-button" @click="this.filterMethod = 2">
          Price (high-low)
        </button>
        <button class="filter-button" @click="this.filterMethod = -1">
          Reset
        </button>
      </div>
    </div>
    <div class="no-found-container">
      <h1 class="no-found-text" v-show="filteredProducts.length === 0">
        No products found
      </h1>
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
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #121212;
  background-color: white;
}

.explore-text {
  padding-left: 1.5rem;
  font-family: "Rubik";
  font-weight: 500;
  color: #121212;
  text-decoration: none;
  font-size: 1.2rem;
}

.filter-buttons {
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0.5rem;
  padding-left: 1rem;
  gap: 0.5rem;
}

.filter-button {
  background-color: white;
  border: none;
  border: 1px solid white;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  font-family: "Rubik";
  margin: 0;
  padding: 0.5rem;
  cursor: pointer;
  transition-duration: 0.2s;
}

.filter-button:hover {
  border: none;
  border: 1px solid #121212;
  border-radius: 5px;
}

.no-found-container {
  display: flex;
  justify-content: center;
}

.no-found-text {
  font-family: "Rubik";
  color: red;
  font-weight: 400;
  font-size: small;
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
