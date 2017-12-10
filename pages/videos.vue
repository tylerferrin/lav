<template>
  <section class=video-page>
    <VideoGrid :videos="videos" />
  </section>
</template>

<script>
import VideoGrid from '~/components/VideoGrid'
export default {
  data () {
    return {
      videos: this.$store.state.videos
    }
  },
  components: {
    VideoGrid
  }
}
</script>

<style lang="sass">
  .video-page
    width: 100%
    margin: 0
    margin-top: 100vh
</style>
