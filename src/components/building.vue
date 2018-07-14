<template lang="pug">
  
  // building
  vs-card.building(:vs-color="building.color")
    vs-card-header(:vs-background-color="building.color", :vs-title="$t(building.name)", :vs-fill="true")
    vs-card-body.info
      img(:src="building.icon")
</template>

<script>
export default {
  name: 'building',
  props: ['building']
}
</script>

<style lang="stylus" scoped>
  .building
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
