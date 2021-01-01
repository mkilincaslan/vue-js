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
    getProductInfo(state) {
        return key => state.products.find(product => {
            return product.key == key
        });
    }
};

const mutations = {
    updateProductList(state, new_product) {
        state.products.push(new_product);
    },
};

const actions = {
    initApp({ commit }) {
        // Vue Resource
        Vue
            .http
            .get(`${constants['firebase-url']}products.json`)
            .then(response => {
                const { data } = response;
                for(let key in data) {
                    commit("updateProductList", { ...data[key], key });
                }
            })
            .catch(error => {
                console.error(error);
            });
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
                    product.key = response.data.name;
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
                console.error(error);
            });
    },
    sellProduct({ state, dispatch }, payload) {
        // Vue Resource
        let product = state.products.find(item => {
            return item.key == payload.key
        });
        Vue
            .http
            .patch(`${constants['firebase-url']}products/${product.key}.json`, { piece: product.piece - payload.piece })
            .then(response => {
                if (response.status == 200) {
                    // Update the product piece with new item
                    // Ürün adedinin güncellenmesi
                    product.piece = response.data.piece;

                    let trade = {
                        purchase: 0,
                        sale: product.price,
                        count: product.piece,
                    }
                    dispatch('setTradeResult', trade);
                    router.replace("/");
                }
            })
            .catch(error => {
                console.error(error);
            });
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};
