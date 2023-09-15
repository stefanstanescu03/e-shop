<script>
import { useAccountStore } from "../stores/account";
import ProductCart from "../components/ProductCart.vue";

export default {
  data() {
    return {
      loggedAccount: useAccountStore(),
      productsInCart: [],
      total: 0,
    };
  },
  async created() {
    const response = await fetch(
      `http://localhost:3000/carts?id=${this.loggedAccount.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const cart = await response.json();
    if (cart.status != "no match for id") {
      for (const index in cart[0].products) {
        const response = await fetch(
          `http://localhost:3000/products/specificId?id=${cart[0].products[index]}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const prod = await response.json();
        this.total += parseInt(prod[0].product_price);
        this.productsInCart.push(prod[0]);
      }
    }
  },
  methods: {},
  components: { ProductCart },
};
</script>

<template>
  <div class="cart">
    <div class="cart-text-container">
      <h1 class="cart-text">CART</h1>
    </div>
    <div class="no-found-container">
      <h1 class="no-found-text" v-show="this.productsInCart.length === 0">
        Your cart is empty
      </h1>
    </div>
    <ProductCart
      v-for="product in this.productsInCart"
      :name="product.product_name"
      :price="product.product_price"
      :id="product.id"
      currency="$"
    />
    <div class="total-container">
      <h2 class="total-text">Total: ${{ this.total }}</h2>
    </div>
  </div>
</template>

<style>
.cart {
  padding-top: 3.5rem;
  display: flex;
  flex-direction: column;
}

.cart-text-container {
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #121212;
  background-color: white;
}

.cart-text {
  font-family: "Rubik";
  font-weight: 500;
  color: #121212;
  text-decoration: none;
  font-size: 1.2rem;
}

.total-text {
  float: right;
  font-family: "Rubik";
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  padding-top: 1rem;
  padding-right: 2rem;
}
</style>
