<template>
  <div>
    <div class="zh_title">
      翻转方块loading
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
  background-color: #333;
  margin: 10px auto;
  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
  animation: sk-rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes sk-rotateplane {
  0% { -webkit-transform: perspective(120px) }
  50% { -webkit-transform: perspective(120px) rotateY(180deg) }
  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
}

@keyframes sk-rotateplane {
  0% { 
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) 
  } 50% { 
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) 
  } 100% { 
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
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
  name: 'LoadingRotateClue',
  mixins: [loadingMixins]
}
</script>

<style lang="scss" scoped>
.spinner {
  width: 40px;
  height: 40px;
  background-color: #333;
  margin: 10px auto;
  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
  animation: sk-rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes sk-rotateplane {
  0% { -webkit-transform: perspective(120px) }
  50% { -webkit-transform: perspective(120px) rotateY(180deg) }
  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
}

@keyframes sk-rotateplane {
  0% { 
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) 
  } 50% { 
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) 
  } 100% { 
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
</style>