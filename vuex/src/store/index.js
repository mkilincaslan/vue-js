import Vue from 'vue';
import Vuex  from 'vuex';

/**
 * Get Stores 
 */
import counter from './modules/counter';
import { setValueToTwoWay } from './mutations';
import {getTwoWayBinding} from './getters';
import {setValueToTwoWay_} from './actions'

// import * as mutations from './mutations'; // Another way - Diğer bir kullanım

Vue.use(Vuex);

const store =  new Vuex.Store({
    state: {
        two_way_binding: 10,
    },
    getters: {
        getTwoWayBinding,
    },
    mutations: {
        setValueToTwoWay,
    },
    // mutations, // Another way - Diğer bir kullanım
    actions: {
        setValueToTwoWay_,
    },
    modules: {
        counter,
    }
});

export default store;
