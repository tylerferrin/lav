<template>
  <section class="video__container">

    <div v-for="(video, index) in videoArray" class="video__row" >
      <div
        class="youtube"
        :data-embed="video.videoUrl">
      <!-- Copy & Pasted from YouTube -->
      <!-- <iframe width="560" height="349" :src="content.videoUrl" frameborder="0" allowfullscreen></iframe> -->
        <div class="title">{{ video.title }}</div>
      </div>

    </div>

    <!-- IF CONTENT IS COLLAB - DISPLAY COLLAB CONTENT -->
    <!-- <iframe v-if="content.id === 'collab' " ></iframe> -->

  </section>
</template>

<script>
export default {
  data () {
    return {
      videoArray: this.$store.state.videos
    }
  },
  props: [

  ],
  mounted () {
    var youtube = document.querySelectorAll('.youtube')
    for (var i = 0; i < youtube.length; i++) {
      var image = new Image()
      var source = 'https://img.youtube.com/vi/' + youtube[i].dataset.embed + '/maxresdefault.jpg'
      image.src = source
      image.addEventListener('load', (function () {
        youtube[ i ].appendChild(image)
      }(i)))

      youtube[i].addEventListener('click', function () {
        var iframe = document.createElement('iframe')
        iframe.setAttribute('frameborder', '0')
        iframe.setAttribute('allowfullscreen', '')
        iframe.setAttribute('src', 'https://www.youtube.com/embed/' + this.dataset.embed + '?rel=0&showinfo=0&autoplay=1')
        this.innerHTML = ''
        this.appendChild(iframe)
      })
    }
  }
}
</script>
<style lang="sass">
  // CONTAINER GRID STYLES
  .video
    &__container

      display: grid
      grid-row-gap: 30px
      grid-template-columns: 1fr 1fr 1fr 1fr
      grid-template-rows: auto
      @media screen and (max-width: 675px)
        padding-top: 40px
    &__row
      height: auto
      grid-column-start: 1
      grid-column-end: 5



  // YOUTUBE FRAME AND BUTTON STYLING
  .youtube
    background-color: #000
    margin-bottom: 30px
    position: relative
    padding-top: 56.25%
    overflow: hidden
    cursor: pointer
    width: 100%

  .youtube img
    width: 100%
    top: 0
    left: 0
    opacity: 0.7

  .youtube .title
    font-family: 'Montserrat'
    font-weight: 700
    font-size: 4em
    letter-spacing: 4px
    color: white
    text-align: center
    text-transform: uppercase
    background-color: transparent
    box-shadow: none
    z-index: 1
    @media screen and (max-width: 900px)
      font-size: 3em
    @media screen and (max-width: 700px)
      font-size: 2em
    @media screen and (max-width: 500px)
      font-size: 1.5em

  .youtube .title:before


  .youtube img,
  .youtube .title
    cursor: pointer

  .youtube img,
  .youtube iframe,
  .youtube .title,
  .youtube .title:before
    position: absolute

  .youtube .title,
  .youtube .title:before
    top: 50%
    left: 50%
    transform: translate3d( -50%, -50%, 0 )

  .youtube iframe
    height: 100%
    width: 100%
    top: 0
    left: 0



</style>
