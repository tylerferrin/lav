<template>
  <section>
    <ContentGrid
    :contentArray="contentArray"
    :title="title"
    :isLeaving="isLeaving"
    />
  </section>
</template>

<script>
import ContentGrid from '~/components/ContentGrid'

export default {
  components: {
    ContentGrid
  },
  data () {
    return {
      contentArray: this.$store.state.works,
      title: 'Works',
      isLeaving: false
    }
  },
  beforeRouteLeave (to, from, next) {
    this.isLeaving = true
    setTimeout(() => {
      next()
    }, 750)
  }
}
</script>

<style lang="sass">
</style>
