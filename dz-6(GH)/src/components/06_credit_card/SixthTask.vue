<template>
    <div>
        <credit-card
            v-model:card-num.separate4Digits.digitsOnly="cardNum"
            v-model:exp-date.addSlesh.digitsOnly="expDate"
            v-model:secure-code.digitsOnly="secureCode"
        />
        <div>Card Number = {{ cardNum }}</div>
        <div>Expiry Date= {{ expDate }}</div>
        <div>Secure Code = {{ secureCode }}</div>
    </div>
</template>

<script>
import CreditCard from './CreditCard.vue'
export default {
    name: 'SixthTask',
    components: { CreditCard },
    data() {
        return {
            cardNum: null,
            expDate: null,
            secureCode: null,
        }
    },
}
</script>

<style lang="scss" scoped></style>
