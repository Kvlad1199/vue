<template>
    <h2>Список товарів</h2>
    <div v-for="product in productsList" :key="product.id" class="product">
        {{ product.title }}
        <div>
            {{ currentPrice(product.price) }} {{ currentRateLabel }}
            <button @click="buyProduct(product)">Купити</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'ProductList',

    computed: {
        ...mapGetters(['productsList', 'currentRateLabel', 'currentRate', 'currentPrice']),
    },

    created() {
        this.loadList()
    },
    methods: {
        ...mapActions(['loadList', 'buyProduct']),
    },
}
</script>

<style lang="scss" scoped>
.product {
    display: flex;
    width: 500px;
    justify-content: space-between;
}
</style>
