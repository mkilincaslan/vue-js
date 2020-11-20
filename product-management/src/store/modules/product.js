"use strict";
import Vue from 'vue';
import constants from '../../config/constants.json';

const state = {
    products: [],
};

const getters = {
    getProducts(state) {
        return state.products;
    },
    getProductInfo() {

    }
};

const mutations = {
    updateProductList(state, new_product) {
        state.products.push(new_product);
    },
};

const actions = {
    initApp() {
        // Vue Resource
    },
    saveProduct({ commit }, payload) {
        // Vue Resource
        const { product } = payload;
        Vue
            .http
            .post(`${constants['firebase-url']}products.json`, product)
            .then(response => {
                if (response.status == 200) {
                    commit('updateProductList', product);
                }
            })
            .catch(error => {
                console.log(error);
            });

    },
    sellProduct() {
        // Vue Resource
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};
