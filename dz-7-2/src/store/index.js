import { createStore } from 'vuex'

import products from '../data/products'

export default createStore({
    state: {
        productsList: [],
        cartList: [],
        currentRate: 1,
    },
    getters: {
        productsList: ({ productsList }) => productsList,
        currentRate: ({ currentRate }) => currentRate,
        cartList: ({ cartList }) => cartList,

        currentRateLabel(state) {
            if (state.currentRate === 1) return 'грн'
            else return '$'
        },

        currentPrice: (state) => (price) => (price * state.currentRate).toFixed(2),

        getTotalPrice: (state) =>
            (state.cartList.reduce((prevSum, product) => prevSum + product.price, 0) * state.currentRate).toFixed(2),
    },
    mutations: {
        setProductsToList(state, list) {
            state.productsList = list
        },
        setCurrentRate(state, rate) {
            state.currentRate = rate
        },
        buyProduct(state, product) {
            state.cartList.push(product)
            state.productsList = state.productsList.filter((item) => item.id !== product.id)
        },
        deleteProduct(state, product) {
            state.productsList.push(product)
            state.cartList = state.cartList.filter((item) => item.id !== product.id)
        },
    },
    actions: {
        loadList({ commit }) {
            commit('setProductsToList', products)
        },
        setCurrentRate({ commit }, rate) {
            commit('setCurrentRate', rate)
        },
        buyProduct({ commit }, product) {
            commit('buyProduct', product)
        },
        deleteProduct({ commit }, product) {
            commit('deleteProduct', product)
        },
    },
    modules: {},
})
