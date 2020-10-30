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
});

export default store;
