<template>
  <section class="content-grid">

    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-bind:css="false"
      appear
      mode="out-in" >
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
        <div v-for="(content, index) in contentArray" class="content-grid__row">
          <h1 class="counter"> 0{{ index + 1 }}</h1>

          <div class="title-and-description">

            <p class="content-title">{{ content.title }}</p>
            <p class="content-description"></p>

          </div>

          <!-- IF CONTENT IS VIDEO - DISPLAY YOUTUBE VIDEO IFRAME -->
          <MediaFrame :content='content' />

        </div>
      </template>
      <!-- Create ghost divs to keep the grid layout looking clean -->
      <div v-for="ghost in ghostVids" class="content-grid__column ghost"></div>

      <!-- CONTENT THAT WORKS IN A OPEN GRID FORMAT ... BIO || SHOWLiST || CONTACT -->

      <div v-if="contentId === 'event' " >
        <div v-for="event in contentArray">
          <EventRow :event='event' />
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import MediaFrame from '~/components/MediaFrame'
import EventRow from '~/components/EventRow'
import TweenLite from 'gsap'

export default {
  components: {
    MediaFrame,
    EventRow
  },
  props: [
    'contentArray',
    'title',
    'isLeaving'
  ],
  data () {
    return {
      ghostVids: 1,
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
   z-index: 1
   transition: all .25s
   @media screen and (max-width: 1200px)
     font-size: 3rem

  &__outer-container
    padding: 0 102px
    padding-top: 30vh
    display: flex
    flex-direction: column
    justify-content: center
    width: 100%
  &__row
    width: 100%
    height: 350px
    margin-bottom: 50px
    display: flex
    flex-direction: row
    justify-content: space-around
    .counter
      font-size: 2.9rem
    .title-and-description

      .content-title
        text-align: right
        font-family: 'Montserrat'
        font-weight: 500
        font-size: 1.9em
        letter-spacing: 4px
        text-transform: uppercase
        margin: 10px 0 20px
        width: 350px





</style>
