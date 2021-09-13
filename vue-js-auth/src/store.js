import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts";
const FIREBASE_API_KEY = process.env.VUE_APP_API_KEY;

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: "",
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        clearToken(state) {
            state.token = "";
        }
    },
    actions: {
        oAuth({commit, dispatch, state}, authData) {
            BASE_URL += 
                authData.isUser ? 
                    `:signInWithPassword?key=${FIREBASE_API_KEY}` : 
                    `:signUp?key=${FIREBASE_API_KEY}`;

            axios
                .post(BASE_URL, {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                })
                .then(({data}) => {
                    commit("setToken", data.idToken);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        logout({commit, dispatch, state}) {},
    },
    getters: {
        
    },
});

export default store;
