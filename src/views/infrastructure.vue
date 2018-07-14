<template lang="pug">
  #infrastructure
    // buildings
    vs-row.buildings
      transition-group(name="animation", enter-active-class="animated bounceIn", leave-active-class="animated bounceOut", tag="div")
        vs-col.building(v-for="(building, index) in joined", :key="index", vs-type="flex", vs-justify="center", vs-align="center", vs-lg="4", vs-sm="4", vs-xs="6")
          vs-avatar(:vs-src="building.icon", vs-size="80px", vs-color="rgba(0,0,0,0.8)", vs-badge-color="rgba(0,0,0,0.8)", :vs-badge="building.quantity", v-tooltip="{ text: $t(building.tooltip) }")
          vs-button(:vs-color="building.color", vs-type="relief", @click="dialog = true") {{ $t(building.name) }}
    // actions
    vs-row.actions
      vs-button(vs-type="relief", vs-color="success", vs-icon="check") {{ $t('lbl_button_save') }}
      vs-button(vs-type="relief", vs-color="danger", vs-icon="autorenew") {{ $t('lbl_button_reset') }}
    // dialog
    vs-prompt(:vs-active.sync="dialog", vs-button-accept="relief", :vs-accept-text="$t('lbl_button_accept')", :vs-cancel-text="$t('lbl_button_cancel')", vs-button-cancel="relief", @vs-cancel="dialog = false", @vs-accept="dialog = false")
      p // TODO
</template>

<script>
import { database } from '@/services/firebase'

export default {
  firebase () {
    return {
      infrastructure: {
        source: database.ref('users').child('test').child('buildings'),
        readyCallback: () => this.queries++
      },
      buildings: {
        source: database.ref('buildings'),
        readyCallback: () => this.queries++
      }
    }
  },
  watch: {
    queries (num) {
      if (num >= 2) this.$vs.loading.close()
    }
  },
  data () {
    return {
      queries: 0,
      dialog: false
    }
  },
  created () {
    this.$vs.loading({ background: 'rgba(0,0,0,0.8)' })
  },
  computed: {
    joined () {
      return this.infrastructure.map(i => Object.assign(i, this.buildings.find(b => b['.key'] === i['.key'])))
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
      height 85%
      display flex
      justify-content center
      align-items center
      > div // fix transitions
        display flex
        flex-direction row
        flex-wrap wrap
        height 100%
        width 100%
        .building
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
