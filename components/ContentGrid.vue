<template>
    <section class="content-grid">
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-bind:css="false"
        appear
        mode="out-in" >

        <h1 class="page-title slide-left-leave">
          {{ title }}
        </h1>

      </transition>

      <div class="content-grid__outer-container">

        <!-- EVENTS -->
        <div v-if="contentId === 'event' " class="event-container">
          <div v-for="event in contentArray" class="event-item">
            <EventRow :event='event' />
          </div>
        </div>

        <!-- MUSIC-->
        <AlbumFrame v-if="contentId === 'album'" />

        <!-- VIDEO-->
        <VideoFrame v-if="contentId === 'video'" />

        <!-- WORKS -->
        <WorksGrid v-if="contentId === 'collaborativeWork'" />

        <!-- BIO -->
        <BioGrid v-if="contentId === 'bio'" />

        <!-- CONTACT -->
        <ContactGrid v-if="contentId === 'contact'" />

      </div>
    </section>
</template>

<script>
import EventRow from '~/components/EventRow'
import AlbumFrame from '~/components/AlbumFrame'
import VideoFrame from '~/components/VideoFrame'
import WorksGrid from '~/components/WorksGrid'
import BioGrid from '~/components/BioGrid'
import ContactGrid from '~/components/ContactGrid'
import TweenLite from 'gsap'

export default {
  components: {
    EventRow,
    AlbumFrame,
    VideoFrame,
    WorksGrid,
    BioGrid,
    ContactGrid
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
        TweenLite.to(el, 0.7, { transform: 'translateX(200%)', opacity: 1 }, 'ease-in-out')
      },
      leave () {
        TweenLite.to('.slide-left-leave', 0.65, { transform: 'matrix(1, 0, 0, 1, -650, 0)', opacity: 0 }, 'ease-in')
        TweenLite.to('.content-grid', 0.45, { opacity: 0 }, 'ease-out')
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
.leaving
  opacity: 1
.hasLeft
  opacity: 0
.content-grid
  margin-top: 100vh
  padding-bottom: 50vh
  max-height: 100%
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
    font-size: 3rem
    margin: 0 auto
    text-transform: uppercase
    position: fixed
    bottom: 25px
    left: 56px
    opacity: 0
    z-index: 1
    transition: all .25s
    @media screen and (max-width: 1200px)
      font-size: 3rem
    @media screen and (max-width: 675px)
      font-size: 2rem
      left: 10px

  &__outer-container
    padding: 0 102px
    padding-top: 5vh
    display: flex
    flex-direction: column
    justify-content: center
    width: 100%
    @media screen and (max-width: 675px)
      padding: 0 25px

    .event-container
      @supports (display: grid)
        display: grid
        grid-gap: 30px
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))

      @supports not (display: grid)
        display: flex
        flex-direction: row
        justify-content: left
        flex-wrap: wrap
        @media screen and (min-width: 675px)
          justify-content: left
        .event-item
          display: inline-block
          margin-left: 50px
          width: 200px
          @media screen and (max-width: 540px)
            margin-left: 0
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
