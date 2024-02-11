<template>
    <label>
        Введіть вашу пошту
        <input ref="emailInp" v-model="inpValue" type="text" @change="onChange" />
    </label>
</template>

<script>
export default {
    name: 'EmailInput',
    props: {
        modelValue: {
            type: String,
            default: '',
        },
        modelModifiers: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            emails: ['test', 'test1', 'test2', 'test3'],
        }
    },
    computed: {
        inpValue: {
            get() {
                return this.modelValue
            },
            set(val) {
                this.$emit('update:modelValue', val)
            },
        },
    },
    methods: {
        onChange() {
            this.addDomein()
            this.checkEmail()
        },
        addDomein() {
            if (this.inpValue.includes('@inv.mn.edu')) {
                console.log('a')
            } else this.inpValue += '@inv.mn.edu'
        },
        checkEmail() {
            if (this.modelModifiers.check) {
                if (this.emails.includes(this.inpValue)) this.$refs.emailInp.style.backgroundColor = 'green'
                else this.$refs.emailInp.style.backgroundColor = 'red'
            }
        },
    },
}
</script>

<style lang="scss" scoped></style>
