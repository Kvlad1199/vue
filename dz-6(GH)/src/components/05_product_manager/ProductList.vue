<template>
    <div class="cards">
        <product-card v-for="card in cardList" :key="card.id" :card-data="card" />
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
    name: 'ProductList',
    components: { ProductCard },
    props: {
        cardList: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped>
.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
</style>
