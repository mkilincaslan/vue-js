import VueRouter from 'vue-router';
import Vue from 'vue';

import ProductList from './components/products/ProductList.vue';
import ProductSell from './components/products/ProductSell.vue';
import ProductPurchase from './components/products/ProductPurchase.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: ProductList,
    },
    {
        path: '/product-operations',
        component: ProductPurchase,
    },
    {
        path: '/product-sell',
        component: ProductSell,
    },
    {
        path: '*',
        redirect: '/',
    },
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});
