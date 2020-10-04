<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <h3>Vue Resource</h3>
                <div class="form-group">
                    <input type="text" name="value" id="value" placeholder="value" v-model="username">
                </div>
                <button class="btn btn-primary" @click="saveUser">Kaydet</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            username: null
        }
    },
    methods: {
        saveUser() {
            
            this.$http.post("https://vuejs-vue-resource-bb818.firebaseio.com/users.json", {username: this.username})
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err));
        }
    }
}
</script>

<style>

</style>
