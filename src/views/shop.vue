<template lang="pug">
  #shop
    // planet
    vs-row.planets
      transition-group(name="animation", enter-active-class="animated bounceIn", leave-active-class="animated bounceOut", tag="div")
        vs-col.planet(v-for="(planet, index1) in planets", :key="index1", vs-type="flex", vs-justify="center", vs-align="center", vs-lg="4", vs-sm="6", vs-xs="12")
          planet(:planet="planet")
          vs-button(:vs-color="planet.color", vs-type="relief", key="button") {{ $t('lbl_button_buy') }}
    // ships
    vs-row.ships
      transition-group(name="animation", enter-active-class="animated bounceIn", leave-active-class="animated bounceOut", tag="div")
        vs-col.ship(v-for="(ship, index1) in ships", :key="index1", vs-type="flex", vs-justify="center", vs-align="center", vs-w="6")
          vs-avatar(:vs-src="ship.icon", vs-size="80px", vs-color="rgba(0,0,0,0.8)", vs-badge-color="rgba(0,0,0,0.8)", :vs-badge="10", v-tooltip="{ text: $t(ship.tooltip) }")
          vs-button(:vs-color="ship.color", vs-type="relief") {{ $t('lbl_button_buy') }}
    // troops
    vs-row.troops
      transition-group(name="animation", enter-active-class="animated bounceIn", leave-active-class="animated bounceOut", tag="div")
        vs-col.troop(v-for="(troop, index1) in troops", :key="index1", vs-type="flex", vs-justify="center", vs-align="center", vs-w="6")
          vs-avatar(:vs-src="troop.icon", vs-size="80px", vs-color="rgba(0,0,0,0.8)", vs-badge-color="rgba(0,0,0,0.8)", :vs-badge="10", v-tooltip="{ text: $t(troop.tooltip) }")
          vs-button(:vs-color="troop.color", vs-type="relief") {{ $t('lbl_button_buy') }}
    // artifacts
    vs-row.artifacts
      transition-group(name="animation", enter-active-class="animated bounceIn", leave-active-class="animated bounceOut", tag="div")
        vs-col.artifact(v-for="(artifact, index1) in artifacts", :key="index1", vs-type="flex", vs-justify="center", vs-align="center", vs-w="6")
          vs-avatar(:vs-src="artifact.icon", vs-size="80px", vs-color="rgba(0,0,0,0.8)", vs-badge-color="rgba(0,0,0,0.8)", :vs-badge="10", v-tooltip="{ text: $t(artifact.tooltip) }")
          vs-button(:vs-color="artifact.color", vs-type="relief") {{ $t('lbl_button_buy') }}
</template>

<script>
import { database } from '@/services/firebase'
import Planet from '@/components/planet'

export default {
  components: { Planet },
  firebase () {
    return {
      planets: {
        source: database.ref('shop').child('planets'),
        readyCallback: () => { this.loaded++ }
      },
      ships: {
        source: database.ref('shop').child('ships'),
        readyCallback: () => { this.loaded++ }
      },
      troops: {
        source: database.ref('shop').child('troops'),
        readyCallback: () => { this.loaded++ }
      },
      artifacts: {
        source: database.ref('shop').child('artifacts'),
        readyCallback: () => { this.loaded++ }
      }
    }
  },
  data () {
    return {
      loaded: 0,
      confirmBuy: false
    }
  },
  watch: {
    loaded (quantity) {
      if (quantity >= 4) this.$vs.loading.close()
    }
  },
  created () {
    this.$vs.loading({ background: 'rgba(0,0,0,0.8)' })
  }
}
</script>

<style lang="stylus" scoped>
  #shop
    padding 5px
    height 100%
    overflow-y auto
    .planets
    .troops
    .ships
    .artifacts
      > div // fix transitions
        display flex
        flex-direction row
        flex-wrap nowrap
        height 100%
        width 100%
      .ship
      .troop
      .planet
      .artifact
        display flex
        justify-content center
        align-items center
        flex-direction column
    .planets
      > div
        justify-content center
</style>

<style lang="stylus">
  #shop
    .vs-row
      padding-bottom 10px
</style>
