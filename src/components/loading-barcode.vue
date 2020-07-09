<template>
  <div>
    <div class='zh_title'>条码loading</div>
    <div class="zh_content">
      <div class="load-container">
        <div class="container">
            <div class="boxLoading boxLoading1"></div>
            <div class="boxLoading boxLoading2"></div>
            <div class="boxLoading boxLoading3"></div>
            <div class="boxLoading boxLoading4"></div>
            <div class="boxLoading boxLoading5"></div>
        </div>
      </div>
    </div>
    <div class="zh_code">
      <div class="zh_code_type">
        .html
      </div>
      <pre>
&lt;div class="load-container"&gt;
  &lt;div class="container"&gt;
    &lt;div class="boxLoading boxLoading1"&gt;&lt;/div&gt;
    &lt;div class="boxLoading boxLoading2"&gt;&lt;/div&gt;
    &lt;div class="boxLoading boxLoading3"&gt;&lt;/div&gt;
    &lt;div class="boxLoading boxLoading4"&gt;&lt;/div&gt;
    &lt;div class="boxLoading boxLoading5"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>
    </div>
    <div class="zh_code">
      <div class="zh_code_type">
        .scss
      </div>
      <pre>
.load-container {
  display: flex;
  align-items: center;
  justify-content: center;
  .container{
    width: 50px;
    height: 60px;
    text-align: center;
    font-size: 10px;
    .boxLoading {
      background-color: #CCA4E3;
      height: 100%;
      width: 6px;
      display: inline-block;
      margin: 0 2px;
      -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
      animation: stretchdelay 1.2s infinite ease-in-out;
    }
    .boxLoading2 {
      -webkit-animation-delay: -1.1s;
      animation-delay: -1.1s;
    }
    .boxLoading3 {
      -webkit-animation-delay: -1.0s;
      animation-delay: -1.0s;
    }
    .boxLoading4 {
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }
    .boxLoading5 {
      -webkit-animation-delay: -0.8s;
      animation-delay: -0.8s;
    }
  }
}

@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
  20% { -webkit-transform: scaleY(1.0) }
}
@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}</pre>
    </div>
  </div>
</template>
<script>
export default {
  name: 'loading-barcode'
}
</script>

<style lang="scss" scoped>
.load-container {
    display: flex;
    align-items: center;
    justify-content: center;
    .container{
        width: 50px;
        height: 60px;
        text-align: center;
        font-size: 10px;
        .boxLoading {
            background-color: #CCA4E3;
            height: 100%;
            width: 6px;
            display: inline-block;
            margin: 0 2px;
            -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
            animation: stretchdelay 1.2s infinite ease-in-out;
        }
        .boxLoading2 {
            -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s;
        }
        .boxLoading3 {
            -webkit-animation-delay: -1.0s;
            animation-delay: -1.0s;
        }
        .boxLoading4 {
            -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s;
        }
        .boxLoading5 {
            -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s;
        }
    }
}

@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
  20% { -webkit-transform: scaleY(1.0) }
}
@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
</style>