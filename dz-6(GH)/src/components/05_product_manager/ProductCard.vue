<template>
    <a :href="cardData.href" class="card">
        <div class="card__img">
            <img :src="cardData.img" />
        </div>
        <h3 class="card__title">{{ cardData.title }}</h3>
        <div class="card__price">{{ cardData.price }}</div>
    </a>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        cardData: {
            type: Object,
            default: () => ({}),
        },
    },
}
</script>

<style lang="scss" scoped>
.card {
    flex: 0 0 33.33%;
    // .card__img
    &__img {
        img {
            width: 300px;
        }
    }
    // .card__title
    
    // .card__price
    &__price {
        color: red;
    }
}
</style>
