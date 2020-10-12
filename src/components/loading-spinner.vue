<template>
  <div>
    <div class="zh_title">
      渐隐loading
    </div>
    <div class="zh_content">
      <div class="spinner"></div>
    </div>
    <template v-if="codeShow">
      <div class="zh_code">
        <div class="zh_code_type">
          .html
        </div>
        <pre>
  &lt;div&gt; class="spinner"&gt;&lt;/div&gt;
        </pre>
      </div>
      <div class="zh_code">
        <div class="zh_code_type">
          .scss
        </div>
        <pre>
  .spinner {
  width: 40px;
  height: 40px;
  margin: 10px auto;
  background-color: #333;
  border-radius: 100%;  
  -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
  animation: sk-scaleout 1.0s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
  0% { -webkit-transform: scale(0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
}
        </pre>
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
  name: 'LoadingSpinner',
  mixins: [loadingMixins]
}
</script>

<style lang="scss" scoped>
.spinner {
  width: 40px;
  height: 40px;
  margin: 10px auto;
  background-color: #333;
  border-radius: 100%;  
  -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
  animation: sk-scaleout 1.0s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
  0% { -webkit-transform: scale(0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
}
</style>