<template>
  <div class="container-fluid pt-5">
    <h1 class="text-center">Yazı Listesi</h1>
    <hr>
    <div class="d-flex flex-wrap flex-row justify-content-center align-items-center">
      <div class="card m-1" v-for="i in 5" :key="i">
        <img class="card-img-top" src="https://blog.crazycoder.io/images/bg-header.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    created() {
      axios
        .get(`${process.env.VUE_APP_URL}/posts.json`)
        .then(response => console.log(response))
        .catch(error => console.error(error));
    }
  }
</script>

<style>
  .card {
    width: 300px;
  }
</style>
