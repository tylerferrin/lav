<template>
  <section>

    <div v-if="content.id === 'video' " class="youtube" :data-embed="content.videoUrl">
      <!-- Copy & Pasted from YouTube -->
      <!-- <iframe width="560" height="349" :src="content.videoUrl" frameborder="0" allowfullscreen></iframe> -->
      <div class="play-button"></div>
    </div>

    <!-- IF CONTENT IS MUSIC - DISPLAY BANDCAMP MUSIC IFRAME -->
      <iframe v-if="content.id === 'album' " style="border: 0; width: 350px; height: 350px;" :src="content.embedLink"></iframe>

    <!-- IF CONTENT IS COLLAB - DISPLAY COLLAB CONTENT -->
    <iframe v-if="content.id === 'collab' " ></iframe>

  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: [
    'content'
  ],
  mounted () {
    var youtube = document.querySelectorAll('.youtube')
    for (var i = 0; i < youtube.length; i++) {
      var source = 'https://img.youtube.com/vi/' + youtube[i].dataset.embed + '/maxresdefault.jpg'
      var image = new Image()
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
  .youtube
    background-color: #000
    margin-bottom: 30px
    position: relative
    padding-top: 56.25%
    overflow: hidden
    cursor: pointer
    min-width: 240%
    min-height: 27vw
    max-width: 560px
    max-height: 349px

  .youtube img
    width: 100%
    height: auto
    top: 50%
    left: 0
    transform: translateY(-50%)
    opacity: 0.7

  .youtube .play-button
    width: 90px
    height: 60px
    background-color: transparent
    box-shadow: none
    z-index: 1
    opacity: 0.8
    border-radius: 6px

  .youtube .play-button:before
    content: ""
    border-style: solid
    border-width: 35px 0 35px 57.0px
    border-color: transparent transparent transparent rgba(255,255,255,1)

  .youtube img,
  .youtube .play-button
    cursor: pointer

  .youtube img,
  .youtube iframe,
  .youtube .play-button,
  .youtube .play-button:before
    position: absolute

  .youtube .play-button,
  .youtube .play-button:before
    top: 50%
    left: 50%
    transform: translate3d( -50%, -50%, 0 )

  .youtube iframe
    height: 100%
    width: 100%
    top: 0
    left: 0


</style>
