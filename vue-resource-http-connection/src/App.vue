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
                    <li class="list-group-item" v-for="user in usernameList" :key="user.key">
                        {{user.username}}
                        <button class="btn-xs btn-danger" @click="deleteUser(user.key)">Sil</button>
                    </li>
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
            
            this.$http.post("users.json", {username: this.username})
            .then(response => {
                console.log(response);
                this.getUsers();
            })
            .catch(err => console.log(err));

            // this.$resource("users.json").save({}, {username: this.username});
        },
        getUsers() {
            this.$http.get("users.json")
            .then(({data}) => {
                this.usernameList = [];
                for(const key in data) {
                    this.usernameList.push({
                        key,
                        username: data[key].username
                    });
                }
            })
            .catch(err => console.log(err));
        },
        deleteUser(userKey) {
            this.$http.delete("users/" + userKey + ".json")
            .then(response => {
                console.log(response);
                this.getUsers();
            })
            .catch(err => console.log(err));
        }
    },
    created() {
        this.$resource("users.json").get()
        .then(({data}) => {
            this.usernameList = [];
            for(const key in data) {
                this.usernameList.push({
                    key,
                    username: data[key].username
                });
            }
        })
    },
}
</script>

<style>

</style>
