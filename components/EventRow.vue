<template>
  <ul class="event-list">
    <li class="event-list__date">{{ dateFormat(event.date) }}</li>
    <li class="event-list__venue">{{ event.venue }}</li>
    <li class="event-list__city">{{ event.cityStateCountry }}</li>
    <li class="event-list__other-performers" v-if="event.otherPerformers">
      Also Performing:
      <p v-for="performer in event.otherPerformers">
        - {{ performer }}
      </p>
    </li>
    <li class="event-list__description">{{ event.description }}</li>
    <li class="event-list__social"
        v-if="event.socialEventLink">
      <a :href='event.socialEventLink'
          target="_blank">
          RSVP
      </a>
    </li>
    <li class="event-list__tickets"
        v-if="event.buyTicketsLink">
      <a :href='event.buyTicketsLink'
          target="_blank">
          TICKETS
      </a>
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
      margin: 5px 0 !important
      a
        color: black
        text-decoration: none
        transition: all .15s ease-in-out
        letter-spacing: 2px
        &:hover
          font-weight: bold
    &__other-performers
      font-size: 12px
      margin-bottom: 3px
      p
        margin-top: 3px
    &__description
      font-size: 10px
      margin: 10px 0 !important


</style>
