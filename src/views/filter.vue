<template>
  <div class="filter-content">
    <div class="filter-style">
      <z-title>
        filter: brightness()
      </z-title>
      <div class="filter-style__desc">
        给图片应用一种线性乘法，使其看起来更亮或更暗。如果值是0%，图像会全黑。
        值是100%，则图像无变化。其他的值对应线性乘数效果。
        值超过100%也是可以的，图像会比原来更亮。如果没有设定值，默认是1。
        例如：filter: brightness(50%)
      </div>
      <div class="filter-style__detail">
        <div class="filter-style__detail_setting">
          <div>
            filter: brightness({{ brightness }}%)
          </div>
          <step-input v-model="brightness" :step="10" label="brightness：" unit="%"></step-input>
        </div>
        <div class="filter-style__detail_img">
          <img
            src="https://i.818rmb.com/up/0f/56/a9/98a551a37ddf5048c5cafd5959a9560f.jpg" 
            :style="`filter: brightness(${brightness}%)`"
            class="filter-img"
          >
        </div>
      </div>
    </div>
    <div class="filter-style">
      <z-title>
        filter: blur()
      </z-title>
      <div class="filter-style__desc">
        给图像设置高斯模糊。“radius”一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起，所以值越大越模糊；
        如果没有设定值，则默认是0；这个参数可设置css长度值，但不接受百分比值。例如：filter:blur(5px)
      </div>
      <div class="filter-style__detail">
        <div class="filter-style__detail_setting">
          <div>
            filter: blur({{ blur }}px)
          </div>
          <step-input v-model="blur" :step="1" label="blur：" unit="px"></step-input>
        </div>
        <div class="filter-style__detail_img">
          <img
            src="https://i.818rmb.com/up/0f/56/a9/98a551a37ddf5048c5cafd5959a9560f.jpg" 
            :style="`filter: blur(${blur}px)`"
            class="filter-img"
          >
        </div>
      </div>
    </div>
    <div class="filter-style">
      <z-title>
        filter: contrast()
      </z-title>
      <div class="filter-style__desc">
        调整图像的对比度。值是0%的话，图像会全黑。值是100%，图像不变。
        值可以超过100%，意味着会运用更低的对比。
        若没有设置值，默认是1。例如：filter:contrast(200%)
      </div>
      <div class="filter-style__detail">
        <div class="filter-style__detail_setting">
          <div>
            filter: contrast({{ contrast }}%)
          </div>
          <step-input v-model="contrast" :step="10" label="contrast：" unit="%"></step-input>
        </div>
        <div class="filter-style__detail_img">
          <img
            src="https://i.818rmb.com/up/0f/56/a9/98a551a37ddf5048c5cafd5959a9560f.jpg" 
            :style="`filter: contrast(${contrast}%)`"
            class="filter-img"
          >
        </div>
      </div>
    </div>
    <div class="filter-style">
      <z-title>
        filter: drop-shadow()
      </z-title>
      <div class="filter-style__desc">
        给图像设置一个阴影效果。阴影是合成在图像下面，可以有模糊度的，可以以特定颜色画出的遮罩图的偏移版本。
        函数接受&lt;shadow&gt;（在CSS3背景中定义）类型的值，除了“inset”关键字是不允许的。
        该函数与已有的box-shadow box-shadow属性很相似；
        不同之处在于，通过滤镜，一些浏览器为了更好的性能会提供硬件加速。 
        <pre>
参数如下：
  <b>&lt;offset-x&gt; &lt;offset-y&gt; (必须)</b>
  这是设置阴影偏移量的两个 &lt;length&gt;值. &lt;offset-x&gt; 设定水平方向距离. 负值会使阴影出现在元素左边. 
  &lt;offset-y&gt;设定垂直距离.负值会使阴影出现在元素上方。.查看 &lt;length&gt;可能的单位.
  如果两个值都是0, 则阴影出现在元素正后面 (如果设置了 &lt;blur-radius&gt; and/or &lt;spread-radius&gt;，会有模糊效果).
  <b>&lt;blur-radius&gt; (可选)</b>
  这是第三个 &lt;length&gt;值. 值越大，越模糊，则阴影会变得更大更淡.不允许负值 若未设定，默认是0 (则阴影的边界很锐利).
  <b>&lt;spread-radius&gt; (可选)</b>
  这是第四个 &lt;length&gt; 值. 正值会使阴影扩张和变大，负值会是阴影缩小.若未设定，默认是0 (阴影会与元素一样大小). 
  注意: Webkit, 以及一些其他浏览器 不支持第四个长度，如果加了也不会渲染。
  <b>&lt;color&gt; (可选)</b>
  查看 &lt;color&gt;该值可能的关键字和标记。若未设定，颜色值基于浏览器。
  在Gecko (Firefox), Presto (Opera)和Trident (Internet Explorer)中， 会应用 color属性的值。
  另外，如果颜色值省略，WebKit中阴影是透明的。
        </pre>
        例如：filter: drop-shadow(16px 16px 10px #CCA4E3)
      </div>
      <div class="filter-style__detail">
        <div class="filter-style__detail_setting">
          <div>
            {{ dropShadowConfig }}
          </div>
          <step-input v-model="dropShadow.offsetX" :step="1" label="offset-x：" unit="px"></step-input>
          <step-input v-model="dropShadow.offsetY" :step="1" label="offset-y：" unit="px"></step-input>
          <step-input v-model="dropShadow.blurRadius" :step="1" label="blur-radius：" unit="px"></step-input>
          <div class="flex-class">
            <span>color：</span>
            <Input v-model="dropShadow.color" type="text" style="width: 150px" />
          </div>
        </div>
        <div class="filter-style__detail_img">
          <img
            src="https://i.818rmb.com/up/0f/56/a9/98a551a37ddf5048c5cafd5959a9560f.jpg" 
            :style="dropShadowConfig"
            class="filter-img"
          >
        </div>
      </div>
    </div>
    <div class="filter-style">
      <z-title>
        filter: grayscale()
      </z-title>
      <div class="filter-style__desc">
        将图像转换为灰度图像。值定义转换的比例。值为100%则完全转为灰度图像，值为0%图像无变化。
        值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0。例如：filter: grayscale(100%)
      </div>
      <div class="filter-style__detail">
        <div class="filter-style__detail_setting">
          <div>
            filter: grayscale({{ grayscale }}%)
          </div>
          <step-input v-model="grayscale" :step="10" label="grayscale：" unit="%"></step-input>
        </div>
        <div class="filter-style__detail_img">
          <img
            src="https://i.818rmb.com/up/0f/56/a9/98a551a37ddf5048c5cafd5959a9560f.jpg" 
            :style="`filter: grayscale(${grayscale}%)`"
            class="filter-img"
          >
        </div>
      </div>
    </div>
    <div class="filter-style">
      <z-title>
        filter: hue-rotate()
      </z-title>
      <div class="filter-style__desc">
        给图像应用色相旋转。“angle”一值设定图像会被调整的色环角度值。值为0deg，则图像无变化。
        若值未设置，默认值是0deg。该值虽然没有最大值，超过360deg的值相当于又绕一圈。例如：filter: hue-rotate(90deg)
      </div>
      <div class="filter-style__detail">
        <div class="filter-style__detail_setting">
          <div>
            filter: hue-rotate({{ hueRotate }}deg)
          </div>
          <step-input v-model="hueRotate" :step="10" label="hue-rotate：" unit="deg"></step-input>
        </div>
        <div class="filter-style__detail_img">
          <img
            src="https://i.818rmb.com/up/0f/56/a9/98a551a37ddf5048c5cafd5959a9560f.jpg" 
            :style="`filter: hue-rotate(${hueRotate}deg)`"
            class="filter-img"
          >
        </div>
      </div>
    </div>
    <div class="filter-style">
      <z-title>
        filter: invert()
      </z-title>
      <div class="filter-style__desc">
        反转输入图像。值定义转换的比例。100%的价值是完全反转。值为0%则图像无变化。
        值在0%和100%之间，则是效果的线性乘子。 若值未设置，值默认是0。例如：filter: invert(100%)
      </div>
      <div class="filter-style__detail">
        <div class="filter-style__detail_setting">
          <div>
            filter: invert({{ invert }}%)
          </div>
          <step-input v-model="invert" :step="10" label="invert：" unit="%"></step-input>
        </div>
        <div class="filter-style__detail_img">
          <img
            src="https://i.818rmb.com/up/0f/56/a9/98a551a37ddf5048c5cafd5959a9560f.jpg" 
            :style="`filter: invert(${invert}%)`"
            class="filter-img"
          >
        </div>
      </div>
    </div>
    <div class="filter-style">
      <z-title>
        filter: opacity()
      </z-title>
      <div class="filter-style__desc">
        转化图像的透明程度。值定义转换的比例。值为0%则是完全透明，值为100%则图像无变化。
        值在0%和100%之间，则是效果的线性乘子，也相当于图像样本乘以数量。 
        若值未设置，值默认是1。该函数与已有的opacity属性很相似，不同之处在于通过filter，一些浏览器为了提升性能会提供硬件加速。
        例如：filter: opacity(50%)
      </div>
      <div class="filter-style__detail">
        <div class="filter-style__detail_setting">
          <div>
            filter: opacity({{ opacity }}%)
          </div>
          <step-input v-model="opacity" :step="10" label="opacity：" unit="%"></step-input>
        </div>
        <div class="filter-style__detail_img">
          <img
            src="https://i.818rmb.com/up/0f/56/a9/98a551a37ddf5048c5cafd5959a9560f.jpg" 
            :style="`filter: opacity(${opacity}%)`"
            class="filter-img"
          >
        </div>
      </div>
    </div>
    <div class="filter-style">
      <z-title>
        filter: saturate()
      </z-title>
      <div class="filter-style__desc">
        转换图像饱和度。值定义转换的比例。值为0%则是完全不饱和，值为100%则图像无变化。
        其他值，则是效果的线性乘子。超过100%的值是允许的，则有更高的饱和度。 若值未设置，值默认是1。
        例如：filter: saturate(200%)
      </div>
      <div class="filter-style__detail">
        <div class="filter-style__detail_setting">
          <div>
            filter: saturate({{ saturate }}%)
          </div>
          <step-input v-model="saturate" :step="10" label="saturate：" unit="%"></step-input>
        </div>
        <div class="filter-style__detail_img">
          <img
            src="https://i.818rmb.com/up/0f/56/a9/98a551a37ddf5048c5cafd5959a9560f.jpg" 
            :style="`filter: saturate(${saturate}%)`"
            class="filter-img"
          >
        </div>
      </div>
    </div>
    <div class="filter-style">
      <z-title>
        filter: sepia()
      </z-title>
      <div class="filter-style__desc">
        将图像转换为深褐色。值定义转换的比例。值为100%则完全是深褐色的，值为0%图像无变化。
        值在0%到100%之间，则是效果的线性乘子。若未设置，值默认是0。
        例如：filter: sepia(100%)
      </div>
      <div class="filter-style__detail">
        <div class="filter-style__detail_setting">
          <div>
            filter: sepia({{ sepia }}%)
          </div>
          <step-input v-model="sepia" :step="10" label="sepia：" unit="%"></step-input>
        </div>
        <div class="filter-style__detail_img">
          <img
            src="https://i.818rmb.com/up/0f/56/a9/98a551a37ddf5048c5cafd5959a9560f.jpg" 
            :style="`filter: sepia(${sepia}%)`"
            class="filter-img"
          >
        </div>
      </div>
    </div>
    <div class="filter-style">
      <z-title>
        复合函数
      </z-title>
      <div class="filter-style__desc">
        你可以组合任意数量的函数来控制渲染
        例如：filter: contrast(175%) brightness(3%)
      </div>
      <div class="filter-style__detail">
        <div class="filter-style__detail_setting">
          <div>
            {{ compositeConfig }}
          </div>
          <div class="flex-class__wrap filter-style__detail_setting_item">
            <div class="flex-class">
              <Checkbox v-model="brightnessCheck"></Checkbox>
              <step-input v-model="composite.brightness" :step="10" label="brightness：" unit="%"></step-input>
            </div>
            <div class="flex-class">
              <Checkbox v-model="blurCheck"></Checkbox>
              <step-input v-model="composite.blur" :step="1" label="blur：" unit="px"></step-input>
            </div>
            <div class="flex-class">
              <Checkbox v-model="contrastCheck"></Checkbox>
              <step-input v-model="composite.contrast" :step="10" label="contrast：" unit="%"></step-input>
            </div>
            <div class="flex-class">
              <Checkbox v-model="dropShadowCheck"></Checkbox>
              <div>
                <step-input v-model="composite.dropShadow.offsetX" :step="1" label="offset-x：" unit="px"></step-input>
                <step-input v-model="composite.dropShadow.offsetY" :step="1" label="offset-y：" unit="px"></step-input>
                <step-input v-model="composite.dropShadow.blurRadius" :step="1" label="blur-radius：" unit="px"></step-input>
                <div class="flex-class">
                  <span style="min-width: 82px; text-align: right;">color：</span>
                  <Input v-model="composite.dropShadow.color" type="text" style="width: 150px" />
                </div>
              </div>
            </div>
            <div class="flex-class">
              <Checkbox v-model="grayscaleCheck"></Checkbox>
              <step-input v-model="composite.grayscale" :step="10" label="grayscale：" unit="%"></step-input>
            </div>
            <div class="flex-class">
              <Checkbox v-model="hueRotateCheck"></Checkbox>
              <step-input v-model="composite.hueRotate" :step="10" label="hue-rotate：" unit="deg"></step-input>
            </div>
            <div class="flex-class">
              <Checkbox v-model="invertCheck"></Checkbox>
              <step-input v-model="composite.invert" :step="10" label="invert：" unit="%"></step-input>
            </div>
            <div class="flex-class">
              <Checkbox v-model="opacityCheck"></Checkbox>
              <step-input v-model="composite.opacity" :step="10" label="opacity：" unit="%"></step-input>
            </div>
            <div class="flex-class">
              <Checkbox v-model="saturateCheck"></Checkbox>
              <step-input v-model="composite.saturate" :step="10" label="saturate：" unit="%"></step-input>
            </div>
            <div class="flex-class">
              <Checkbox v-model="sepiaCheck"></Checkbox>
              <step-input v-model="composite.sepia" :step="10" label="sepia：" unit="%"></step-input>
            </div>
          </div>
        </div>
        <div class="filter-style__detail_img">
          <img
            src="https://i.818rmb.com/up/0f/56/a9/98a551a37ddf5048c5cafd5959a9560f.jpg" 
            :style="compositeConfig"
            class="filter-img"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StepInput from '@/components/step-input/index.vue'
import ZTitle from '@/components/z-title/index.vue'
export default {
  name: 'Filters',
  components: {
    StepInput,
    ZTitle
  },
  data(){
    return {
      brightness: 50,
      blur: 5,
      contrast: 200,
      dropShadow: {
        offsetX: 16,
        offsetY: 16,
        blurRadius: 10,
        color: '#CCA4E3'
      },
      grayscale: 100,
      hueRotate: 90,
      invert: 100,
      opacity: 50,
      saturate: 200,
      sepia: 100,
      composite: {
        brightness: 50,
        blur: 5,
        contrast: 200,
        grayscale: 100,
        hueRotate: 90,
        invert: 100,
        opacity: 50,
        saturate: 200,
        sepia: 100,
        dropShadow: {
          offsetX: 16,
          offsetY: 16,
          blurRadius: 10,
          color: '#CCA4E3'
        }
      },
      sepiaCheck: false,
      brightnessCheck: true,
      blurCheck: false,
      contrastCheck: true,
      grayscaleCheck: false,
      hueRotateCheck: false,
      invertCheck: false,
      opacityCheck: false,
      saturateCheck: false,
      dropShadowCheck: false
    }
  },
  computed: {
    dropShadowConfig(){
      let str = `filter: drop-shadow(${this.dropShadow.offsetX}px ${this.dropShadow.offsetY}px ${this.dropShadow.blurRadius}px ${this.dropShadow.color})`
      return str
    },
    compositeConfig(){
      let str = `
        filter: ${
            this.sepiaCheck ? 'sepia(' + this.composite.sepia + '%)' : ''
          } ${
            this.brightnessCheck ? 'brightness(' + this.composite.brightness + '%)' : ''
          } ${
            this.blurCheck ? 'blur(' + this.composite.blur + 'px)' : ''
          } ${
            this.contrastCheck ? 'contrast(' + this.composite.contrast + '%)' : ''
          } ${
            this.grayscaleCheck ? 'grayscale(' + this.composite.grayscale + '%)' : ''
          } ${
            this.hueRotateCheck ? 'hue-rotate(' + this.composite.hueRotate + '%)' : ''
          } ${
            this.invertCheck ? 'invert(' + this.composite.invert + '%)' : ''
          } ${
            this.opacityCheck ? 'opacity(' + this.composite.opacity + '%)' : ''
          } ${
            this.saturateCheck ? 'saturate(' + this.composite.saturate + '%)' : ''
          } ${
            this.dropShadowCheck ? 'drop-shadow(' + this.dropShadow.offsetX + 'px ' + this.dropShadow.offsetY + 'px ' + this.dropShadow.blurRadius + 'px ' + this.dropShadow.color + ')' : ''
          } 
      `
      return str
    }
  }

}
</script>

<style lang="scss" scoped>
.flex-class{
  display: flex;
  align-items: center;
}
.flex-class__wrap{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.filter-content{
  padding: 40px;
  width: 900px;
  margin: 0 auto;
}
.filter-img{
  width: 200px;
}
.filter-style{
  &__desc{
    padding: 10px 0;
    border-bottom: 2px solid #D1D9E0;
    margin-bottom: 20px;
  }
  &__detail{
    display: flex;
    &_setting{
      margin: 20px;
    }
    &_setting_item > div{
      margin: 0px 10px;
    }
  }
}
</style>