<template>
    <div class="car__list">
        <div v-for="car in filteredList" :key="car.id" class="car__item">
            <div class="car__image">
                <img :src="car.imgSrc" :alt="car.model" />
            </div>
            <div class="car__info">
                <div class="car__name">{{ car.make }} {{ car.model }} {{ car.year }}</div>
                <div class="car__price">{{ car.price }}$</div>
                <div class="car__grid-cnt">
                    <div>{{ car.mileage }}</div>
                    <div>{{ car.gearbox }}</div>
                    <div>{{ car.city }}</div>
                    <div>{{ car.fuel }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'CarList',

    computed: {
        ...mapGetters(['carsList', 'filteredList']),
    },
}
</script>

<style lang="scss" scoped>
.car {
    // .car__list
    &__list {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
    // .car__item
    &__item {
        display: flex;
        column-gap: 10px;
    }
    // .car__image
    &__image {
        width: 400px;
        img {
            max-width: 100%;
        }
    }
    // .car__info
    &__info {
    }
    // .car__name
    &__name {
        color: blue;
        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }
    // .car__price
    &__price {
        color: green;
        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }
    // .car__grid-cnt
    &__grid-cnt {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }
}
</style>
