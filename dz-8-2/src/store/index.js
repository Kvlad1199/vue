import { createStore } from 'vuex'
import { carsList } from '../data/cars_data'

export default createStore({
    state: {
        carsList: [],

        selectedType: null,
        selectedBodyType: [],
        selectedMake: null,
        selectedModel: null,
    },
    getters: {
        carsList: ({ carsList }) => carsList,
        typeCarsList(state) {
            return [...new Set(state.carsList.map((item) => item.type))].sort()
        },
        bodyTypeList(state) {
            return [...new Set(state.carsList.map((item) => item.bodyType))].sort()
        },
        markList({ carsList }) {
            return [...new Set(carsList.map((item) => item.make))].sort()
        },
        modelList({ carsList, selectedMake }) {
            if (selectedMake) {
                return [
                    ...new Set(carsList.filter((car) => car.make === selectedMake).map((item) => item.model)),
                ].sort()
            } else {
                return [...new Set(carsList.map((item) => item.model))].sort()
            }
        },

        selectedType: ({ selectedType }) => selectedType,
        selectedMake: ({ selectedMake }) => selectedMake,
        selectedModel: ({ selectedModel }) => selectedModel,

        filteredList(state) {
            if (state.selectedType || state.selectedMake || state.selectedModel || state.selectedBodyType.length) {
                return state.carsList.filter((car) => {
                    const typeMatch = !state.selectedType || car.type.includes(state.selectedType)
                    const makeMatch = !state.selectedMake || car.make.includes(state.selectedMake)
                    const modelMatch = !state.selectedModel || car.model.includes(state.selectedModel)
                    const bodyTypeMatch =
                        state.selectedBodyType.length === 0 || state.selectedBodyType.includes(car.bodyType)
                    return typeMatch && makeMatch && modelMatch && bodyTypeMatch
                })
            } else {
                return state.carsList
            }
        },
    },
    mutations: {
        clearFilters(state) {
            ;(state.selectedModel = null),
                (state.selectedMake = null),
                (state.selectedType = null),
                (state.selectedBodyType = [])
        },

        setCarsData(state, list) {
            state.carsList = list
        },
        setType(state, newType) {
            state.selectedType = newType
        },
        setBodyType(state, type) {
            if (state.selectedBodyType.includes(type)) {
                state.selectedBodyType = state.selectedBodyType.filter((bodyType) => bodyType !== type)
            } else state.selectedBodyType.push(type)
        },
        setMake(state, newMake) {
            state.selectedMake = newMake
        },
        setModel(state, newModel) {
            if (!state.selectedMake) {
                const temp = state.carsList.find((car) => car.model === newModel)
                state.selectedMake = temp.make
            }
            state.selectedModel = newModel
        },
    },
    actions: {
        loadData({ commit }) {
            commit('setCarsData', carsList)
        },
        setType({ commit }, newType) {
            commit('setType', newType)
        },
        setBodyType({ commit }, type) {
            commit('setBodyType', type)
        },
        setMake({ commit }, make) {
            commit('setMake', make)
        },
        setModel({ commit }, model) {
            commit('setModel', model)
        },
        clearFilters({ commit }) {
            commit('clearFilters')
        },
    },
    modules: {},
})
