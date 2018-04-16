<template>
  <section class="bio__container">
    <div class="photo">
      <img id="lavPhoto" src="~/assets/lav-bio-photo.jpeg" alt="Holland Andrews" />
    </div>
    <div id="col3" class="bio__col" v-bind:style="{ paddingTop: this.paddingHeight + 'px' }" ></div>
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
    }, 150)
  }
}
</script>
<style lang="sass">
  .bio
    &__container
      display: grid
      grid-gap: 25px
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr
      @media screen and (max-width: 1100px)
        grid-template-columns: 1fr 1fr 1fr 1fr
      @media screen and (max-width: 775px)
        grid-template-columns: 1fr
        grid-gap: 0px
        padding-top: 40px !important

      .photo
        grid-column-start: 1
        grid-column-end: 3
        @media screen and (max-width: 775px)
          grid-column-start: 1
          grid-column-end: 3
        img
          filter: grayscale(85%)
          height: auto
          width: 100%


    &__col
      grid-column-start: 4
      grid-column-end: span 2
      font-family: 'Montserrat'
      line-height: 1.5
      font-size: 12px
      p:first-child strong::after
        content: '\A'
        white-space: pre
        box-decoration-break: clone
      p + p
        margin-top: 15px
      strong
        font-size: 2em
      @media screen and (max-width: 1100px)
        grid-column-start: 3
      @media screen and (max-width: 775px)
        grid-column-start: 2
        grid-column-end: 3
        grid-column-end: span 1
        padding-top: 40px !important
        strong
          font-size: 1.75em



</style>
