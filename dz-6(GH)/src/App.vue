<template>
    <hr />
    <first-task />
    <hr />
    <second-task />
    <hr />
    <third-task />
    <hr />
    <fourth-task />

    <hr />
    <fifth-task />
    <hr />
    <sixth-task />
</template>

<script>
import { laptopsData } from './constants/laptop'

import FirstTask from './components/01_age_input/FirstTask.vue'
import SecondTask from './components/02_js_input/SecondTask.vue'
import ThirdTask from './components/03_e-mail_input/ThirdTask.vue'
import FourthTask from './components/04_user-info/FourthTask.vue'
import FifthTask from './components/05_product_manager/FifthTask.vue'

import SixthTask from './components/06_credit_card/SixthTask.vue'

export default {
    name: 'App',
    components: {
        FirstTask,
        SecondTask,
        ThirdTask,
        FourthTask,
        FifthTask,
        SixthTask,
    },
    data() {
        return {
            laptopsData,
        }
    },
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
