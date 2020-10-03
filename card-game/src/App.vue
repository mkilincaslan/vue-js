<template>
    <transition-group name="slideContainer" mode="out-in">
        <component 
            key="mainComponent"
            @activeComponentEvent="activeComponent = $event"
            :is="activeComponent" 
        />
        <canvas id="canvas" key="canvas" v-show="activeComponent == 'app-celebrate'"></canvas>
    </transition-group>
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

    .slideContainer-enter{}
    .slideContainer-enter-active{
        animation: slide-in .3s ease-in forwards;
    }
    .slideContainer-leave{}
    .slideContainer-leave-active{
        animation: slide-out .3s ease-out forwards;
    }

    @keyframes slide-in {
       from{
           transform: translateX(-1000px);
       } 
       to {
           transform: translateX(0px);
       }
    }
    @keyframes slide-out {
       from{
           transform: translateX(0px);
       } 
       to {
           transform: translateX(1000px);
       }
    }

</style>
