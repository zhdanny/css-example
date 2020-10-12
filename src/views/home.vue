<template>
  <div class="main">
    <loading-circle />
    <loading-block />
    <loading-barcode />
    <loading-bubbles />
    <loading-circle-bubbles />
    <loading-clue />
    <loading-spinner />
    <loading-rotate-clue />
  </div>
</template>
<script>
import loadingCircle from '../components/loading-circle'
import loadingBlock from '../components/loading-block'
import loadingBarcode from '../components/loading-barcode'
import loadingBubbles from '../components/loading-bubbles'
import loadingCircleBubbles from '../components/loading-circle-bubbles'
import loadingClue from '../components/loading-clue'
import loadingSpinner from '../components/loading-spinner'
import loadingRotateClue from '../components/loading-rotate-clue'

export default {
  name: 'Home',
  components: {
    loadingCircle,
    loadingBlock,
    loadingBarcode,
    loadingBubbles,
    loadingCircleBubbles,
    loadingClue,
    loadingSpinner,
    loadingRotateClue
  },

}
</script>
<style lang="scss">
.main{
  padding: 30px 60px;
}
.zh_title{
  font-size: 14px;
  font-weight: 600;
  text-shadow: 1px 1px rgba(80, 97, 109, 0.2),
  2px 2px rgba(80, 97, 109, 0.2),
  3px 3px rgba(80, 97, 109, 0.2),
  4px 4px rgba(80, 97, 109, 0.2);
  display: inline-block;
  margin-top: 30px;
}
.zh_content{
  text-align: center;
  padding: 20px;
  border: 1px dashed transparent;
  background: linear-gradient(white,white) padding-box, repeating-linear-gradient(-45deg,#ccc 0, #ccc .25em,white 0,white .75em);
  margin: 20px 0;
}
.zh_code{
  padding: 10px;
  overflow: auto;
  font-size: 12px;
  line-height: 20px;
  background-color: #f6f8fa;
  border-radius: 3px;
  position: relative;
  &:not(:last-child){
    margin-bottom: 10px;
  }
  &_type{
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
}
</style>