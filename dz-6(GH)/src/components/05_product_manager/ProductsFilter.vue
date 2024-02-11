<template>
    <div class="filter">
        <div class="filter__item">
            <div class="filter__title">Продавець</div>
            <ul
                class="filter__list list-filter"
                :class="{
                    'green-border': sellerStatusModifiers.check && selectedSellerStatus.length === 0,
                }"
            >
                <li v-for="(seller, index) in sellersList" :key="index" class="list-filter__item">
                    <label class="list-filter__label">
                        {{ seller }}
                        <input
                            v-model="selectedSellerStatus"
                            type="checkbox"
                            class="list-filter__input"
                            :value="seller"
                            @change="$emit('selectSeller', seller)"
                        />
                    </label>
                </li>
            </ul>
        </div>
        <div class="filter__item">
            <div class="filter__title">Бренд</div>
            <div class="filter__search">
                <input v-model="inputBrand" type="search" placeholder="Пошук" />
            </div>
            <ul
                class="filter__list list-filter"
                :class="{
                    'green-border': brandStatusModifiers.check && selectedBrandrStatus.length === 0,
                }"
            >
                <li v-for="(brand, index) in filteredBrandList" :key="index" class="list-filter__item">
                    <label class="list-filter__label">
                        {{ brand }}
                        <input
                            v-model="selectedBrandrStatus"
                            type="checkbox"
                            class="list-filter__input"
                            :value="brand"
                            @change="$emit('selectBrand', brand)"
                        />
                    </label>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductsFilter',

    props: {
        sellersList: {
            type: Array,
            default: () => [],
        },
        brandList: {
            type: Array,
            default: () => [],
        },
        sellerStatus: {
            type: Array,
            default: () => [],
        },
        sellerStatusModifiers: {
            type: Object,
            default: () => ({}),
        },
        brandStatus: {
            type: Array,
            default: () => [],
        },
        brandStatusModifiers: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            inputBrand: null,
        }
    },
    computed: {
        selectedSellerStatus: {
            get() {
                return this.sellerStatus
            },
            set(val) {
                this.$emit('update:sellerStatus', val)
            },
        },
        selectedBrandrStatus: {
            get() {
                return this.brandStatus
            },
            set(val) {
                this.$emit('update:brandStatus', val)
            },
        },

        filteredBrandList() {
            if (this.inputBrand) {
                return this.brandList.filter((brand) => brand.toLowerCase().includes(this.inputBrand.toLowerCase()))
            }
            return this.brandList
        },
    },
}
</script>

<style lang="scss" scoped>
.green-border {
    border: 2px solid green;
}
</style>
