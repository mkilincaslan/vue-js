<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <br>
                <!-- <app-header />
                <hr> -->
                <!-- Named router view it means we can use these names in routes.js with components feature -->
                <!-- Named router view diye geçen bileşen isimlendirilebilir ve routes.js içerisinde components içerisinde isim ile kullanılabilir -->
                <router-view name="header-top"/>
                <transition name="slide" mode="out-in">
                    <router-view />
                </transition>
                <router-view name="header-bottom"/>
            </div>
        </div>
    </div>
</template>

<script>
// import Header from './components/Header';

export default {
    name: "App",
    components: {
        // appHeader: Header,
    }
}
</script>

<style>
    .slide-enter{}
    .slide-enter-active{
        animation: slide-in .5s ease-in forwards;
    }
    .slide-leave{}
    .slide-leave-active{
        /* Last step */
        animation: slide-out .5s ease-out forwards;
    }

    @keyframes slide-in {
        /* Slide in animation with keyframes */
        from {
            transform: translateY(-20px);
        }
        to {
            transform: translateY(0px);
        }
    }
    @keyframes slide-out {
        /* Slide out animation with keyframes */
        from {
            transform: translateY(0px);
        }
        to {
            transform: translateY(-20px);
        }
    }
</style>
