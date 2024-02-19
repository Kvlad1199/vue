<template>
    <div>
        <product-list />
        <rate-selector />
        <cart-product-list />
    </div>
</template>

<script>
import CartProductList from './CartProductList.vue'
import ProductList from './ProductList.vue'
import RateSelector from './RateSelector.vue'
export default {
    name: 'ShopManager',
    components: { ProductList, RateSelector, CartProductList },
}
</script>

<style lang="scss" scoped></style>
