<template>
  <section>

    <div v-if="content.id === 'video' " class="videoWrapper">
      <!-- Copy & Pasted from YouTube -->
      <iframe width="560" height="349" :src="content.videoUrl" frameborder="0" allowfullscreen></iframe>
    </div>

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
.videoWrapper
	position: relative
	padding-bottom: 56.25%
	padding-top: 25px
	height: 0
.videoWrapper iframe
	position: absolute
	top: 0
	left: 0
	width: 300%
	height: 300%

</style>
