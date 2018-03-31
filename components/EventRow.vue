<template>
  <ul class="event-row">
    <li>{{ event.dateAndTime }}</li>
    <li>{{ event.venue }}</li>
    <li>{{ event.cityStateCountry }}</li>
    <li v-if="event.socialEventLink">
      <a :href='event.socialEventLink'>RSVP</a>
    </li>
    <li v-if="event.buyTicketsLink">
      <a :href='event.buyTicketsLink'>Buy Tickets</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: [
    'event'
  ]
}
</script>

<style lang="sass">
  .event-row
    display: flex
    flex-direction: column
    list-style-type: none
    margin: 40px
    padding: 0


</style>
