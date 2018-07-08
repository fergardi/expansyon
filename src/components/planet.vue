<template lang="pug">
  vs-card.planet(:vs-color="color")
    vs-card-header(:vs-background-color="color", vs-title="Planeta", :vs-fill="true")
    vs-card-body.space
      .globe(v-tooltip="{ text: $t('ttp_planet_globe') }")
        img(:src="planet.icon")
      .orbit(v-if="planet.moon || planet.troop")
        .moon(v-tooltip="{ text: $t('ttp_planet_moon') }", v-show="planet.moon")
          img(src="https://image.flaticon.com/icons/svg/578/578324.svg")
        .troop(v-tooltip="{ text: $t('ttp_planet_troop') }", v-show="planet.troop")
          img(:src="planet.troop")
    vs-card-body.stats
      vs-progress(:vs-percent="planet.mana", vs-color="primary", v-tooltip="{ text: $t('ttp_resource_mana') }")
      vs-progress(:vs-percent="planet.gold", vs-color="warning", v-tooltip="{ text: $t('ttp_resource_gold') }")
      vs-progress(:vs-percent="planet.people", vs-color="dark", v-tooltip="{ text: $t('ttp_resource_people') }")
      vs-progress(:vs-percent="planet.size", vs-color="success", v-tooltip="{ text: $t('ttp_resource_terrain') }")
      vs-progress(:vs-percent="planet.influence", vs-color="danger", v-tooltip="{ text: $t('ttp_resource_influence') }")
</template>

<script>
export default {
  name: 'planet',
  props: ['planet'],
  methods: {
    name () {
      return this.str(6) + '_' + this.str(2) + '/' + this.str(2)
    },
    str (number) {
      return (Math.random() + 1).toString(36).substring(2, number + 2).toUpperCase()
    }
  },
  computed: {
    color () {
      switch (Math.max(this.planet.mana, this.planet.gold, this.planet.people, this.planet.size, this.planet.influence)) {
        case this.planet.mana:
          return 'primary'
        case this.planet.gold:
          return 'warning'
        case this.planet.people:
          return 'dark'
        case this.planet.size:
          return 'success'
        case this.planet.influence:
          return 'danger'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .planet
    background-color rgba(0,0,0,0.85)
    // background-image url('https://spaceplace.nasa.gov/review/interstellar/cover.sp.png')
    background-repeat no-repeat
    background-size cover
    background-position center
    &:hover
      cursor pointer
    .space
      display flex
      flex-direction row
      justity-content center
      align-items center
      height 100%
      .globe
      .orbit
        width 100%
        height 100%
        display flex
        flex-direction column
        justity-content center
        align-items center
      .globe
        img
          height 150px
          width auto
      .orbit
        img
          height 80px
          width auto
          padding 5px
</style>

<style lang="stylus">
  .planet
    .con-vs-card-header
    .con-vs-card-body
    .con-vs-card-footer
      width 100%
</style>
