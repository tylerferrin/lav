<template>
  <section class="albums__container">
    <div v-for="album in albumArray" class="albums__box">
      <iframe style="border: 0; width: 100%; height: 100%; seamless" :src="album.embedLink"></iframe>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      albumArray: this.$store.state.albums
    }
  }
}
</script>
<style lang="sass">
  .albums
    &__container
      display: grid
      grid-gap: 40px
      grid-template-columns: 1fr 1fr 1fr 1fr
      grid-template-rows: auto-fill
      min-height: 100%
      @media screen and (max-width: 675px)
        grid-template-columns: 1fr 1fr
        padding-top: 40px

    &__box
      position: relative
      padding-bottom: 100%
      grid-column-end: span 2
      iframe
        position: absolute
        top: 0
        left: 0
        overflow: hidden
      p
        position: absolute
        top: -25px
</style>
