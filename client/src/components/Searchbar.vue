<script>

export default {
  data() {
    return {
      search: "",
    };
  },
  emits:['pattern'],
};
</script>

<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="WHAT ARE YOU LOOKING FOR?"
      class="search"
      v-model="this.search"
    />
    <button class="search-button" @click="$emit('pattern', search)">
      <img
        src="../assets/search.png"
        alt="search-icon"
        width="24"
        height="24"
      />
    </button>
  </div>
</template>

<style>

.search-bar {
    padding-top: 3.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .search {
    box-sizing: border-box;
    font-family: "Rubik";
    outline: none;
    padding: 1rem;
    border: none;
    border-bottom: 1px solid #121212;
    width: 100%;
    height: 3rem;
    background-color: white;
  }

  .search-button {
    background-color: white;
    border: none;
    border-bottom: 1px solid #121212;
    border-left: 1px solid #121212;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    height: 3rem;
    width: 5rem;
    cursor: pointer;
  }

</style>
