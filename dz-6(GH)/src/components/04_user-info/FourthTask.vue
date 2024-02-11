<template>
    <user-info-input v-model:name.check="userName" v-model:age.setColor="userAge" />
    <div>{{ userName }} -- {{ userAge }}</div>
</template>

<script>
import UserInfoInput from './UserInfoInput.vue'

export default {
    name: 'FourthTask',
    components: { UserInfoInput },

    data() {
        return {
            userName: null,
            userAge: null,
        }
    },
}
</script>

<style lang="scss" scoped></style>
