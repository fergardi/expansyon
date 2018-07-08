<template lang="pug">
  #infrastructure
    vs-row.buildings
      vs-row.level(v-for="(level, index1) in buildings", :key="index1")
        vs-col.building(v-for="(building, index2) in level.buildings", :key="index2", vs-type="flex", vs-justify="center", vs-align="center", vs-w="6")
          vs-avatar(:vs-src="building.icon", vs-size="75px", vs-color="#000", vs-badge-color="#000", :vs-badge="building.level", v-tooltip="{ text: $t(building.tooltip) }")
          vs-button(:vs-color="level.color", vs-type="relief", @click="increase(building)") {{ $t(building.name) }}
    vs-row.actions
      vs-button(vs-type="relief", vs-color="success", vs-icon="check", @click="confirmSave = true") {{ $t('lbl_button_save') }}
      vs-button(vs-type="relief", vs-color="danger", vs-icon="autorenew", @click="confirmReset = true") {{ $t('lbl_button_reset') }}
    
    // save
    vs-dialog(vs-color="success", :vs-title="$t('ttl_infrastructure_save')", vs-type="confirm", @vs-accept="confirmSave = false", :vs-active.sync="confirmSave")
      p {{ $t('txt_infrastructure_save') }}
    
    // reset
    vs-dialog(vs-color="danger", :vs-title="$t('ttl_infrastructure_reset')", vs-type="confirm", @vs-accept="confirmReset = false", :vs-active.sync="confirmReset")
      p {{ $t('txt_infrastructure_reset') }}
</template>

<script>
import { database } from '@/services/firebase'

export default {
  firebase: {
    buildings: database.ref('users').child('test').child('buildings')
  },
  data () {
    return {
      confirmSave: false,
      confirmReset: false
    }
  },
  methods: {
    increase (skill) {
      skill.level++
    }
  }
}
</script>

<style lang="stylus" scoped>
  #infrastructure
    padding 5px
    height 100%
    display flex
    flex-direction column
    overflow hidden
    .buildings
      height 90%
      display flex
      justify-content center
      align-items center
      .building
        display flex
        justify-content center
        align-items center
        flex-direction column
        .image
          height 70%
          width 100%
          display flex
          justify-content center
          align-items center
          img
            width 75px
            height auto
        .button
          height 30%
          width 100%
          display flex
          justify-content center
          align-items center
    .actions
      height 10%
      display flex
      justify-content space-around
      align-items center
</style>
