<template>
  <div>
    <MyNav />
    <nuxt />
  </div>
</template>
<script>

import MyNav from '~/components/MyNav.vue'

export default {
  components: {
    MyNav
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
  font-family: "Montserrat" !important
  letter-spacing: 5px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased

*, *:before, *:after
  box-sizing: border-box
  margin: 0




</style>
