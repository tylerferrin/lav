<template>
  <section class=video-page>
    <ContentGrid
    :contentArray="contentArray"
    :title="title"
    />
  </section>
</template>

<script>
import ContentGrid from '~/components/ContentGrid'

export default {
  data () {
    return {
      contentArray: this.$store.state.videos,
      title: 'Video'
    }
  },
  components: {
    ContentGrid
  }
}
</script>

<style lang="sass">
  .video-page
    width: 100%
    margin: 0
    margin-top: 100vh
</style>
