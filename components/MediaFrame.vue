<template>
  <section>
    <iframe v-if="content.id === 'video' " width="1000px" height="375px" :src="content.videoUrl" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

    <!-- IF CONTENT IS MUSIC - DISPLAY BANDCAMP MUSIC IFRAME -->
      <iframe v-if="content.id === 'album' " style="border: 0; width: 350px; height: 350px;" :src="content.embedLink"></iframe>

    <!-- IF CONTENT IS COLLAB - DISPLAY COLLAB CONTENT -->
    <iframe v-if="content.id === 'collab' " ></iframe>

  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: [
    'content'
  ]
}
</script>
<style lang="sass">
</style>
