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
        increment: ({commit}, payload) => {
            // payload is a parameter that we assign the function -- payload bir parametredir ve kullandığımız yerden fonksiyona göndeririz
            const {time, value} = payload;
            setTimeout(() => commit('increaseCounter', value), time);
        },
        decrement: ({commit}, payload) => {
            // payload is a parameter that we assign the function -- payload bir parametredir ve kullandığımız yerden fonksiyona göndeririz
            const {time, value} = payload;
            setTimeout(() => commit('decreaseCounter', value), time);
        } 
    }
});

export default store;
