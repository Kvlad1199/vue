<template>
    <div class="five-task__container">
        <products-filter
            v-model:sellerStatus.check="selectedSellers"
            v-model:brandStatus.check="selectedBrands"
            :sellers-list="sellersList"
            :brand-list="brandList"
            @select-seller="onSellerSelect"
            @select-brand="onBrandSelect"
        />
        <product-list :card-list="filteredProductsList" />
    </div>
</template>

<script>
import { laptopsData } from '@/constants/laptop'
import ProductsFilter from './ProductsFilter.vue'
import ProductList from './ProductList.vue'
export default {
    name: 'FifthTask',
    components: { ProductsFilter, ProductList },
    props: {
        propName: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            laptopsData,
            selectedSellers: [],
            selectedSellersList: [],
            selectedBrands: [],
            selectedBrandsList: [],
        }
    },
    computed: {
        sellersList() {
            return [...new Set(this.laptopsData.map((product) => product.seller))]
        },
        brandList() {
            return [...new Set(this.laptopsData.map((product) => product.brand))]
        },
        filteredProductsList() {
            if (this.selectedBrandsList.length === 0 && this.selectedSellersList.length === 0) return this.laptopsData
            else {
                return this.laptopsData.filter((product) => {
                    return (
                        (this.selectedBrandsList.length === 0 || this.selectedBrandsList.includes(product.brand)) &&
                        (this.selectedSellersList.length === 0 || this.selectedSellersList.includes(product.seller))
                    )
                })
            }
        },
    },

    methods: {
        onSellerSelect(selectedSeller) {
            if (this.selectedSellersList.includes(selectedSeller))
                this.selectedSellersList = this.selectedSellersList.filter((seller) => seller !== selectedSeller)
            else this.selectedSellersList.push(selectedSeller)
        },
        onBrandSelect(selectedBrand) {
            if (this.selectedBrandsList.includes(selectedBrand))
                this.selectedBrandsList = this.selectedBrandsList.filter((brand) => brand !== selectedBrand)
            else this.selectedBrandsList.push(selectedBrand)
        },
    },
}
</script>

<style lang="scss" scoped>
.five-task__container {
    display: flex;
}
</style>
