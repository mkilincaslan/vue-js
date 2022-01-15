import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts";
const FIREBASE_API_KEY = process.env.VUE_APP_API_KEY;

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: "",
        error: {
            email: null,
            password: null,
            message: null,
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setError(state, payload) {
            state.error = Object.assign(state.error, payload);
        },
        clearToken(state) {
            state.token = "";
        }
    },
    actions: {
        oAuth(vContext, authData) {
            const { commit } = vContext;
            BASE_URL += 
                authData.isUser ? 
                    `:signInWithPassword?key=${FIREBASE_API_KEY}` : 
                    `:signUp?key=${FIREBASE_API_KEY}`;

            return axios
                .post(BASE_URL, {
                    email: authData.email,
                    password: authData.password,
                    returnSecureToken: true
                })
                .then(({data}) => {
                    commit("setToken", data.idToken);
                })
                .catch(({ response }) => {
                    if (response.data.error.message === 'EMAIL_EXISTS') {
                        commit('setError', {
                            email: response.data.error.message,
                        });
                    } else {
                        commit('setError', {
                            message: response.data.error.message,
                        });
                    }
                });
        },
        logout({commit, dispatch, state}) {},
    },
    getters: {
        isAuthenticated(state) {
            return state.token !== '';
        }
    },
});

export default store;
