<template>
  <section class="albums__container">
    <div v-for="album in albumArray" class="albums__box">
      <div
        class="bandCamp"
        :data-embed="album.embedLink"
        :data-photoLink="album.photoLink"
      >
      <div class="click">
        <p>
          {{ album.title }}
        </p>
        <p>
          {{ album.releaseDate }}
        </p>
        <p>Click to Load</p>

      </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      albumArray: this.$store.state.albums
    }
  },
  mounted () {
    var bandCamp = document.querySelectorAll('.bandCamp')
    for (var i = 0; i < bandCamp.length; i++) {
      var source = bandCamp[i].dataset.photolink
      var image = new Image()
      image.src = source
      image.addEventListener('load', (() => {
        bandCamp[i].appendChild(image)
      })(i))

      bandCamp[i].addEventListener('click', function () {
        var iframe = document.createElement('iframe')
        this.setAttribute('style', 'padding-top: 100%')
        iframe.setAttribute('seamless', '')
        iframe.setAttribute('style', 'border: 0;')
        iframe.setAttribute('src', this.dataset.embed)
        this.innerHTML = ''
        this.appendChild(iframe)
      })
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
      @media screen and (max-width: 775px)
        grid-template-columns: 1fr 1fr
      @media screen and (max-width: 675px)
        padding-top: 40px

    &__box
      height: auto
      grid-column-end: span 2
      .bandCamp
        position: relative
        overflow: hidden
        cursor: pointer
        width: 100%
        height: 100%
        img
          width: 100%
          top: 0
          left: 0

        iframe
          position: absolute
          height: 100%
          width: 100%
          top: 0
          left: 0
          overflow: hidden
        .click
          position: absolute
          z-index: 3
          background-color: #f3f3f3
          padding: 25px
          color: black
          top: 50%
          left: 50%
          transform: translate3d( -50%, -50%, 0 )
          opacity: .95
          p
            font-family: 'Montserrat'
            font-size: 12px
            font-weight: 800
            white-space: nowrap
          p + p
            font-weight: 400
            margin-top: 7.5px


</style>
