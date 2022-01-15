<template>
    <div class="container">
        <div class="row  mt-5">
            <div class="col-md-4 offset-4 card card-primary p-3 border"
                 :class="{'border-primary' : isUser, 'border-success' : !isUser }">
                <h3
                        :class="{'text-primary' : isUser, 'text-success' : !isUser }"
                        class="text-center mb-3 mt-3">Vue.js | Auth</h3>
                <hr>
                <form @submit.prevent="onSubmit">
                    <div class="form-group">
                        <label :class="{ 'text-danger' : error.email }">E-posta Adresiniz</label>
                        <input v-model="user.email" type="email" class="form-control" :class="{ 'is-invalid' : error.email }" placeholder="E-posta adresinizi giriniz">
                    </div>
                    <div class="form-group">
                        <label :class="{ 'text-danger' : error.password }">Şifre</label>
                        <input v-model="user.password" type="password" class="form-control" :class="{ 'is-invalid' : error.password }" placeholder="Şifreniz...">
                    </div>
                    <div class="form-group" :v-show="errors">
                        <p class='text-danger'>{{ error.message }}</p>
                    </div>
                    <div class="button-container d-flex  flex-column align-items-center">
                        <button type="submit" :class="{'btn-primary' : isUser, 'btn-success' : !isUser }"
                                class="btn btn-block mb-2">
                            {{ isUser ? 'Giriş Yap' : 'Kayıt Ol' }}
                        </button>
                        <a href="#" @click.prevent="isUser=!isUser" class="text-secondary">
                            {{ isUser ? 'Üye değilim' : 'Üyeliğim var'}}
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                user: {
                    email: null,
                    password: null
                },
                isUser: false,
                error: {
                    email: null,
                    password: null,
                    message: null,
                }
            }
        },
        methods: {
            onSubmit() {
                this.$store.dispatch("oAuth", { ...this.user, isUser: this.isUser });
            }
        },
        computed: {
            errors() {
                const errors = this.$store.getters.getErrors;
                const errorKey = Object.keys(errors).find(key => errors[key] !== null);
                if (errorKey) {
                    console.log(errors)
                    this.error[errorKey] = true;
                    this.error.message = errors[errorKey];
                }
                return errorKey ? true : false;
            }
        },
        watch: {
            isUser: function() {
                this.error = {
                    email: null,
                    password: null,
                    message: null,
                };
                this.user = {
                    email: null,
                    password: null
                };
                this.$store.dispatch('clearErrors');
            },
            'user.email': function () {
                this.error['email'] = null;
                this.error['message'] = null;
                this.$store.dispatch('clearErrors');
            },
            'user.password': function () {
                this.error['password'] = null;
                this.error['message'] = null;
                this.$store.dispatch('clearErrors');
            },
        }
    }
</script>
