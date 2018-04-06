<template>
  <section class="bio__container">
      <div class="bio__col">
        <img id="lavPhoto" src="~/assets/lav-bw-photo.png" alt="Holland Andrews">
      </div>
      <div class="bio__col-2"></div>
      <div
        id="col3"
        class="bio__col"
        v-bind:style="{ paddingTop: this.paddingHeight + 'px' }"></div>
  </section>
</template>
<script>
import marked from 'marked'

export default {
  data () {
    return {
      paddingHeight: 150,
      photoHeight: () => {
        return document.getElementById('lavPhoto').height
      },
      resetPaddingHeight: () => {
        this.paddingHeight = this.photoHeight() / 2
      }
    }
  },
  beforeCreate (context) {
    let bio = this.$store.state.bio[0].bio
    this.bio = bio
  },
  mounted () {
    // insert the bio into the column
    const col3 = document.getElementById('col3')
    col3.innerHTML = marked(this.bio)

    // add resize listener to trigger #col3 padding-top changes
    window.addEventListener('resize', this.resetPaddingHeight)
    setTimeout(() => {
      this.resetPaddingHeight()
    }, 50)
  }
}
</script>
<style lang="sass">
  .bio
    &__container
      // main grid styles

      display: grid
      grid-gap: 30px
      grid-template-columns: 1fr 1fr 1fr

      // grid media queries

      @media screen and (max-width: 1200px)
        grid-template-columns: 1fr 1fr
        .bio__col-2
          display: none
      @media screen and (max-width: 600px)
        grid-template-columns: 1fr
        #col3
          padding-top: 0 !important

      // styling of grid children

      .bio__col
        font-family: Montserrat, sans-serif
        font-size: 12px
        background-blend-mode: multiply
        // letter-spacing: 1px
        p:first-child
          strong
            font-size: 24px
            letter-spacing: 1.5px

        p + p
          margin-top: 15px

        img
          width: 100%
          height: auto
        @media screen and (max-width: 675px)
          padding-top: 40px

</style>
