<template>
    <div>
        <h1>Users</h1>
        <div v-show="id">
            <br>
            <hr>
            <p>User Id {{id}}</p>
        </div>
        <br>
        <hr>
        <button class="btn btn-success" @click="navigateToHome">Home Component</button>
    </div>
</template>

<script>
export default {
    name: "Users",
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    methods: {
        navigateToHome() {
            this.$router.push("/");
            // this.$router.push({path: "/"});
            // this.$router.push({name: "Anasayfa"});
        }
    }
}
</script>