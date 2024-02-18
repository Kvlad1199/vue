<template>
    <div class="wrap">
        <students-list />
        <student-score-selector />
        <student-type-selector />
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import StudentScoreSelector from './StudentScoreSelector.vue'
import StudentsList from './StudentsList.vue'
import StudentTypeSelector from './StudentTypeSelector.vue'

export default {
    name: 'StudentsManager',
    components: { StudentsList, StudentScoreSelector, StudentTypeSelector },

    computed: {},

    created() {
        this.loadStudentsList()
    },

    methods: {
        ...mapActions(['loadStudentsList']),
    },
}
</script>

<style lang="scss" scoped>
.wrap {
    display: flex;
    gap: 50px;
}
</style>
