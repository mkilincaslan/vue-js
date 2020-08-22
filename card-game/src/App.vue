<template>
    <component :is="activeComponent">
        <app-card-environment />
    </component>
</template>
<script>
    import CardEnvironment from './components/GameArea';
    import CelebrateVue from './components/Celebrate.vue';
    import FailureVue from './components/Failure.vue';

    export default {
        data() {
            return {
                activeComponent: 'app-card-environment'
            }
        },
        components: {
            appCardEnvironment: CardEnvironment,
            appCelebrate: CelebrateVue,
            appFailure: FailureVue,
        }
    }
</script>
<style>
    body {
        font-family: sans-serif;
    }
</style>
