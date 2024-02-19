<template>
    <h2>Корзина</h2>
    <div v-for="product in cartList" :key="product.id" class="product">
        {{ product.title }}
        <div>
            {{ currentPrice(product.price) }} {{ currentRateLabel }}
            <button @click="deleteProduct(product)">Відмовитись</button>
        </div>
    </div>
    <div class="">Сума до сплати {{ getTotalPrice }} {{ currentRateLabel }}</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'ProductList',

    computed: {
        ...mapGetters(['', 'currentRateLabel', 'currentRate', 'currentPrice', 'cartList', 'getTotalPrice']),
    },

    methods: {
        ...mapActions(['deleteProduct']),
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
