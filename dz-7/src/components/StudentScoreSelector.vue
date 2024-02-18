<template>
    <div style="margin-top: 20px">
        <div>Система оцінювання</div>
        <select v-model="selectedVal">
            <option :value="12">12</option>
            <option :value="5">5</option>
        </select>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'StudentScoreSelector',

    computed: {
        ...mapGetters(['currentScoreCategory']),
        selectedVal: {
            get() {
                return this.currentScoreCategory
            },
            set(val) {
                this.setScoreCategory(val)
            },
        },
    },

    methods: {
        ...mapActions(['setScoreCategory']),
    },
}
</script>

<style lang="scss" scoped></style>
