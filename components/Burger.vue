<template>
  <button v-on:click="openMenuClick" class="burger-container">
    <div class="burger-container__bar"
      v-bind:class="{openTop: isClicked}"></div>
    <div class="burger-container__bar"
      v-bind:class="{openMid: isClicked}"></div>
    <div class="burger-container__bar"
      v-bind:class="{openBot: isClicked}"></div>
  </button>
</template>

<script>
export default {
  props: [
    'isClicked',
    'openMenuClick'
  ]
}
</script>

<style lang="sass">
  .burger-container
    position: absolute
    top: 0
    right: 0
    margin: 22.5px 25px 0 0
    display: inline-flex
    flex-direction: column
    justify-content: space-between
    align-items: center
    height: 20px
    border: none
    background-color: transparent
    &:hover
      cursor: pointer
      outline: none
    &:focus
      outline: none

    &__bar
      height: 1px
      width: 25px
      background-color: black
      transition: all .25s ease-out

  // burger animations
  .openTop
    transform: translate(-75%, 0)
  .openMid
    transform: translate(-50%, 0)
  .openBot
    transform: translate(-25%, 0)



</style>
