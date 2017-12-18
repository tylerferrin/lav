<template>
  <section class="content-grid">

    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-bind:css="false"
      appear
      mode="out-in"
    >
      <ul class="quick-nav slide-left-leave">
        <li v-on:click="quickScroll(index)" v-for="(content, index) in contentArray">0{{ index + 1 }}</li>
      </ul>
    </transition>
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-bind:css="false"
      appear
      mode="out-in"
      >
      <h1 class="page-title slide-left-leave"> {{ title }} </h1>
    </transition>
    <div class="content-grid__outer-container">
      <!-- CONTENT THAT WORKS IN A GRID -->
      <template v-if="contentId === 'album' || contentId === 'video' || contentId === 'collab' ">
        <div v-for="(content, index) in contentArray" class="content-grid__column">
          <h1 class="counter"> 0{{ index + 1 }}</h1>
          <p class="content-title">{{ content.title }}</p>

          <!-- IF CONTENT IS VIDEO - DISPLAY YOUTUBE VIDEO IFRAME -->
          <MediaFrame :content='content' />

        </div>
      </template>
      <!-- Create ghost divs to keep the grid layout looking clean -->
      <div v-for="ghost in ghostVids" class="content-grid__column ghost"></div>

      <!-- CONTENT THAT WORKS IN A OPEN GRID FORMAT ... BIO || SHOWLiST || CONTACT -->

    </div>
  </section>
</template>

<script>
import MediaFrame from '~/components/MediaFrame'
import TweenLite from 'gsap'

export default {
  components: {
    MediaFrame
  },
  props: [
    'contentArray',
    'title',
    'isLeaving'
  ],
  data () {
    return {
      ghostVids: 1,
      quickScroll (index) {
        console.log(index, this)
      },
      contentId: (this.contentArray.length && this.contentArray[0].id) || '',
      beforeEnter (el) {
        el.style.transform = 'translateX(-200%)'
      },
      enter (el, done) {
        TweenLite.to(el, 0.75, { transform: 'translateX(200%)', opacity: 1, delay: 0.45 }, 'ease-in')
      },
      leave () {
        TweenLite.to('.slide-left-leave', 0.65, { transform: 'matrix(1, 0, 0, 1, -650, 0)', opacity: 0 }, 'ease-out')
      }
    }
  },
  watch: {
    'isLeaving' () {
      this.leave()
    }
  }
}
</script>
<style lang="sass">
.content-grid
  margin-top: 100vh
  padding-bottom: 200px
  background-color: lighten(grey, 45%)
  .quick-nav
    position: absolute
    top: 25px
    left: 61px
    display: block
    padding: 0
    margin: 0
    z-index: 6
    opacity: 0
    &:hover
      cursor: pointer
    li
      display: inline-block
      padding-right: 25px
      font-size: 1.5em
      font-family: 'Montserrat'
      font-weight: 900
  .page-title
   font-size: 5rem
   margin: 0 auto
   text-transform: uppercase
   position: fixed
   bottom: 25px
   left: 61px
   opacity: 0

  &__outer-container
    padding: 0 102px
    padding-top: 30vh
    display: flex
    flex-direction: row
    justify-content: space-around
    width: 100%
  &__column
    width: 22.5%
    height: 75vh
    &:first-child
      margin-top: 85vh
    &:nth-child(3)
      margin-top: 170vh
    .counter
      font-size: 2.9rem
      margin-top: 50px
    .content-title
      font-family: 'Montserrat'
      font-weight: 500
      font-size: 1.9em
      letter-spacing: 4px
      text-transform: uppercase
      margin: 10px 0 20px
      width: 300px




</style>
