<style scoped>
.girls-frontline-container {
  position: fixed;
  right: 0px;
  bottom: 0px;
  color: #00adb5;
}
.girls-frontline-container #vuepress-girls-frontline {
  position: absolute;
  right: 0px;
  bottom: 0px;
  z-index: 99999;
  pointer-events: none;
}
</style>

<template>
  <div
    v-show="isLoaded"
    ref="container"
    class="girls-frontline-container"
  >
    <canvas
      id="vuepress-girls-frontline"
      :width="style.width"
      :height="style.height"
      class="live2d"
    />
  </div>
</template>

<script>
import live2dJSString from './live2d'
import models from './models'

export default {
  name: 'GirlsFrontline',
  data () {
    return {
      isLoaded: true,
      model: {},
      style: {
        width: 300,
        height: 500,
      },
    }
  },
  created () {
    if (OPTIONS.minixModels) {
      this.model = { ...models, ...OPTIONS.minixModels }
    } else {
      this.model = models
    }
  },
  mounted () {
    this.initModel()

    this.$router.afterEach((to, from) => {
      if (to.path !== from.path) {
        this.initModel()
      }
    })
    if (OPTIONS.right) {
      this.$refs.container.style.right = OPTIONS.right + 'px'
    }
    if (OPTIONS.bottom) {
      this.$refs.container.style.bottom = OPTIONS.bottom + 'px'
    }
  },
  methods: {
    initModel () {
      const isMobile =
        !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      if (isMobile) {
        this.isLoaded = false
        return console.log('mobile do not load model')
      }

      if (!window.loadlive2d) {
        const script = document.createElement('script')
        script.innerHTML = live2dJSString
        document.body.appendChild(script)
      }
      if (OPTIONS.height && OPTIONS.width) {
        this.style = {
          width: OPTIONS.width,
          height: OPTIONS.height,
        }
      } else {
        this.style = {
          width: (150 / 1300) * document.body.clientWidth,
          height: (150 / 800) * document.body.clientWidth,
        }
      }

      setTimeout(() => {
        window.loadlive2d('vuepress-girls-frontline', this.getRandomModel(),)
      })
    },
    getRandomModel () {
      const modelsKey = Object.keys(this.model)
      // 如果传入了 model 就一直采用固定的model
      if (OPTIONS.model && modelsKey.includes(OPTIONS.model)) { return OPTIONS.model }
      // 否则就随机模型
      const idx = Math.floor(Math.random() * modelsKey.length)
      const model = this.model[modelsKey[idx]] || ''
      if (model) return model
      console.warn('vuepress-plugin-girls-frontline: 没有找到模型!')
    },
  },
}
</script>
