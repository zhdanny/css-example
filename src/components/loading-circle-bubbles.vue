<template>
  <div>
    <div class="zh_title">
      圆圈泡泡loading
    </div>
    <div class="zh_content">
      <div class="load-container">
        <div class="container container1">
          <div class="circle circle1"></div>
          <div class="circle circle2"></div>
          <div class="circle circle3"></div>
          <div class="circle circle4"></div>
        </div>
        <div class="container container2">
          <div class="circle circle1"></div>
          <div class="circle circle2"></div>
          <div class="circle circle3"></div>
          <div class="circle circle4"></div>
        </div>
        <div class="container container3">
          <div class="circle circle1"></div>
          <div class="circle circle2"></div>
          <div class="circle circle3"></div>
          <div class="circle circle4"></div>
        </div>
      </div>
    </div>
    <template v-if="codeShow">
      <div class="zh_code">
        <div class="zh_code_type">
          .html
        </div>
        <pre>
  &lt;div class="load-container"&gt;
    &lt;div class="container container1"&gt;
      &lt;div class="circle circle1"&gt;&lt;/div&gt;
      &lt;div class="circle circle2"&gt;&lt;/div&gt;
      &lt;div class="circle circle3"&gt;&lt;/div&gt;
      &lt;div class="circle circle4"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="container container2"&gt;
      &lt;div class="circle circle1"&gt;&lt;/div&gt;
      &lt;div class="circle circle2"&gt;&lt;/div&gt;
      &lt;div class="circle circle3"&gt;&lt;/div&gt;
      &lt;div class="circle circle4"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="container container3"&gt;
      &lt;div class="circle circle1"&gt;&lt;/div&gt;
      &lt;div class="circle circle2"&gt;&lt;/div&gt;
      &lt;div class="circle circle3"&gt;&lt;/div&gt;
      &lt;div class="circle circle4"&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;</pre>
      </div>
      <div class="zh_code">
        <div class="zh_code_type">
          .scss
        </div>
        <pre>
  .load-container {
    margin: 0 auto;
    width: 48px;
    height: 48px;
    position: relative;
    .container{
      position: absolute;
      width: 100%;
      height: 100%;
      .circle{
        width: 12px;
        height: 12px;
        background-color: #88ADA6;
        border-radius: 100%;
        position: absolute;
        -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
        animation: bouncedelay 1.2s infinite ease-in-out;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
      }
      .circle1 { top: 0; left: 0; }
      .circle2 { top: 0; right: 0; }
      .circle3 { right: 0; bottom: 0; }
      .circle4 { left: 0; bottom: 0; }
    }
    .container1 {
      .circle2 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
      }
      .circle3 {
        -webkit-animation-delay: -0.6s;
        animation-delay: -0.6s;
      }
      .circle4 {
        -webkit-animation-delay: -0.3s;
        animation-delay: -0.3s;
      }
    }
    .container2 {
      -webkit-transform: rotateZ(45deg);
      transform: rotateZ(45deg);
      .circle1 {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
      }
      .circle2 {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
      }
      .circle3 {
        -webkit-animation-delay: -0.5s;
        animation-delay: -0.5s;
      }
      .circle4 {
        -webkit-animation-delay: -0.2s;
        animation-delay: -0.2s;
      }
    }
    .container3 {
      -webkit-transform: rotateZ(90deg);
      transform: rotateZ(90deg);
      .circle1 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
      }
      .circle2 {
        -webkit-animation-delay: -0.7s;
        animation-delay: -0.7s;
      }
      .circle3 {
        -webkit-animation-delay: -0.4s;
        animation-delay: -0.4s;
      }
      .circle4 {
        -webkit-animation-delay: -0.1s;
        animation-delay: -0.1s;
      }
    }
  }

  @-webkit-keyframes bouncedelay {
    0%, 80%, 100% { -webkit-transform: scale(0.0) }
    40% { -webkit-transform: scale(1.0) }
  }

  @keyframes bouncedelay {
    0%, 80%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 40% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
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
import loadingMixins from '../mixins/loading-mixins'
export default {
  name: 'LoadingCircleBubbles',
  mixins: [loadingMixins]
}
</script>

<style lang="scss" scoped>
.load-container {
  margin: 0 auto;
  width: 48px;
  height: 48px;
  position: relative;
  .container{
    position: absolute;
    width: 100%;
    height: 100%;
    .circle{
      width: 12px;
      height: 12px;
      background-color: #88ADA6;
      border-radius: 100%;
      position: absolute;
      -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
      animation: bouncedelay 1.2s infinite ease-in-out;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    .circle1 { top: 0; left: 0; }
    .circle2 { top: 0; right: 0; }
    .circle3 { right: 0; bottom: 0; }
    .circle4 { left: 0; bottom: 0; }
  }
  .container1 {
    .circle2 {
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }
    .circle3 {
      -webkit-animation-delay: -0.6s;
      animation-delay: -0.6s;
    }
    .circle4 {
      -webkit-animation-delay: -0.3s;
      animation-delay: -0.3s;
    }
  }
  .container2 {
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
    .circle1 {
      -webkit-animation-delay: -1.1s;
      animation-delay: -1.1s;
    }
    .circle2 {
      -webkit-animation-delay: -0.8s;
      animation-delay: -0.8s;
    }
    .circle3 {
      -webkit-animation-delay: -0.5s;
      animation-delay: -0.5s;
    }
    .circle4 {
      -webkit-animation-delay: -0.2s;
      animation-delay: -0.2s;
    }
  }
  .container3 {
    -webkit-transform: rotateZ(90deg);
    transform: rotateZ(90deg);
    .circle1 {
      -webkit-animation-delay: -1.0s;
      animation-delay: -1.0s;
    }
    .circle2 {
      -webkit-animation-delay: -0.7s;
      animation-delay: -0.7s;
    }
    .circle3 {
      -webkit-animation-delay: -0.4s;
      animation-delay: -0.4s;
    }
    .circle4 {
      -webkit-animation-delay: -0.1s;
      animation-delay: -0.1s;
    }
  }
}

@-webkit-keyframes bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 40% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>