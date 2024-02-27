<template>
    <category-header />
    <category-list v-if="selectedCategory" />
</template>

<script>
import { mapGetters } from 'vuex'
import CategoryHeader from './CategoryHeader.vue'
import CategoryList from './CategoryList.vue'

export default {
    name: 'ProductSelector',
    components: { CategoryHeader, CategoryList },

    computed: {
        ...mapGetters(['selectedCategory']),
    },
}
</script>

<style lang="scss" scoped></style>
