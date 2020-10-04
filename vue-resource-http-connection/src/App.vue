<template>
    <div class="container">
        <br>
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <h3>Vue Resource</h3>
                <div class="form-group">
                    <input type="text" name="value" id="value" placeholder="value" v-model="username">
                </div>
                <button class="btn btn-primary" @click="saveUser">Kaydet</button>
                <button class="btn btn-primary" @click="getUsers">Getir</button>
                <hr>
                <ul class="list-group">
                    <li class="list-group-item" v-for="user in usernameList" :key="user">{{user}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            username: null,
            usernameList: [],
        }
    },
    methods: {
        saveUser() {
            
            this.$http.post("", {username: this.username})
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err));
        },
        getUsers() {
            this.$http.get()
            .then(({data}) => {
                for(const key in data) {
                    this.usernameList.push(data[key].username);
                }
            })
            .catch(err => console.log(err));
        }
    }
}
</script>

<style>

</style>
