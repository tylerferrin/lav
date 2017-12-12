<template>
  <section class="content-grid">
    <ul class="quick-nav">
      <li v-on:click="quickScroll(index)" v-for="(content, index) in contentArray">0{{ index + 1 }}</li>
    </ul>
    <h1 class="page-title"> {{ title }} </h1>

    <div class="content-grid__outer-container">

      <!-- CONTENT THAT WORKS IN A GRID -->
      <template v-if="content === 'music' || content === 'video' || content === 'collab' ">
        <div v-for="(content, index) in contentArray" class="content-grid__column">
          <h1 class="counter"> 0{{ index + 1 }}</h1>
          <p class="content-title">{{ content.title }}</p>

          <!-- IF CONTENT IS VIDEO - DISPLAY YOUTUBE VIDEO IFRAME -->
          <template v-if="content.id === 'video' ">
            <iframe width="200%" height="315" :src="content.videoUrl" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
          </template>

          <!-- IF CONTENT IS MUSIC - DISPLAY BANDCAMP MUSIC IFRAME -->
          <template v-if="content.id === 'music' ">
            <iframe></iframe>
          </template>

          <!-- IF CONTENT IS COLLAB - DISPLAY COLLAB CONTENT -->
          <template v-if="content.id === 'collab' ">
            <iframe></iframe>
          </template>

        </div>
      </template>
      <!-- Create ghost divs to keep the grid layout looking clean -->
      <div v-for="ghost in ghostVids" class="content-grid__column"></div>

      <!-- CONTENT THAT WORKS IN A OPEN GRID FORMAT ... BIO || SHOWLiST || CONTACT -->



    </div>

  </section>
</template>

<script>
  export default {
    data () {
      return {
        ghostVids: 1,
        quickScroll (index) {
          console.log(index)
        },
        content: this.contentArray[0].id
      }
    },
    props: [
      'contentArray',
      'title'
    ]
  }
</script>
<style lang="sass">
  .content-grid
    margin-top: 100vh
    padding-bottom: 200px
    background-color: lighten(grey, 45%)
    .quick-nav
      position: absolute
      top: 25px
      left: 61px
      display: block
      padding: 0
      margin: 0
      z-index: 6
      &:hover
        cursor: pointer
      li
        display: inline-block
        padding-right: 25px
        font-size: 1.5em
        font-family: 'Montserrat'
        font-weight: 900

    .page-title
      font-size: 5rem
      margin: 0 auto
      text-transform: uppercase
      position: fixed
      bottom: 25px
      left: 61px
      // @media screen and (max-width: 1302px)

    &__outer-container
      padding: 0 102px
      padding-top: 50vh
      display: flex
      flex-direction: row
      justify-content: space-around
      width: 100%
    &__column
      width: 22.5%
      height: 75vh
      &:first-child
        margin-top: 85vh
      &:nth-child(3)
        margin-top: 170vh
      .counter
        font-size: 2.9rem
        margin-top: 50px
      .content-title
        font-family: 'Montserrat'
        font-weight: 500
        font-size: 1.9em
        letter-spacing: 4px
        text-transform: uppercase
        margin: 10px 0 20px


</style>
