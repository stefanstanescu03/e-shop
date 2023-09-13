<script>
export default {
  props: ["name", "price", "currency", "id"],
  data(props) {
    return {
      productName: props.name,
      productPrice: props.price,
      productCurrency: props.currency,
      productId: props.id,
    };
  },
};
</script>

<template>
  <div class="product-box">
    <div class="details">
      <button class="product-name">{{ this.productName }}</button>
      <p>{{ this.currency }}{{ this.productPrice }}</p>
    </div>
  </div>
</template>

<style>
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
