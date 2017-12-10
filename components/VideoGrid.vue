<template>
  <section class="video-grid">

    <h1 class="page-title">VIDEO</h1>

    <div class="video-grid__outer-container">

      <div v-for="(video, index) in videos" class="video-grid__show-column">
        <h1 class="counter"> 0{{ index + 1 }}</h1>
        <p class="video-title">{{ video.title }}</p>
        <iframe id="ytplayer" type="text/html" width="560" height="315" :src="video.videoUrl" frameborder="px" />
      </div>

      <div v-for="ghost in ghostVids" class="video-grid__show-column"></div>

    </div>

  </section>
</template>

<script>
  export default {
    data () {
      return {
        ghostVids: 1
      }
    },
    props: [
      'videos'
    ]
  }
</script>
<style lang="sass">
  .video-grid
    margin-top: 100vh
    background-color: lighten(grey, 45%)
    .page-title
      font-size: 5rem
      margin: 0 auto

      position: fixed
      bottom: 0
      left: 52px
      // @media screen and (max-width: 1302px)

    &__outer-container
      padding: 0 102px
      padding-top: 50vh
      display: flex
      flex-direction: row
      justify-content: space-around
      width: 100%
    &__show-column
      width: 22.5%
      // background-color: darken(red, 22.5%)
      height: 75vh
      &:first-child
        margin-top: 50vh
      &:nth-child(3)
        margin-top: 100vh
      .counter
        font-size: 3rem
      .video-title
        font-family: 'Montserrat'
        font-weight: 900
        font-size: 2em
        letter-spacing: 4px
        text-transform: uppercase


</style>
