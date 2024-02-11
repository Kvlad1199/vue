<template>
    <age-input v-model:age.setColor.check="userAge" />
    <div>{{ userAge }}</div>
</template>

<script>
import AgeInput from './AgeInput.vue'
export default {
    name: 'FirstTask',
    components: { AgeInput },
    data() {
        return {
            userAge: null,
        }
    },
}
</script>

<style lang="scss" scoped></style>
