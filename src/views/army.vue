<template lang="pug">
  #army

    // troops
    vs-row.troops
      transition-group(name="animation", enter-active-class="animated bounceIn", leave-active-class="animated bounceOut", tag="div")
        vs-col.troop(v-for="(troop, index1) in joined", :key="index1", vs-type="flex", vs-justify="center", vs-align="center", vs-lg="3", vs-sm="3", vs-xs="4")
          vs-avatar(:vs-src="troop.icon", vs-size="80px", vs-color="rgba(0,0,0,0.8)", vs-badge-color="rgba(0,0,0,0.8)", :vs-badge="troop.quantity", v-tooltip="{ text: $t(troop.tooltip) }")
          vs-button(:vs-color="troop.color", vs-type="relief") {{ $t(troop.name) }}
    
    // actions
    vs-row.actions
      vs-button(vs-type="relief", vs-color="success", vs-icon="check") {{ $t('lbl_button_save') }}
      vs-button(vs-type="relief", vs-color="danger", vs-icon="autorenew") {{ $t('lbl_button_reset') }}
</template>

<script>
import { database } from '@/services/firebase'

export default {
  firebase () {
    return {
      army: {
        source: database.ref('users').child('test').child('troops'),
        readyCallback: () => this.queries++
      },
      troops: {
        source: database.ref('troops'),
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
      queries: 0
    }
  },
  created () {
    this.$vs.loading({ background: 'rgba(0,0,0,0.8)' })
  },
  computed: {
    joined () {
      return this.army.map(a => Object.assign(a, this.troops.find(t => t['.key'] === a['.key'])))
    }
  }
}
</script>

<style lang="stylus" scoped>
  #army
    padding 5px
    height 100%
    display flex
    flex-direction column
    overflow hidden
    .troops
      height 85%
      display flex
      justify-content center
      align-items center
      overflow-y auto
      > div // fix transitions
        display flex
        flex-direction row
        flex-wrap wrap
        height 100%
        width 100%
        .troop
          padding 5px 0
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
