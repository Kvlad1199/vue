<template>
    <div>
        <label>
            Card Number
            <input
                ref="cardNumVal"
                :key="updateKeyNum"
                v-model="cardNumVal"
                type="text"
                maxlength="19"
                placeholder="**** **** **** ****"
            />
        </label>
    </div>
    <div>
        <label>
            Expiry Date
            <input
                ref="expDateVal"
                :key="updateKeyDate"
                v-model="expDateVal"
                type="text"
                maxlength="5"
                placeholder="MM / YY"
            />
        </label>
        <label>
            Secure Code
            <input
                ref="secureCodeVal"
                :key="updateKeySecureCode"
                v-model="secureCodeVal"
                type="password"
                maxlength="3"
                placeholder="***"
            />
        </label>
    </div>
</template>

<script>
export default {
    name: 'CreditCard',

    props: {
        cardNum: {
            type: String,
            default: '',
        },
        cardNumModifiers: {
            type: Object,
            default: () => ({}),
        },
        expDate: {
            type: String,
            default: '',
        },
        expDateModifiers: {
            type: Object,
            default: () => ({}),
        },
        secureCode: {
            type: String,
            default: '',
        },
        secureCodeModifiers: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            updateKeyNum: 0,
            updateKeyDate: 0,
            updateKeySecureCode: 0,
        }
    },
    computed: {
        cardNumVal: {
            get() {
                if (this.cardNum && this.cardNumModifiers.separate4Digits)
                    return this.cardNum.replace(/(\d{4}(?=.+))/g, '$1 ')
                else return this.cardNum
            },
            set(val) {
                if (this.cardNumModifiers.digitsOnly) {
                    val = val.replace(/\D/g, '')
                    this.$nextTick(() => {
                        this.updateKeyNum++
                        this.$nextTick(() => {
                            this.$refs.cardNumVal.focus()
                        })
                    })
                }

                if (this.cardNumModifiers.separate4Digits) {
                    val = val.replace(/\D/g, '')
                }

                this.$emit('update:cardNum', val)
            },
        },
        expDateVal: {
            get() {
                return this.expDate
            },
            set(val) {
                if (this.expDateModifiers.digitsOnly) {
                    val = val.replace(/[^\d/]/g, '')
                    this.$nextTick(() => {
                        this.updateKeyDate++
                        this.$nextTick(() => {
                            this.$refs.expDateVal.focus()
                        })
                    })
                }
                if (this.expDateModifiers.addSlesh) {
                    if (val.length === 2 && !val.includes('/')) {
                        val = val + '/'
                    }
                }

                this.$emit('update:expDate', val)
            },
        },
        secureCodeVal: {
            get() {
                return this.secureCode
            },
            set(val) {
                if (this.secureCodeModifiers.digitsOnly) {
                    val = val.replace(/\D/g, '')
                    this.$nextTick(() => {
                        this.updateKeySecureCode++
                        this.$nextTick(() => {
                            this.$refs.secureCodeVal.focus()
                        })
                    })
                }

                this.$emit('update:secureCode', val)
            },
        },
    },
}
</script>

<style lang="scss" scoped></style>
