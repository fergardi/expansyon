<template lang="pug">
  #army

    // troops
    vs-row.troops
      transition-group(name="animation", enter-active-class="animated bounceIn", leave-active-class="animated bounceOut", tag="div")
        vs-col.troop(v-for="(troop, index1) in troops", :key="index1", vs-type="flex", vs-justify="center", vs-align="center", vs-w="4")
          vs-avatar(:vs-src="troop.icon", vs-size="80px", vs-color="rgba(0,0,0,0.8)", vs-badge-color="rgba(0,0,0,0.8)", :vs-badge="troop.quantity", v-tooltip="{ text: $t(troop.tooltip) }")
          vs-button(:vs-color="troop.color", vs-type="relief", @click="increase(troop)") {{ $t(troop.name) }}
    
    // actions
    vs-row.actions
      vs-button(vs-type="relief", vs-color="success", vs-icon="check", @click="confirmSave = true") {{ $t('lbl_button_save') }}
      vs-button(vs-type="relief", vs-color="danger", vs-icon="autorenew", @click="confirmReset = true") {{ $t('lbl_button_reset') }}
    
    // save
    vs-dialog(vs-color="success", :vs-title="$t('ttl_army_save')", vs-type="confirm", @vs-accept="confirmSave = false", :vs-active.sync="confirmSave")
      p {{ $t('txt_army_save') }}
    
    // reset
    vs-dialog(vs-color="danger", :vs-title="$t('ttl_army_reset')", vs-type="confirm", @vs-accept="confirmReset = false", :vs-active.sync="confirmReset")
      p {{ $t('txt_army_reset') }}
</template>

<script>
import { database } from '@/services/firebase'

export default {
  firebase: {
    troops: database.ref('users').child('test').child('troops')
  },
  data () {
    return {
      confirmSave: false,
      confirmReset: false
    }
  },
  methods: {
    increase (troop) {
      troop.quantity++
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
