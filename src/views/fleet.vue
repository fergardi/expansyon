<template lang="pug">
  #fleet

    // ships
    vs-row.ships
      transition-group(name="animation", enter-active-class="animated bounceIn", leave-active-class="animated bounceOut", tag="div")
        vs-row.level(v-for="(level, index1) in ships", :key="index1")
          vs-col.ship(v-for="(ship, index2) in level.ships", :key="index2", vs-type="flex", vs-justify="center", vs-align="center", vs-w="6")
            vs-avatar(:vs-src="ship.icon", vs-size="80px", vs-color="rgba(0,0,0,0.8)", vs-badge-color="rgba(0,0,0,0.8)", :vs-badge="ship.quantity", v-tooltip="{ text: $t(ship.tooltip) }")
            vs-button(:vs-color="level.color", vs-type="relief", @click="increase(ship)") {{ $t(ship.name) }}

    // actions
    vs-row.actions
      vs-button(vs-type="relief", vs-color="success", vs-icon="check", @click="confirmSave = true") {{ $t('lbl_button_save') }}
      vs-button(vs-type="relief", vs-color="danger", vs-icon="autorenew", @click="confirmReset = true") {{ $t('lbl_button_reset') }}
    
    // save
    vs-dialog(vs-color="success", :vs-title="$t('ttl_fleet_save')", vs-type="confirm", @vs-accept="confirmSave = false", :vs-active.sync="confirmSave")
      p {{ $t('txt_fleet_save') }}
    
    // reset
    vs-dialog(vs-color="danger", :vs-title="$t('ttl_fleet_reset')", vs-type="confirm", @vs-accept="confirmReset = false", :vs-active.sync="confirmReset")
      p {{ $t('txt_fleet_reset') }}
</template>

<script>
import { database } from '@/services/firebase'

export default {
  firebase () {
    return {
      ships: {
        source: database.ref('users').child('test').child('ships'),
        readyCallback: () => { this.$vs.loading.close() }
      }
    }
  },
  data () {
    return {
      confirmSave: false,
      confirmReset: false
    }
  },
  created () {
    this.$vs.loading({ background: 'rgba(0,0,0,0.8)' })
  },
  methods: {
    increase (ship) {
      ship.quantity++
    }
  }
}
</script>

<style lang="stylus" scoped>
  #fleet
    padding 5px
    height 100%
    display flex
    flex-direction column
    overflow hidden
    .ships
      height 85%
      display flex
      justify-content center
      align-items center
      > div // fix transitions
        display flex
        flex-direction column
        flex-wrap nowrap
        height 100%
        width 100%
      .level
        display flex
        height 100%
        .ship
          display flex
          justify-content center
          align-items center
          flex-direction column
    .actions
      height 15%
      display flex
      justify-content space-around
      align-items center
</style>
