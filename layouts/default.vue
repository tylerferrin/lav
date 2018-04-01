
<template>
  <div>
    <MyNav :isAnimated="isAnimated" v-if="!isMobile" />
    <MobileNav v-if="isMobile" />
    <div class="page-width">
      <nuxt />
    </div>
  </div>
</template>
<script>
import MyNav from '~/components/MyNav.vue'
import MobileNav from '~/components/MobileNav.vue'

export default {
  components: {
    MyNav,
    MobileNav
  },

  data () {
    return {
      isAnimated: null,
      isMobile: false,
      screenWatcher: () => {
        if (window.innerWidth < 675) {
          this.isMobile = this.setMobile()
        } else {
          this.isMobile = !this.setMobile()
        }
      },
      setMobile: () => {
        return true
      }
    }
  },

  watch: {
    '$route' (to, from) {
      window.addEventListener('resize', this.screenWatcher)

      if (to.name !== 'index') {
        this.isAnimated = true
      } else {
        this.isAnimated = false
      }
    }
  },

  created () {
    if (this.$route.name === 'index') {
      this.isAnimated = false
    } else {
      this.isAnimated = true
    }
  },

  mounted () {
    window.addEventListener('resize', this.screenWatcher)
    this.screenWatcher()
  }

}
</script>

<style lang="sass">

html
  font-family: "Open Sans", sans-serif
  font-size: 14px
  word-spacing: 1px
  letter-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box

h1,h2,h3,h4,h5,h6
  font-family: "Montserrat", serif
  letter-spacing: 5px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased

*, *:before, *:after
  box-sizing: border-box
  margin: 0

.page-width
  width: 100%
  padding: 0 30px


</style>
