import Vue from 'vue';
import Vuex  from 'vuex';

Vue.use(Vuex);

const store =  new Vuex.Store({
    state: {
        counter: 0,
        two_way_binding: 10,
    },
    getters: {
        getDoubleCounter(state) {
            return state.counter * 2;
        },
        getCounter(state) {
            return state.counter;
        },
        getTwoWayBinding(state) {
            return state.two_way_binding;
        }
    },
    mutations: {
        increaseCounter(state, payload) {
            state.counter += payload;
        },
        decreaseCounter(state, payload) {
            state.counter -= payload;
        },
        setValueToTwoWay(state, payload) {
            state.two_way_binding = payload;
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
        },
        setValueToTwoWay_: ({commit}, payload) => {
            setTimeout(() => commit('setValueToTwoWay', payload), 1000);
        }
    }
});

export default store;
