<template>
  <button v-on:click="scrollUpToMenu" class="burger-container">
    <nuxt-link v-bind:class="{'showArrow': isScrolled}" to="/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.13 22.27">
        <polygon class="cls-1" points="21.57 22.27 0 0.71 0.71 0 21.57 20.86 42.43 0 43.13 0.71 21.57 22.27"/>
      </svg>
    </nuxt-link>
  </button>
</template>

<script>
export default {
  props: [
    'isScrolled',
    'scrollUpToMenu'
  ]
}
</script>

<style lang="sass">
  .burger-container
    position: absolute
    top: 0
    right: 0
    width: 68px
    margin: 25px 25px 0 0
    border: none
    background-color: transparent
    @media screen and (max-width: 400px)
      margin: 22px 7px 0 0
    &:hover
      cursor: pointer
      outline: none
    &:focus
      outline: none
    a
      opacity: 0
      transition: opacity .25s ease-in-out
      padding: 25px
      svg
        height: 14px
        transform: rotate(180deg)
        @media screen and (max-width: 400px)
          height: 12px

  .showArrow
    opacity: 1 !important

</style>
