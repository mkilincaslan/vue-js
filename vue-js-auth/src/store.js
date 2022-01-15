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
        tokenExpiredMessage: false, // Make true when we gonna show message
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
            // Initialize auth section
            /**
            * 1. Get token from localStorage
            * 2. Check token is exist
            * 3. If token is exist then get expirationDate of token
            * 4. If expirationDate is expired then remove token and redirect to home
            * 5. Else setToken to state and run tokenExpiration timer function
            */
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
            // oAuth func register and login section action
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
                    dispatch('tokenExpiration', data.expiresIn * 1000); // Run tokenExpiration timer function
                    router.replace('/'); // Redirect home
                })
                .catch(({ response }) => {
                    if (response.data.error.message.split('_')[0] === 'EMAIL') {
                        // If error is regarding email then set error to email value in errors
                        commit('setError', {
                            email: response.data.error.message,
                        });
                    } else if (response.data.error.message.split('_')[1] === 'PASSWORD') {
                        // If error is regarding password then set error to password value in errors
                        commit('setError', {
                            password: response.data.error.message,
                        });
                    } else {
                        // If error is regarding something else set error to message value
                        commit('setError', {
                            message: response.data.error.message,
                        });
                    }
                });
        },
        clearErrors ({ state }) {
            // Clear all errors from state
            state.errors = {
                email: null,
                password: null,
                message: null,
            };
        },
        logout({ commit, state }) {
            /**
             * 1. Remove token from state
             * 2. Remove token and expirationDate of token from localStorage
             * 3. Redirect to home
             */
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
