<template>
    <div>
        <button class="btn btn-success" @click="increaseCounter(1)">+ Arttır</button>
        <button class="btn btn-danger" @click="decreaseCounter(1)">- Azalt</button>
        <hr>
        <p>Actions</p>
        <button class="btn btn-success" @click="increment({time: 1000, value: 2})">+ Arttır</button>
        <button class="btn btn-danger" @click="decrement({time: 500, value: 1})">- Azalt</button>
        <hr>
        <input type="text" v-model="value">
        <p>Value: {{ value }}</p>
    </div>
</template>

<script>
    import { mapMutations, mapActions } from 'vuex';
    export default {
        computed: {
            value: {
                get() {
                    return this.$store.getters.getTwoWayBinding;
                },
                set(value) {
                    this.$store.commit('setValueToTwoWay', value);
                    // this.$store.dispatch('setValueToTwoWay_', value); // Actions
                }
            }
        },
        methods : {
            ...mapMutations([
                'increaseCounter',
                'decreaseCounter',
            ]),
            ...mapActions([
                'increment',
                'decrement',
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
