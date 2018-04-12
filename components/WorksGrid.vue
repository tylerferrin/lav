<template>
  <section class="works__container">
    <div v-for="work in works" class="works__item">
      <div>
        <p class="title" :href="work.link" target="_blank">
          {{ work.title }}
        </a>
        <p class="description">{{ work.description }}</p>
        <a class="moreInfo" :href="work.link">More information</a>
      </div>

    </div>
  </section>
</template>
<script>

export default {
  data () {
    return {
      works: this.$store.state.works
    }
  }
}
</script>
<style lang="sass">
  .works
    &__container
      display: grid
      grid-gap: 50px
      grid-template-columns: 1fr 1fr 1fr 1fr
      @media screen and ( max-width: 900px)
        grid-gap: 25px
      @media screen and (max-width: 675px)
        padding-top: 40px
      @media screen and ( max-width: 600px)
        grid-template-columns: 1fr 1fr
    &__item
      height: 300px
      align-self: center
      grid-column-end: span 2
      border-left: 2px solid black
      border-bottom: 2px solid black
      padding: 25px 0 25px 25px

      div
        height: 100%
        position: relative

        p.title
          position: absolute
          top: 0
          left: 0
          font-family: "Montserrat"
          font-size: 1.5em
          font-weight: 600
          color: black
          text-transform: uppercase
          text-decoration: none

        p.description
          position: absolute
          top: 20%
          left: 0
          font-family: "Montserrat"

        a.moreInfo
          position: absolute
          bottom: 0
          left: 0
          font-family: "Montserrat"
          font-size: 1em
          font-weight: 400
          color: black
          text-transform: uppercase
          text-decoration: none
          &:hover
            text-decoration: line-through

</style>
