<template>
  <div class="z-title">
    <div class="title">
      <slot></slot>
    </div>
    <div class="button">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZTitle',
  props: {

  }
}
</script>

<style lang="scss" scoped>
.z-title{
  display: flex;
  justify-content: space-between;
  .title{
    position: relative;
    padding-left: 20px;
    font-size: 20px;
    color: #395260;
    &::before{
      position: absolute;
      top: calc(50% - 5px);
      left: 0;
      content: '';
      width: 10px;
      height: 10px;
      background: #EF7A82;
      transform: rotate(45deg);
      transform-origin: center;
    }
  }
}
</style>