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
  data () {
    return {
      contentArray: this.$store.state.albums,
      title: 'Music'
    }
  },
  components: {
    ContentGrid
  },
  beforeMount () {
    console.log(this.contentArray)
  }
}
</script>

<style lang="sass">

</style>
