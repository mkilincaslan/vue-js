<template>
    <div class="container">
        <h1>Conguralitions You Know!!!</h1>
        <button @click="newGame"> New Game </button>
    </div>
</template>

<script>
export default {
    methods: {
        newGame() {
            this.$emit('activeComponentEvent', 'app-card-environment');
        }
    }
}
</script>

<style scoped>
    .container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .container h1 {
        text-align: center;
        font-size: 333%;
        color: #000;
    }
    .container button {
        cursor: pointer;
        width: 200px;
        background-color: lightblue;
        color: #000;
        height: 50px;
        font-size: 15px;
        border-radius: 5px;
        outline: none;
        transition: all .5s;
    }

    .container button:hover {
        background-color: burlywood;
        color: #FFF;
        transition: all .5s;
    }
</style>