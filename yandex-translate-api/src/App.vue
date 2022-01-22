<template>
  <div class="container">
    <h1 class="text-center">Vue-Translator</h1>
    <h5 class="text-center">Vue.js ile Translator</h5>
    <br>
    <div class="row">
        <div class="col-md-12 text-center">
            <app-translate-form />
            <h3 class="text-success text-center"></h3>
            <app-history />
        </div>
    </div>
  </div>
</template>

<script>
    import TranslateFrom from './components/TranslateForm.vue';
    import History from './components/History.vue';
    export default {
        name: 'app',
        components: {
            'app-translate-form': TranslateFrom,
            'app-history': History,
        }
    }
</script>

<style>
    body {
        background-color: #dedede;
    }
</style>
