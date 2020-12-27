<template>
    <div>
        <app-header />
        <router-view></router-view>
        <app-footer />
    </div>
</template>

<script>
    // Import Components - Bileşenleri Dahil Etme
    import Header from './components/common/Header';
    import Footer from './components/common/Footer';

    export default {
        name: 'App',
        components: {
            appHeader: Header,
            appFooter: Footer,
        },
        created() {
            this.$store.dispatch('getTradeResult');
        },
    }
</script>

<style>
</style>
