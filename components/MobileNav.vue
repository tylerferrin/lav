<template>
  <section>
    <div class="mobile-nav__container">
      <div class="click-wrapper" v-on:click="scrollUpToMenu">
        <nuxt-link to="/" disable class="mobile-nav__route-to">
          <h1 class="mobile-nav__title">
            Holland Andrews
          </h1>
        </nuxt-link>
      </div>

      <Burger
        :isScrolled="isScrolled"
        :scrollUpToMenu="scrollUpToMenu" />
    </div>

    <ul class="route-list">
      <li><nuxt-link to="/events" >Events</nuxt-link></li>
      <li><nuxt-link to="/music" >Music</nuxt-link></li>
      <li><nuxt-link to="/video" >Video</nuxt-link></li>
      <li><nuxt-link to="/works" >Works</nuxt-link></li>
      <li><nuxt-link to="/biography" >Biography</nuxt-link></li>
      <li><nuxt-link to="/contact" >Contact</nuxt-link></li>
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

      scrollPosition: null,

      toggleArrowVisibility: () => {
        let scrollPosition = window.scrollY
        if (scrollPosition > 400) {
          this.isScrolled = true
        } else {
          this.isScrolled = false
        }
      },

      scrollUpToMenu: () => {
        scroller.scrollTo('.mobile-nav__container', {
          duration: 300,
          easing: 'ease-in-out',
          offset: 0
        })
      },

      scrollDown: (element) => {
        setTimeout(() => {
          scroller.scrollTo(element, {
            duration: 700,
            easing: 'ease-in-out',
            offset: -75
          })
        }, 150)
      }
    }
  },

  created () {
    window.addEventListener('scroll', this.toggleArrowVisibility)
    if (window.scrollY > 0) {
      this.isScrolled = true
    }
  },

  watch: {
    '$route' (to, from) {
      if (to.name === 'index') {
        this.scrollUpToMenu()
      } else {
        setTimeout(() => {
          this.scrollDown('.content-grid__outer-container')
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
      letter-spacing: 2px
      transition: all .55s ease-in-out
      @media screen and (max-width: 400px)
        font-size: 1.55em

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
        @media screen and (max-width: 400px)
          font-size: 1.5em



</style>
