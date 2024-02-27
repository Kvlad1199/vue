<template>
    <div class="panel">{{ selectedCategory.productCategory }} в Україні</div>

    <div class="cards">
        <div v-for="gadget in selectedList" :key="gadget.id" class="card">
            <div class="card__image">
                <img :src="gadget.image" />
            </div>
            <div class="card__text">
                <h4 class="card__title">{{ gadget.model }}</h4>
                <div class="card__price">{{ gadget.price }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'CategoryList',

    computed: {
        ...mapGetters(['selectedCategory', 'tabletList', 'phonesList', 'pcList', 'laptopsList']),

        selectedList() {
            if (this.selectedCategory.productCategory === 'Ноутбуки') return this.laptopsList
            else if (this.selectedCategory.productCategory === 'ПК') return this.pcList
            else if (this.selectedCategory.productCategory === 'Телефони') return this.phonesList
            else if (this.selectedCategory.productCategory === 'Планшети') return this.tabletList
            else return []
        },
    },
}
</script>

<style lang="scss" scoped>
.panel {
    text-align: center;
    margin-top: 25px;
    margin-bottom: 50px;
}
.cards {
    display: flex;
    // justify-content: center;
    max-width: 900px;
    margin: 0 auto;
    gap: 15px;
}
.card {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;

    // .card__image
    &__image {
        flex: 1 1 auto;
        img {
            width: 200px;
        }
    }
    // .card__text
    &__text {
    }
    // .card__title
    &__title {
    }
    // .card__price
    &__price {
        text-align: center;
    }
}
</style>
