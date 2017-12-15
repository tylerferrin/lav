<template>
  <transition mode="out-in">
  <section>
    <ContentGrid
    :contentArray="contentArray"
    :title="title"
    :isLeaving="isLeaving"
    />
  </section>
  </transition>
</template>

<script>
import ContentGrid from '~/components/ContentGrid'

export default {
  components: {
    ContentGrid
  },
  data () {
    return {
      contentArray: this.$store.state.videos,
      title: 'Video',
      isLeaving: false
    }
  },
  beforeRouteLeave (to, from, next) {
    this.isLeaving = true
    setTimeout(() => {
      next()
    }, 350)
  }
}
</script>

<style lang="sass">
</style>
