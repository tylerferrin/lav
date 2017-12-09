<template>
  <section class="nav">
      <nuxt-link to="/">
        <h1
          class="nav__title"
          v-bind:class="{
            'nav__title-down': isAnimated,
            'nav__title-static': !isAnimated
          }"
          v-on:click="positionNav()">
          Like a Villain
        </h1>
      </nuxt-link>
      <nuxt-link to="/">
        <h1
          class="nav__title-left"
          v-bind:class="{
            'nav__title-right': isAnimated,
          }"
          v-on:click="positionNav()">
          Like a Villain
        </h1>
      </nuxt-link>

  <div class="nav__page-width">
    <div class="nav__header-container">
      <ul
        class="nav__nav"
        v-bind:class="{
          'nav__nav-static': !isAnimated,
          'nav__nav-hiding': isAnimated
        }"
        >
        <li v-on:click="positionNav('left')"><nuxt-link to="/events">Events</nuxt-link></li>
        <li v-on:click="positionNav('left')"><nuxt-link to="/music" >Music</nuxt-link></li>
        <li v-on:click="positionNav('left')"><nuxt-link to="/videos" >Videos</nuxt-link></li>
        <li v-on:click="positionNav('left')"><nuxt-link to="/collaborative-work" >Collaboritive Work</nuxt-link></li>
        <li v-on:click="positionNav('left')"><nuxt-link to="#" >Biography</nuxt-link></li>
        <li v-on:click="positionNav('left')"><nuxt-link to="#" >Contact</nuxt-link></li>
      </ul>


      <div
        class="down-arrow"
        v-bind:class="{
          'showing': isAnimated
        }"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.13 22.27">
          <defs>
            <style>
              .cls-1{fill:#000;}
            </style>
          </defs>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <polygon class="cls-1" points="21.57 22.27 0 0.71 0.71 0 21.57 20.86 42.43 0 43.13 0.71 21.57 22.27"/>
            </g>
          </g>
        </svg>
      </div>

    </div>
  </div>
  <ul
  class="nav__side"
  v-bind:class="{
    'nav__side-showing': isAnimated
    }"
    >
    <li v-on:click="positionNav('left')"><nuxt-link to="/events">Events</nuxt-link></li>
    <li v-on:click="positionNav('left')"><nuxt-link to="/music" >Music</nuxt-link></li>
    <li v-on:click="positionNav('left')"><nuxt-link to="/videos" >Videos</nuxt-link></li>
    <li v-on:click="positionNav('left')"><nuxt-link to="/collaborative-work" >Collaboritive Work</nuxt-link></li>
    <li v-on:click="positionNav('left')"><nuxt-link to="#" >Biography</nuxt-link></li>
    <li v-on:click="positionNav('left')"><nuxt-link to="#" >Contact</nuxt-link></li>
  </ul>


  </section>
</template>

<script>
export default {
  data () {
    return {
      isAnimated: false
    }
  },
  methods: {
    makeLeft () {
      this.isAnimated = true
    },
    makeStatic () {
      this.isAnimated = false
    },
    positionNav (position) {
      position ? this.makeLeft() : this.makeStatic()
    }
  }
}
</script>

<style lang="sass">
  .nav
    position: absolute
    left: 0
    top: 0
    width: 100vw
    height: 100vh
    &__page-width
      max-width: 1000px
      margin: 0 auto
      height: 100vh
      width: 100%
      position: relative
      overflow-y: hidden
    &__header-container
      position: absolute
      bottom: 0
      left: 0
      width: 100%
      height: 100vh
      .down-arrow
        position: absolute
        bottom: -35px
        left: 50%
        transform-origin: center
        transform: translate(-50%, 0%)
        width: 5%
        transition: all .35s ease-in-out
      .showing
        transition: bottom .75s ease-in-out .45s
        bottom: 45px
        svg
          position: relative
          top: 0
          left: 0
          animation: bounce 2s infinite ease-in-out
          animation-delay: .5s
    &__title
      color: black
      font-family: 'Montserrat'
      z-index: 1
      position: absolute
      transition: all .75s ease-in-out
      text-align: center
      font-weight: 200
      font-size: 3em
      text-transform: uppercase
      &:hover
        cursor: pointer
      &-static
        left: 50%
        bottom: 15%
        width: 100%
        transform: translate(-50%, 0)
        display: block
        letter-spacing: 5px
        transition: all .75s ease-in-out
      &-down
        position: fixed
        bottom: -15%
        left: 50%
        display: block
        width: 100vh
        transform: translate(-50%, 100%)
      &-left
        color: black
        display: block
        position: fixed
        top: 0
        left: -52px
        width: 100vh
        transform-origin: top left
        transform: rotate(90deg)
        text-align: center
        transition: all .35s ease-in
        text-align: center
        font-family: 'Montserrat'
        font-weight: 200
        font-size: 3em
        text-transform: uppercase
      &-right
        color: black
        display: block
        position: fixed
        top: 0
        left: 102px
        width: 100vh
        transform-origin: top left
        transform: rotate(90deg)
        text-align: center
        transition: all .75s ease-in-out .45s
        text-align: center
        font-family: 'Montserrat'
        font-weight: 200
        font-size: 3em
        text-transform: uppercase
    &__nav
      position: absolute
      bottom: 50px
      width: 100%
      display: flex
      flex-direction: row
      justify-content: center
      margin: 0
      padding: 0
      transition: all .75s ease-in-out
      &-static
      &-hiding
        transform: translate(0%, 200px)
      li
        display: inline-block
        padding: 0 15px
        a
          font-size: 1.15em
          font-family: 'Montserrat'
          color: black
          text-decoration: none
          letter-spacing: 2px
          font-weight: 400
          text-transform: uppercase
    &__side
      position: absolute
      display: block
      transform-origin: right
      transform: rotate(-90deg)
      z-index: 1
      padding: 0
      top: 0
      right: -52px
      width: 100vh
      display: flex
      flex-direction: row
      justify-content: center
      transition: all .75s ease-in-out
      li
        display: inline-block
        padding: 0 15px
        a
          font-size: 12px
          color: black
          text-decoration: none
          text-transform: uppercase
    &__side-showing
      transition: all .75s ease-in-out .45s
      right: 52px


  @keyframes bounce
    0%, 100%
      transform: translateY(0)
    50%
      transform: translateY(25px)

</style>
