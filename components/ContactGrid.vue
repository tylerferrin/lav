<template>
  <section class="contact__container">
    <div class="contact__booking info">
      <p>Booking</p>
      <a
        href='mailto:${contacts.booking}'
        target="_blank">
        {{ contacts.booking }}
      </a>
    </div>
    <!-- <div class="contact__clear"></div> -->
    <div class="contact__general info">
      <p>General Inquiries</p>
      <a
        href='mailto:${contacts.general}'
        target="_blank">
        {{ contacts.general }}
      </a>
    </div>

    <div class="contact__social info">
      <ul>
        <li>
          <a
            :href="contacts.instagram"
            target="_blank">
            Instagram
          </a>
        </li>
        <li>
          <a
            :href="contacts.twitter"
            target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a
            :href="contacts.facebook"
            target="_blank">
            Facebook
          </a>
        </li>
      </ul>
    </div>

  </section>
</template>

<script>
export default {
  data () {
    return {
      contacts: this.$store.state.contacts[0]
    }
  }
}
</script>

<style lang="sass">
  .contact
    &__container
      filter: grayscale(100%)
      display: grid
      grid-gap: 1px
      grid-template-columns: 25% 25% 25% 25%
      grid-template-rows: 175px 175px 175px
      background-image: url('~/assets/lav-wide.jpeg')
      background-size: cover
      background-position: center
      background-repeat: no-repeat
      @media screen and (max-width: 1200px)
        grid-template-columns: 33.333% 33.333% 33.333%
    &__booking
      grid-column-start: 1
      @media screen and (max-width: 900px)
        grid-column-start: 2
        grid-column-end: 4
        grid-row-start: 2
      @media screen and (max-width: 775px)
        grid-row-start: 3
        grid-column-start: 1
        grid-column-end: 4
    &__general
      grid-column-start: 3
      grid-column-end: 3
      @media screen and (max-width: 1200px)
        grid-column-start: 3
        grid-row-start: 2
      @media screen and (max-width: 900px)
        grid-column-start: 1
        grid-column-end: 3
        grid-row-start: 3
      @media screen and (max-width: 775px)
        grid-row-start: 1
        grid-column-start: 2
        grid-column-end: 4
    &__social
      grid-row-start: 2
      grid-column-start: 4
      @media screen and (max-width: 1200px)
        grid-row-start: 3
        grid-column-start: 2
      @media screen and (max-width: 900px)
        grid-row-start: 2
        grid-column-start: 3
    &__social.info
      ul
        position: relative
        top: 15%
        padding-left: 0
        li
          list-style: none
          a
            display: block
            position: relative
            padding: 7.5px 0
            font-size: 12px
            text-transform: uppercase


  .info
    position: relative
    background-color: lighten(grey, 45%)
    padding: 15px
    font-family: 'Montserrat'
    @media screen and (max-width: 775px)
      padding: 7.5px
    p
      font-size: 12px
      text-transform: uppercase
      position: absolute
      top: 25%
      @media screen and (max-width: 775px)
        top: 20%
    a
      text-decoration: none
      font-size: 10px
      position: absolute
      top: 40%
      @media screen and (max-width: 775px)
        top: 45%
        font-size: 8px


</style>
