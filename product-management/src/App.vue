<template>
    <div>
        <app-header />
        <transition name="fade" mode="out-in">
            <router-view />
        </transition>
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
    body {
        background-color: #a7a0bb5c;
    }
    .fade-enter{
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity .3s ease-out;
    }
    .fade-leave{}
    .fade-leave-active{
        transition: opacity .3s ease-out;
        opacity: 0;
    }
</style>
