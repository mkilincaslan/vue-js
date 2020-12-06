"use strict";

/**
    Update mutation to state about the trade
    Finans durumunu güncelleme mutation fonksiyonu
 */
export const updateTradeResult = (state, payload) => {
    const { purchase, sale, count } = payload;
    state.purchase += parseFloat(purchase) * parseInt(count);
    state.sale += parseFloat(sale) * parseInt(count);
    state.balance = parseFloat(state.sale) - parseFloat(state.purchase);
};