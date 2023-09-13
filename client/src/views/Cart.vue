<script>

export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div class="cart">
    <div class="cart-text-container">
      <h1 class="cart-text">CART</h1>
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
</style>
