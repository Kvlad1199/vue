<template>
    <label>
        Введіть шлях до файлу .js
        <input ref="urlRef" v-model="urlValue" type="text" @change="checkUrl" />
    </label>
</template>

<script>
export default {
    name: 'UrlJsInput',

    props: {
        modelValue: {
            type: String,
            default: null,
        },
        modelModifiers: {
            type: Object,
            default: () => ({}),
        },
    },

    computed: {
        urlValue: {
            get() {
                return this.modelValue
            },
            set(val) {
                this.$emit('update:modelValue', val)
            },
        },
    },

    methods: {
        checkUrl() {
            if (this.urlValue && this.modelModifiers.checkPath) {
                if (
                    this.urlValue[this.urlValue.length - 1] === 's' &&
                    this.urlValue[this.urlValue.length - 2] === 'j' &&
                    this.urlValue[this.urlValue.length - 3] === '.'
                )
                    this.$refs.urlRef.style.backgroundColor = 'green'
                else this.$refs.urlRef.style.backgroundColor = 'red'
            }
        },
    },
}
</script>

<style lang="scss" scoped></style>
