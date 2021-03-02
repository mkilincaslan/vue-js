<template>
    <div class="container">
        <app-tags @emit-error='errorhand($event)' v-model='tags'/>
        <app-error :error='error' />
        {{tags}}
    </div>
</template>

<script>
    import { Error, Tags } from './components';

    export default {
        components: {
            appError: Error,
            appTags: Tags,
        },
        data() {
            return {
                error: null,
                tags: 'vue.js,node.js'
            }
        },
        methods: {
            errorhand (e) {
                this.error = e;
            }
        },
    }
</script>

<style>
    body {
        font-family: sans-serif;
    }
    .container {
        display: flex;
        flex-direction: column;
        border: 1px solid #ccc;
    }
</style>
