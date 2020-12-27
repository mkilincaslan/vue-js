"use strict";

/**
    Update mutation to state about the trade
    Finans durumunu güncelleme mutation fonksiyonu
 */
export const updateTradeResult = (state, payload) => {
    const { purchase, sale, count } = payload;
    if (count) {
        state.purchase += parseFloat(purchase) * parseInt(count);
        state.sale += parseFloat(sale) * parseInt(count);
    } else {
        state.purchase += parseFloat(purchase);
        state.sale += parseFloat(sale);
    }
    state.balance = parseFloat(state.sale) - parseFloat(state.purchase);
};