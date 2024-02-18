<template>
    <div>
        <h2>Список студентів</h2>
        <div class="flex">
            <div>ПІБ</div>
            <div>Середній бал</div>
        </div>
        <div class="">
            <div v-for="student in getStudentsListWithScoreCategory" :key="student.id" class="flex">
                {{ student.name }} <span>{{ student.score }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'StudentsList',

    computed: {
        ...mapGetters(['getStudentsListWithScoreCategory', 'getStudentsListWithType']),
    },
}
</script>

<style lang="scss" scoped>
.flex {
    display: flex;
    justify-content: space-between;
    width: 300px;
}
</style>
