<template>
  <section class="event-grid">
    <div class="event-grid__top-container">

    </div>
    <div class="event-grid__outer-container">
      <div v-for="event in events" class="event-grid__show-column">

      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment'

export default {
  data () {
    return {
      dateFormat: (date) => {
        return moment(date).format('MM.DD.YYYY')
      },
      dateNotYear: (date) => {
        return moment(date).format('MM.DD')
      },
      dateOnlyYear: (date) => {
        return moment(date).format('YYYY')
      }
    }
  },
  props: [
    'events'
  ]
}
</script>

<style lang="sass">
  .event-grid
    &__outer-container
      width: 100%
      height: 100vh
      position: absolute
      top: 100%
      left: 0
      background-color: lighten(gold, 25%)
      display: flex
      flex-direction: row
      justify-content: space-between
    &__top-container
      width: 100%
      height: 100vh
      position: absolute
      top: 0
      left: 0
      background-color: lighten(grey, 40%)
    &__show-column
      @media screen and (min-width: 1200px)
        width: 20%
        background-color: white
        height: 50vh


</style>
