<template>
  <div class="mobile-nav__container">
    <nuxt-link to="/" class="mobile-nav__route-to">
      <h1 class="mobile-nav__title">
        Like a Villain
      </h1>
    </nuxt-link>
    <Burger />
  </div>
</template>

<script>
import Burger from '~/components/Burger.vue'

export default {
  components: {
    Burger
  }
}
</script>

<style lang="sass">
  .mobile-nav
    &__container
      position: absolute
      top: 0
      left: 0
      padding: 15px 0 0 15px
      width: 100%
    &__route-to
      text-decoration: none
    &__title
      display: inline-block
      color: black
      font-family: 'Montserrat'
      font-weight: 200
      font-size: 2em
      text-transform: uppercase

</style>
