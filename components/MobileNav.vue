<template>
  <section>
    <div class="mobile-nav__container">
      <nuxt-link to="/" class="mobile-nav__route-to">
        <h1 class="mobile-nav__title">
          Like a Villain
        </h1>
      </nuxt-link>
      <Burger
        :isScrolled="isScrolled"
        :openMenuClick="openMenuClick" />
    </div>

    <ul class="route-list">
      <li v-on:click="scrollDown('.content-grid__outer-container')"><nuxt-link to="/events">Events</nuxt-link></li>
      <li v-on:click="scrollDown('.content-grid__outer-container')"><nuxt-link to="/music" >Music</nuxt-link></li>
      <li v-on:click="scrollDown('.content-grid__outer-container')"><nuxt-link to="/video" >Video</nuxt-link></li>
      <li v-on:click="scrollDown('.content-grid__outer-container')"><nuxt-link to="/works" >Works</nuxt-link></li>
      <li v-on:click="scrollDown('.content-grid__outer-container')"><nuxt-link to="/biography" >Biography</nuxt-link></li>
      <li v-on:click="scrollDown('.content-grid__outer-container')"><nuxt-link to="/contact" >Contact</nuxt-link></li>
    </ul>
  </section>
</template>

<script>
import Burger from '~/components/Burger.vue'
import scroller from 'vue-scrollto'

export default {
  components: {
    Burger
  },
  data () {
    return {
      isScrolled: false,
      openMenuClick: () => {
        scroller.scrollTo('.mobile-nav__container', {
          duration: 300,
          easing: 'linear',
          offset: -75
        })
        this.isScrolled = false
      },
      scrollDown: (element) => {
        setTimeout(() => {
          scroller.scrollTo(element, {
            duration: 700,
            easing: 'linear',
            offset: -75
          })
          this.isScrolled = true
        }, 150)
      }
    }
  }
}
</script>

<style lang="sass">
  .mobile-nav
    &__container
      position: fixed
      top: 0
      left: 0
      padding: 15px 0 0 29px
      width: 100%
      z-index: 2
    &__route-to
      text-decoration: none
    &__title
      display: inline-block
      color: black
      font-family: 'Montserrat'
      font-weight: 200
      font-size: 2em
      text-transform: uppercase

  .route-list
    position: absolute
    top: 0
    left: 0
    display: flex
    flex-direction: column
    justify-content: center
    align-items: left
    height: 100vh
    width: 100vw
    list-style: none
    padding-left: 29px
    li
      padding: 10px 0 10px 0
      a
        text-decoration: none
        color: black
        font-family: 'Montserrat'
        font-weight: 200
        font-size: 1.75em
        text-transform: uppercase



</style>
