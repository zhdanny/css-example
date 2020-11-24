<template>
  <div>
    <div class="zh_title">
      泡泡loading
    </div>
    <div class="zh_content">
      <div class="load-container">
        <div class="load load1"></div>
        <div class="load load2"></div>
        <div class="load"></div>
      </div>
    </div>
    <template v-if="codeShow">
      <div class="zh_code">
        <div class="zh_code_type">
          .html
        </div>
        <pre>
  &lt;div class="load-container"&gt;
    &lt;div&gt; class="load load1"&gt;&lt;/div&gt;
    &lt;div&gt; class="load load2"&gt;&lt;/div&gt;
    &lt;div&gt; class="load"&gt;&lt;/div&gt;
  &lt;/div&gt;</pre>
      </div>
      <div class="zh_code">
        <div class="zh_code_type">
          .scss
        </div>
        <pre>
  .load-container {
    margin: 0 auto;
    width: 150px;
    text-align: center;
    .load {
      width: 20px;
      height: 20px;
      background-color: #E4C6D0;
      margin: 0 2px;
      border-radius: 100%;
      display: inline-block;
      -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
      animation: bouncedelay 1.4s infinite ease-in-out;
      /* Prevent first frame from flickering when animation starts */
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }
    .load1 {
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
    }
    .load2 {
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
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
import loadingMixins from '../../mixins/loading-mixins'
export default {
  name: 'LoadingBubbles',
  mixins: [loadingMixins]
}
</script>

<style lang="scss" scoped>
.load-container {
  margin: 0 auto;
  width: 150px;
  text-align: center;
  .load {
    width: 20px;
    height: 20px;
    background-color: #E4C6D0;
    margin: 0 2px;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
    animation: bouncedelay 1.4s infinite ease-in-out;
    /* Prevent first frame from flickering when animation starts */
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .load1 {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .load2 {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
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