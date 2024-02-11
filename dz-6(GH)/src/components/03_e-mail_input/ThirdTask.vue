<template>
    <email-input v-model.check="emailValue" />
    <div>{{ emailValue }}</div>
</template>

<script>
import EmailInput from './EmailInput.vue'

export default {
    name: 'ThirdTask',
    components: { EmailInput },

    data() {
        return {
            emailValue: null,
        }
    },
}
</script>

<style lang="scss" scoped></style>
