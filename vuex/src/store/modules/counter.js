const state = {
    counter: 0,
};

const getters = {
    getDoubleCounter(state) {
        return state.counter * 2;
    },
    getCounter(state) {
        return state.counter;
    },
};

const mutations = {
    increaseCounter(state, payload) {
        state.counter += payload;
    },
    decreaseCounter(state, payload) {
        state.counter -= payload;
    },
};

const actions = {
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
};

export default {
    state,
    getters,
    mutations,
    actions,
};
