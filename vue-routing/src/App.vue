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
                <router-view />
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
</style>
