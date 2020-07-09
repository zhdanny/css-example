<template>
  <div>
    <div class='zh_title'>圆形loading</div>
    <div class="zh_content">
      <svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
        <circle id="loading-inner" cx="75" cy="75" r="60"/>
      </svg>
    </div>
    

    <div class="zh_code">
      <div class="zh_code_type">
        .html
      </div>
      <pre>
&lt;svg id="load" x="0px" y="0px" viewBox="0 0 150 150"&gt;
  &lt;circle id="loading-inner" cx="75" cy="75" r="60"/&gt;
&lt;/svg&gt;</pre>
    </div>
    <div class="zh_code">
      <div class="zh_code_type"> .scss</div>
      <pre>
.load-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 150px;
}

#load {
  width: 40px;
  animation: loading 3s linear infinite;
  #loading-inner {
    stroke: {
      dashoffset: 0;
      dasharray: 300;
      width: 10;
      miterlimit: 10;
      linecap: round;
    }
    animation: loading-circle 2s linear infinite;
    stroke: #DB5A6B;
    fill: transparent;
  }
}

@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes loading-circle {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -600;
  }
}</pre>
    </div>
  </div>
</template>
<script>
export default {
  name: 'loading-circle'
}
</script>

<style lang="scss" scoped>
.load-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 150px;
}

#load {
  width: 40px;
  animation: loading 3s linear infinite;
  #loading-inner {
    stroke: {
      dashoffset: 0;
      dasharray: 300;
      width: 10;
      miterlimit: 10;
      linecap: round;
    }
    animation: loading-circle 2s linear infinite;
    stroke: #DB5A6B;
    fill: transparent;
  }
}

@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes loading-circle {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -600;
  }
}
</style>