<template>
  <div class="step-input">
    <span v-if="label" class="step-input__label"> {{ label }} </span>
    <Input 
      v-model="valueInput"
      :style="`width: ${width}px`" 
    >
    <span 
      slot="prepend" 
      class="input-icon"
      @click="preClick"
    > - </span>
    <span 
      slot="append" 
      class="input-icon"
      @click="afterClick"
    > + </span>
    </Input>
    <span v-if="unit" style="margin-left: 10px;">{{ unit }}</span>
  </div>
</template>
<script>
export default {
  props: {
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 100
    },
    label: {
      type: String,
      default: ''
    },
    unit: {
      type: String,
      default: ''
    }
  },
  computed: {
    valueInput: {
      get(){
        return this.value
      },
      set(val){
        let value = 0
        if(!isNaN(Number(val))){
          value = Number(val)
        }
        this.$emit('input', value)
      }
    }
  },
  methods: {
    preClick(){
      let num = this.valueInput - this.step
      num = this.toFixed(num)
      this.valueInput = num
    },
    afterClick(){
      let num = this.valueInput + this.step
      num = this.toFixed(num)
      this.valueInput = num
    },
    toFixed(num){
      num = Math.round(num * 10)
      num = num / 10
      return num
    }
  }
}
</script>

<style lang="scss" scoped>
.step-input{
  display: flex;
  align-items: center;
  margin: 20px 0;
  &__label{
    min-width: 82px;
    text-align: right;
  }
}
.input-icon{
  cursor: pointer;
}
</style>