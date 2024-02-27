<template>
    <div class="cnt">
        <car-filters />
        <car-list />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CarFilters from './CarFilters.vue'
import CarList from './CarList.vue'

export default {
    name: 'CarManager',
    components: { CarFilters, CarList },

    computed: {
        ...mapGetters(['typeCarsList']),
    },
    created() {
        this.loadData()
    },
    methods: {
        ...mapActions(['loadData']),
    },
}
</script>

<style lang="scss" scoped>
.cnt {
    display: flex;

    gap: 50px;
}
</style>
