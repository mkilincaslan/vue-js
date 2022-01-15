import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { router } from "./router";

let BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts";
const FIREBASE_API_KEY = process.env.VUE_APP_API_KEY;

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token: "",
        errors: {
            email: null,
            password: null,
            message: null,
        },
        tokenExpiredMessage: false,
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
        setError(state, payload) {
            state.errors = Object.assign(state.errors, payload);
        },
        clearToken(state) {
            state.token = "";
        }
    },
    actions: {
        initAuth({ commit, dispatch, state }) {
            const token = localStorage.getItem('token');
            if (token) {
                const expirationDate = localStorage.getItem('expirationDate');
                const now = new Date().getTime();

                if (now > expirationDate) {
                    state.tokenExpiredMessage = true;
                    dispatch('logout');
                } else {
                    commit('setToken', token);
                    let expirationTime = expirationDate - now;
                    dispatch('tokenExpiration', expirationTime);
                }
            }
        },
        oAuth(vContext, authData) {
            const { commit, dispatch} = vContext;
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
                    localStorage.setItem('token', data.idToken);
                    localStorage.setItem('expirationDate', new Date().getTime() + data.expiresIn * 1000);
                    dispatch('tokenExpiration', data.expiresIn * 1000);
                    router.replace('/');
                })
                .catch(({ response }) => {
                    if (response.data.error.message.split('_')[0] === 'EMAIL') {
                        commit('setError', {
                            email: response.data.error.message,
                        });
                    } else if (response.data.error.message.split('_')[1] === 'PASSWORD') {
                        commit('setError', {
                            password: response.data.error.message,
                        });
                    } else {
                        commit('setError', {
                            message: response.data.error.message,
                        });
                    }
                });
        },
        clearErrors ({ state }) {
            state.errors = {
                email: null,
                password: null,
                message: null,
            };
        },
        logout({ commit, state }) {
            commit('clearToken');
            localStorage.removeItem('token');
            localStorage.removeItem('expirationDate');
            setTimeout(() => {
                state.tokenExpiredMessage = false;
                router.replace('/');
            }, 1200);
        },
        tokenExpiration({ dispatch, state }, expiresIn) {
            setTimeout(() => {
                state.tokenExpiredMessage = true;
                dispatch('logout');
            }, expiresIn);
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.token !== '';
        },
        getErrors(state) {
            return state.errors;
        }
    },
});

export default store;
