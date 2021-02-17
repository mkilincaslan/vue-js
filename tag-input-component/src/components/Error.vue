<template>
    <div class="error" v-show="error">
        <span>{{ error }}</span>
    </div>
</template>

<script>
    export default {
        name: 'Error',
        props: ['error']
    }
</script>

<style scoped>
    .error {
        font-size: 12px;
        color: red;
        margin: 5px;
    }
</style>