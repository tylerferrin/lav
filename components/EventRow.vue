<template>
  <ul class="event-list">
    <li class="event-list__date">{{ dateFormat(event.dateAndTime) }}</li>
    <li class="event-list__venue">{{ event.venue }}</li>
    <li class="event-list__city">{{ event.cityStateCountry }}</li>
    <li class="event-list__social"
        v-if="event.socialEventLink">
      <a :href='event.socialEventLink'>RSVP</a>
    </li>
    <li class="event-list__tickets"
        v-if="event.buyTicketsLink">
      <a :href='event.buyTicketsLink'>TICKETS</a>
    </li>
  </ul>
</template>

<script>
import moment from 'moment'

export default {
  props: [
    'event'
  ],
  data () {
    return {
      dateFormat: (date) => {
        return moment(date).format('MMMM Do, YYYY')
      }
    }
  }
}
</script>

<style lang="sass">
  .event-list
    display: inline-flex
    flex-direction: column
    list-style-type: none
    margin: 40px 0
    padding: 0
    font-family: 'Montserrat'
    li
      margin: 2.5px 0
    &__date
      font-weight: bold
    &__social,
    &__tickets
      a
        color: black
        text-decoration: none
        transition: all .15s ease-in-out
        &:hover
          font-weight: bold

</style>
