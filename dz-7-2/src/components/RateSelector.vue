<template>
    <div>
        <select v-model="currencyVal">
            <option v-for="item in currencyList" :key="item.title" :value="item.rate">
                {{ item.title }}
            </option>
        </select>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { currencyList } from './settings'

export default {
    name: 'RateSelector',

    data() {
        return {
            currencyList,
        }
    },

    computed: {
        ...mapGetters(['currentRate']),
        currencyVal: {
            get() {
                return this.currentRate
            },
            set(val) {
                this.setCurrentRate(val)
            },
        },
    },

    methods: {
        ...mapActions(['setCurrentRate']),
    },
}
</script>

<style lang="scss" scoped></style>
