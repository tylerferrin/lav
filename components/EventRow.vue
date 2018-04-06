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
    <li class="event-list__links">
      <a
        :href='event.socialEventLink'
        target="_blank"
        v-if="event.socialEventLink" >
          RSVP
      </a>
      <a
        :href='event.buyTicketsLink'
        target="_blank"
        v-if="event.buyTicketsLink" >
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
    height: 100%
    padding: 40px 0 60px
    margin: 0
    font-family: 'Montserrat'
    position: relative
    li
      margin: 2.5px 0
    &__date
      font-weight: bold
    &__links
      margin: 5px 0 !important
      position: absolute
      bottom: 0
      a
        display: block
        color: black
        text-decoration: none
        transition: all .15s ease-in-out
        letter-spacing: 2px
        &:hover
          font-weight: bold

        & + a
          margin-top: 10px


    &__other-performers
      font-size: 10px
      margin-bottom: 3px
      p
        margin-top: 3px
    &__description
      font-size: 10px
      margin: 10px 0 !important


</style>
