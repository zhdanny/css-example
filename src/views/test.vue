<template>
  <div class="main">
    <!-- <div>两边固定宽度，中间自适应</div>
    <div class="example-1">
      <div class="left-1"></div>
      <div class="middle-1"></div>
      <div class="right-1"></div>
    </div> -->
    <!-- <div class="div-2">
      移动的小方块
    </div> -->
  </div>
</template>

<style lang="scss" scope>
.example-1{
  .left-1, .right-1{
    width: 200px;
    height: 400px;
    background: #000;
    float: left;
  }
  .middle-1{
    width: calc(100% - 400px);
    margin: 0 auto;
    height: 400px;
    float: left;
    background: rosybrown;
  }

}
.main{
  padding: 40px;
}
.div-2{
  width: 100px;
  height: 100px;
  background: royalblue;
  animation: test 2s linear forwards;
  transform-origin: center;
  position: absolute;
}

@keyframes test{
  0%{
    // transform: ;
    // transform: translateX(0);
    left: 0;
    transform: rotate(0)
  }
  50%{
    // transform: translateX(200px);
    left: 200px;
    transform: rotate(0)
  }
  100%{
    // translateX(200px) 
    left: 200px;
    transform: rotate(225deg);
    
  }
}
</style>