<template>
    <label> Введіть ім'я <input v-model="nameValue" type="text" :class="{ empty: isEmpty() }" /> </label>
    <label>
        Введіть вік
        <input ref="ageInput" v-model="ageValue" type="number" />
    </label>
</template>

<script>
export default {
    name: 'UserInfoInput',
    props: {
        name: {
            type: String,
            default: '',
        },
        nameModifiers: {
            type: Object,

            default: () => ({}),
        },
        age: {
            type: Number,
            default: null,
        },
        ageModifiers: {
            type: Object,

            default: () => ({}),
        },
    },

    computed: {
        nameValue: {
            get() {
                return this.name
            },
            set(val) {
                this.$emit('update:name', val)
            },
        },
        ageValue: {
            get() {
                return this.age
            },
            set(val) {
                if (this.ageModifiers.setColor && val) {
                    if (val < 18) this.$refs.ageInput.style.backgroundColor = 'red'
                    else this.$refs.ageInput.style.backgroundColor = 'green'
                }
                this.$emit('update:age', val)
            },
        },
    },
    methods: {
        isEmpty() {
            return this.nameModifiers.check && !this.nameValue
        },
    },
}
</script>

<style lang="scss" scoped>
.empty {
    background-color: red;
}
</style>
