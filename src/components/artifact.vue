<template lang="pug">
  vs-card.artifact(:vs-color="artifact.color")
    vs-card-header(:vs-background-color="artifact.color", :vs-title="$t(artifact.name)", :vs-fill="true")
    vs-card-body.info
      img(:src="artifact.icon")
</template>

<script>
export default {
  name: 'artifact',
  props: ['artifact']
}
</script>

<style lang="stylus" scoped>
  .artifact
    background-color rgba(0,0,0,0.85)
    // background-image url('https://spaceplace.nasa.gov/review/interstellar/cover.sp.png')
    background-repeat no-repeat
    background-size cover
    background-position center
    &:hover
      cursor pointer
    .info
      text-align center
      img
        height 150px
        width auto
</style>
