<template>
    <div>
        <button class="btn btn-success" @click="increaseCounter(1)">+ Arttır</button>
        <button class="btn btn-danger" @click="decreaseCounter(1)">- Azalt</button>
        <hr>
        <p>Actions</p>
        <button class="btn btn-success" @click="increment">+ Arttır</button>
        <button class="btn btn-danger" @click="decrement">- Azalt</button>
    </div>
</template>

<script>
    import { mapMutations, mapActions } from 'vuex';
    export default {
        methods : {
            ...mapMutations([
                'increaseCounter',
                'decreaseCounter'
            ]),
            ...mapActions([
                'increment',
                'decrement'
            ]),
            // Before mapActions - mapActions fonksiyonu öncesi
            // increment() {
            //     this.$store.dispatch('increment');
            // },
            // decrement() {
            //     this.$store.dispatch('decrement');
            // }
            // ------------------------------------------------------------------------------
            // Before mapMutations - mapMutations fonksiyonu öncesi
            // increaseCounter(){
            //     // this.$emit("counterEvent", 1);
            //     // this.$store.state.counter++; // Old way without mutations - mutations fonksiyonlarını kullanmadan önceki hali
            //     this.$store.commit("increaseCounter", 1);
            // },
            // decreaseCounter(){
            //     // this.$emit("counterEvent", -1);
            //     // this.$store.state.counter--; // Old way without mutations - mutations fonksiyonlarını kullanmadan önceki hali
            //     this.$store.commit("decreaseCounter", 1);
            // }
        }
    }
</script>

<style>
</style>
