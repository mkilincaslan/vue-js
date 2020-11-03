import Vue from 'vue';
import Vuex  from 'vuex';

Vue.use(Vuex);

const store =  new Vuex.Store({
    state: {
        counter: 0   
    },
    getters: {
        getDoubleCounter(state) {
            return state.counter * 2;
        },
        getCounter(state) {
            return state.counter;
        }
    },
    mutations: {
        increaseCounter(state, value) {
            state.counter += value;
        },
        decreaseCounter(state, value) {
            state.counter -= value;
        }
    },
    actions: {
        increment: ({commit}) => {
            setTimeout(() => commit('increaseCounter', 1),2000);
        },
        decrement: ({commit}) => {
            setTimeout(() => commit('decreaseCounter', 1),2000);
        } 
    }
});

export default store;
