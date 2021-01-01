"use strict";
import Vue from 'vue';
import { router } from '../../routes';
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
    saveProduct({ dispatch, commit }, payload) {
        // Vue Resource
        const { product } = payload;
        Vue
            .http
            .post(`${constants['firebase-url']}products.json`, product)
            .then(response => {
                if (response.status == 200) {
                    // Update the product list with new item
                    // Ürün listesinin güncellenmesi
                    product.id = response.body.name;
                    commit('updateProductList', product);

                    // Update the trade result
                    // Bakiye güncelleme

                    let trade = {
                        purchase: product.price,
                        sale: 0,
                        count: product.piece,
                    }
                    dispatch('setTradeResult', trade);
                    router.replace("/");
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
