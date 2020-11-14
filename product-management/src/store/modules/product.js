"use strict";

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
    saveProduct() {
        // Vue Resource
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
