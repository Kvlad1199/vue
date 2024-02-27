<template>
    <div>
        <div>
            <h3>Тип транспорта</h3>
            <select v-model="carTypeVal">
                <option v-for="carType in typeCarsList" :key="carType" :value="carType">{{ carType }}</option>
            </select>
        </div>
        <div>
            <h3>Тип кузова</h3>
            <div v-for="carBody in bodyTypeList" :key="carBody" class="checkbox">
                <input :id="carBody" type="checkbox" :value="carBody" @change="setBodyType(carBody)" />
                <label :for="carBody"
                    ><span>{{ carBody }}</span></label
                >
            </div>
        </div>
        <div>
            <h3>Марка</h3>
            <select v-model="carMakeVal">
                <option v-for="carMake in markList" :key="carMake" :value="carMake">{{ carMake }}</option>
            </select>
        </div>
        <div>
            <h3>Модель</h3>
            <select v-model="carModelVal">
                <option v-for="carModel in modelList" :key="carModel" :value="carModel">{{ carModel }}</option>
            </select>
        </div>
        <button @click="clearFilters">Очистити фільтри</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'CarFilters',

    computed: {
        ...mapGetters([
            'typeCarsList',
            'selectedType',
            'bodyTypeList',
            'selectedMake',
            'markList',
            'selectedModel',
            'modelList',
        ]),

        carTypeVal: {
            get() {
                return this.selectedType
            },
            set(val) {
                this.setType(val)
            },
        },
        carMakeVal: {
            get() {
                return this.selectedMake
            },
            set(val) {
                this.setMake(val)
            },
        },
        carModelVal: {
            get() {
                return this.selectedModel
            },
            set(val) {
                this.setModel(val)
            },
        },
    },

    methods: {
        ...mapActions(['setType', 'setBodyType', 'setMake', 'setModel', 'clearFilters']),
    },
}
</script>

<style lang="scss" scoped></style>
