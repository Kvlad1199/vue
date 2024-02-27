<template>
    <div class="cont">
        <button
            v-for="category in listForHeader"
            :key="category.id"
            class="cart"
            :class="{
                selected: selectedCategory && category.id === selectedCategory.id,
            }"
            @click="setSelectedCategory(category)"
        >
            <div class="image">
                <img :src="category.image" />
            </div>
            <div class="category">{{ category.productCategory }}</div>
        </button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'CategoryHeader',

    computed: {
        ...mapGetters(['productsData', 'selectedCategory', 'listForHeader']),
    },

    created() {
        this.setListForHeader()
    },

    methods: {
        ...mapActions(['setSelectedCategory', 'setListForHeader']),
    },
}
</script>

<style lang="scss" scoped>
.cont {
    display: flex;
    justify-content: center;
    column-gap: 5px;
}
.cart {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    // justify-content: center;
    align-items: center;
}
.image {
    flex: 1 1 auto;
}
.image img {
    width: 200px;
}

.selected {
    border: 3px solid red;
}
</style>
