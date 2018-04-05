<template>
  <ul class="event-row">
    <li class="event-row__date">{{ event.dateAndTime }}</li>
    <li class="event-row__venue">{{ event.venue }}</li>
    <li class="event-row__city">{{ event.cityStateCountry }}</li>
    <li class="event-row__social"
        v-if="event.socialEventLink">
      <a :href='event.socialEventLink'>RSVP</a>
    </li>
    <li class="event-row__tickets"
        v-if="event.buyTicketsLink">
      <a :href='event.buyTicketsLink'>TICKETS</a>
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
