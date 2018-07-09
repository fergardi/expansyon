<template lang="pug">
  vs-card#planet(:vs-color="planet.color")
    vs-card-header(:vs-background-color="planet.color", :vs-title="planet.name", :vs-fill="true")

    // space
    vs-card-body.space
      .icon(v-tooltip="{ text: $t('ttp_planet_icon') }")
        img(:src="planet.icon")
      .troops(v-if="troop1 || troop2")
        .troop1(v-if="troop1", v-tooltip="{ text: $t(troop1.tooltip) }")
          img(:src="troop1.icon")
        .troop2(v-if="troop2", v-tooltip="{ text: $t(troop2.tooltip) }")
          img(:src="troop2.icon")

    // stats
    vs-card-body.stats
      vs-progress(:vs-percent="planet.mana", vs-color="primary", v-tooltip="{ text: $t('ttp_resource_mana') }")
      vs-progress(:vs-percent="planet.gold", vs-color="warning", v-tooltip="{ text: $t('ttp_resource_gold') }")
      vs-progress(:vs-percent="planet.people", vs-color="dark", v-tooltip="{ text: $t('ttp_resource_people') }")
      vs-progress(:vs-percent="planet.size", vs-color="success", v-tooltip="{ text: $t('ttp_resource_terrain') }")
      vs-progress(:vs-percent="planet.influence", vs-color="danger", v-tooltip="{ text: $t('ttp_resource_influence') }")
</template>

<script>
import { database } from '@/services/firebase'

export default {
  name: 'planet',
  props: ['planet'],
  data () {
    return {
      troop1: null,
      troop2: null
    }
  },
  async created () {
    if (this.planet.troop1) await this.$bindAsObject('troop1', database.ref('troops').child(this.planet.troop1))
    if (this.planet.troop2) await this.$bindAsObject('troop2', database.ref('troops').child(this.planet.troop2))
  }
}
</script>

<style lang="stylus" scoped>
  #planet
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
      .icon
      .troops
        width 100%
        height 100%
        display flex
        flex-direction column
        justity-content center
        align-items center
      .icon
        img
          height 150px
          width auto
      .troops
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
