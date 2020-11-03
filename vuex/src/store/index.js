import Vue from 'vue';
import Vuex  from 'vuex';

/**
 * Get Stores 
 */
import counter from './modules/counter';

Vue.use(Vuex);

const store =  new Vuex.Store({
    state: {
        two_way_binding: 10,
    },
    getters: {
        getTwoWayBinding(state) {
            return state.two_way_binding;
        }
    },
    mutations: {
        setValueToTwoWay(state, payload) {
            state.two_way_binding = payload;
        }
    },
    actions: {
        setValueToTwoWay_: ({commit}, payload) => {
            setTimeout(() => commit('setValueToTwoWay', payload), 1000);
        }
    },
    modules: {
        counter,
    }
});

export default store;
