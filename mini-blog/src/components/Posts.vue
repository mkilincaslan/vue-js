<template>
  <div class="container-fluid pt-5">
    <h1 class="text-center">Yazı Listesi</h1>
    <hr>
    <div class="d-flex flex-wrap flex-row justify-content-center align-items-center">
      <div class="card m-1" v-for="post in posts" :key="post.id">
        <img class="card-img-top" :src="post.thumbnail" :alt="post.title">
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.previewText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        posts: [],
      }
    },
    created() {
      axios
        .get(`${process.env.VUE_APP_URL}/posts.json`)
        .then(({ data }) => {
          for (const key in data) {
            this.posts.push({ ...data[key], id: key });
          }
        })
        .catch(error => console.error(error));
    }
  }
</script>

<style>
  .card {
    width: 300px;
  }
</style>
