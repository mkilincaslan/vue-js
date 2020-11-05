<template>
    <div>
        <app-header />
        <!-- <app-product-purchase /> -->
        <!-- <app-product-sell /> -->
        <app-product-list />
        <app-footer />
    </div>
</template>

<script>
    // Import Components - Bileşenleri Dahil Etme
    import Header from './components/common/Header';
    import Footer from './components/common/Footer';
    // import ProductPurchase from './components/products/ProductPurchase';
    // import ProductSell from './components/products/ProductSell';
    import ProductList from './components/products/ProductList';

    export default {
        name: 'App',
        components: {
            appHeader: Header,
            appFooter: Footer,
            // appProductPurchase: ProductPurchase,
            // appProductSell: ProductSell,
            appProductList: ProductList,
        }
    }
</script>

<style>
</style>
