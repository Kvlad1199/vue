<template>
    <shop-manager />
</template>

<script>
import ShopManager from './components/ShopManager.vue'
export default {
    name: 'App',
    components: { ShopManager },
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: #2c3e50;
    margin-top: 60px;
}
</style>
