<template>
    <url-js-input v-model.checkPath="urlJs" />
    <div>{{ urlJs }}</div>
</template>

<script>
import UrlJsInput from './UrlJsInput.vue'

export default {
    name: 'SecondTask',
    components: { UrlJsInput },
    data() {
        return {
            urlJs: null,
        }
    },
}
</script>

<style lang="scss" scoped></style>
