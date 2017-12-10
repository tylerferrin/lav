<template>
  <section>
    <EventGrid :events="events" />
  </section>
</template>

<script>
import EventGrid from '~/components/EventGrid.vue'

export default {
  components: {
    EventGrid
  },
  data () {
    return {
      events: this.$store.state.events
    }
  }
}
</script>

<style lang="sass">

</style>
