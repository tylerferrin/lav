<template>
  <section>
    <ContentGrid
      :contentArray="contentArray"
      :title="title"
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
      contentArray: this.$store.state.events,
      title: 'Events'
    }
  }
}
</script>

<style lang="sass">

</style>
