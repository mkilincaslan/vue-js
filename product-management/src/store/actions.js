"use strict";
import Vue from 'vue';
import constants from '../config/constants.json';

/*
    Set trade result to db after every trade
    Herbir alış satış hareketinden sonra sonuçları veritabanına yazalım
*/
export const setTradeResult = ({ state, commit }, payload) => {
    commit('updateTradeResult', payload);
    const trade_data = {
        purchase: state.purchase,
        sale: state.sale,
    };
    Vue
        .http
        .put(`${constants['firebase-url']}trade.json`, trade_data)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
};

/*
    Get trade result from the db
    Finans durumu için veritabanından durumu getirelim
*/
export const getTradeResult = () => {};