<template>
    <label>
        Введіть ваш вік
        <input ref="ageInput" :key="upgradeKey" v-model="ageValue" autocomplete="off" type="number" />
    </label>
</template>

<script>
export default {
    name: 'AgeInput',
    props: {
        age: {
            type: Number,
            default: null,
        },
        ageModifiers: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            upgradeKey: 0,
        }
    },
    computed: {
        ageValue: {
            get() {
                return this.age
            },
            set(newVal) {
                if (this.ageModifiers.check && newVal) {
                    if (newVal > 150 || newVal < 0) {
                        newVal = null
                        this.$nextTick(() => {
                            this.upgradeKey++
                            this.$nextTick(() => {
                                this.$refs.ageInput.focus()
                            })
                        })
                    }
                }
                if (this.ageModifiers.setColor) {
                    // console.log('11')
                    this.setColor(newVal)
                }
                this.$emit('update:age', newVal)
            },
        },
    },
    methods: {
        setColor(ageVal) {
            if (ageVal < 10) this.$refs.ageInput.style.backgroundColor = 'green'
            else if (ageVal < 21) this.$refs.ageInput.style.backgroundColor = 'yellow'
            else this.$refs.ageInput.style.backgroundColor = 'orange'
        },
    },
}
</script>

<style lang="scss" scoped></style>
