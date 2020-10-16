<template>
    <div>
        <div v-show="id">
            <p>User Id {{id}}</p>
        </div>
        <br>
        <button class="btn btn-success" @click="navigateToHome">Home Component</button>
    </div>
</template>

<script>
export default {
    name: "User",
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
    },
    /**
     * Reactivity kazandırmak için yazılan bir kod parçası, çünkü eğer aynı bileşeni farklı bir parametre ile tekrar çağırırsak;
     * created fonksiyonu çalışmayacağı için gelen id güncellenmeyecektir.
     * Reactivity for id, cause if try to render same link with different params, it may not re-render the created action.
     * So id won't be updated.
     */
    // watch: {
    //     "$route"(to) {
    //         this.id = to.params.id;
    //     }
    // }
}
</script>