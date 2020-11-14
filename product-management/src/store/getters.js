"use strict";

/**
    Getter for trade result to frontend
    Önyüz için finans durumu getirme fonksiyonu
 */
export const getTradeResult = (state) => {
    return {
        purchase: state.purchase,
        sale: state.sale,
        balance: state.balance,
    }
};