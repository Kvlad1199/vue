import { createStore } from 'vuex'
import students from '../data/students'
import { getStudentIn5Category } from './helper'

export default createStore({
    state: {
        studentsList: [],
        currentScoreCategory: null,
        currentType: null,
    },
    getters: {
        studentsList: ({ studentsList }) => studentsList,
        currentScoreCategory: ({ currentScoreCategory }) => currentScoreCategory,
        currentType: ({ currentType }) => currentType,

        // повертає список з оцінками в 12 бальній або 5 бальній
        getStudentsListWithScoreCategory(state, getters) {
            if (state.currentScoreCategory === 5) {
                const copyList = JSON.parse(JSON.stringify(getters.getStudentsListWithType))
                copyList.forEach((student) => (student.score = getStudentIn5Category(student.score)))
                return copyList
            } else {
                return getters.getStudentsListWithType
            }
        },

        //фільтрація за типами
        getStudentsListWithType(state) {
            if (!state.currentType) {
                return state.studentsList
            } else {
                return state.studentsList.filter(
                    (student) =>
                        student.score >= state.currentType.minScore && student.score <= state.currentType.maxScore
                )
            }
        },
    },
    mutations: {
        setStudents(state, list) {
            state.studentsList = list
        },
        setScoreCategory(state, score) {
            state.currentScoreCategory = score
        },
        setType(state, type) {
            state.currentType = type
        },
    },
    actions: {
        loadStudentsList({ commit }) {
            commit('setStudents', students)
        },
        setScoreCategory({ commit }, score) {
            commit('setScoreCategory', score)
        },
        setType({ commit }, type) {
            commit('setType', type)
        },
    },
    modules: {},
})
