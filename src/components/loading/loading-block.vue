<template>
  <div>
    <div class="zh_title">
      方块loading
    </div>
    <div class="zh_content">
      <div class="load-container">
        <div class="boxLoading"></div>
      </div>
    </div>
    <template v-if="codeShow">
      <div class="zh_code">
        <div class="zh_code_type">
          .html
        </div>
        <pre>
  &lt;div class="load-container"&gt;
    &lt;div class="boxLoading"&gt;&gt;/div&gt;
  &lt;/div&gt;</pre>
      </div>
      <div class="zh_code">
        <div class="zh_code_type">
          .scss
        </div>
        <pre>
  .load-container {
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    .boxLoading {
      width: 50px;
      height: 50px;
      margin: auto;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      &:before {
        content: "";
        width: 50px;
        height: 5px;
        background: #000;
        opacity: 0.1;
        position: absolute;
        top: 59px;
        left: 0;
        border-radius: 50%;
        animation: shadow 0.5s linear infinite;
      }
      &:after {
        content: "";
        width: 50px;
        height: 50px;
        background: #FFC773;
        animation: animate 0.5s linear infinite;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 3px;
      }
    }
  }

  @keyframes animate {
    17% {
      border-bottom-right-radius: 3px;
    }
    25% {
      transform: translateY(9px) rotate(22.5deg);
    }
    50% {
      transform: translateY(18px) scale(1, 0.9) rotate(45deg);
      border-bottom-right-radius: 40px;
    }
    75% {
      transform: translateY(9px) rotate(67.5deg);
    }
    100% {
      transform: translateY(0) rotate(90deg);
    }
  }

  @keyframes shadow {
    0%,
    100% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.2, 1);
    }
  }</pre>
      </div>
    </template>
    <div @click="setShow()">
      {{ codeShow ? '点击折叠' : '点击展开代码' }}
    </div>
  </div>
</template>
<script>
import loadingMixins from '../../mixins/loading-mixins'
export default {
  name: 'LoadingBlock',
  mixins: [loadingMixins]
}
</script>

<style lang="scss" scoped>
.load-container {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  .boxLoading {
    width: 50px;
    height: 50px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    &:before {
      content: "";
      width: 50px;
      height: 5px;
      background: #000;
      opacity: 0.1;
      position: absolute;
      top: 59px;
      left: 0;
      border-radius: 50%;
      animation: shadow 0.5s linear infinite;
    }
    &:after {
      content: "";
      width: 50px;
      height: 50px;
      background: #FFC773;
      animation: animate 0.5s linear infinite;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 3px;
    }
  }
}

@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes shadow {
  0%,
  100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
</style>