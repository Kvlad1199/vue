<template>
    <div style="margin-top: 20px">
        Категорія
        <select v-model="currentTypeVal">
            <option v-for="category in studentsCategoryList" :key="category.title" :value="category">
                {{ category.title }}
            </option>
        </select>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import { studentsCategoryList } from './settings'
export default {
    name: 'StudentTypeSelector',

    data() {
        return {
            studentsCategoryList,
        }
    },

    computed: {
        ...mapGetters(['currentType']),

        currentTypeVal: {
            get() {
                return this.currentType
            },
            set(val) {
                this.setType(val)
            },
        },
    },

    methods: {
        ...mapActions(['setType']),
    },
}
</script>

<style lang="scss" scoped></style>
