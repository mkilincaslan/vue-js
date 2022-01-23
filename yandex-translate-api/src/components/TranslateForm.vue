<template>
    <form @submit.prevent="translateIt" class="well">
        <textarea v-model="translateText" cols="30" rows="5" class="form-control" placeholder="What would you like to translate..."></textarea>
        <select v-model="translateTo" class="form-control">
            <option>1</option>
        </select>
        <br>
        <div class="text-left">
            <strong>Detected Lang : </strong> 
        </div>
        <br>
        <button type="submit" class="btn btn-primary btn-block">Çevir Gelsin!</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                translateText: '',
                translateTo: '',
            }
        },
        methods: {
            translateIt() {
            }
        }
    }
</script>

<style scoped>

</style>