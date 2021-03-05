<template>
    <div class="container">
        <div class="container">
            <app-tags @emit-error='errorhand($event)' v-model='tags' color='primary'/>
            {{tags}}
        </div>
        <div class="container">
            <app-tags @emit-error='errorhand($event)' v-model='tags2' color='secondary'/>
            {{tags2}}
        </div>
        <div class="container">
            <app-tags @emit-error='errorhand($event)' v-model='tags3' color='danger'/>
            {{tags3}}
        </div>
        <div class="container">
            <app-tags @emit-error='errorhand($event)' v-model='tags4' color='success'/>
            {{tags4}}
        </div>
        <div class="container">
            <app-tags @emit-error='errorhand($event)' v-model='tags5' color='info'/>
            {{tags5}}
        </div>
        <div class="container">
            <app-tags @emit-error='errorhand($event)' v-model='tags6' color='warning'/>
            {{tags6}}
        </div>
        <app-error :error='error' />
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
                tags: 'vue.js,node.js',
                tags2: 'angular,java',
                tags3: 'kotlin,postgresql',
                tags4: 'c#,php',
                tags5: 'mysql,mongoodb',
                tags6: 'nginx,postman'
            }
        },
        methods: {
            errorhand (e) {
                this.error = e;
                setTimeout(() => {
                    this.error = null;
                }, 3000);
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
