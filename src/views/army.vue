<template lang="pug">
  #army
    vs-row.troops
      vs-col.troop(v-for="(troop, index1) in troops", :key="index1", vs-type="flex", vs-justify="center", vs-align="center", vs-w="4")
        vs-avatar(:vs-src="troop.icon", vs-size="75px", vs-color="#000", vs-badge-color="#000", :vs-badge="troop.quantity", v-tooltip="{ text: $t(troop.tooltip) }")
        vs-button(:vs-color="troop.color", vs-type="relief", @click="increase(troop)") {{ $t(troop.name) }}
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
      height 90%
      display flex
      justify-content center
      align-items center
      overflow-y auto
      .troop
        padding 5px 0
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

<style lang="stylus">
  #army
    .skill
      .con-img
        padding 10px
    .badgeNumber
      font-size 1rem
</style>
