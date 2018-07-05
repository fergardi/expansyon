<template lang="pug">
  #infrastructure
    vs-row.buildings
      vs-col.building(v-for="(building, index1) in buildings", :key="index1", vs-type="flex", vs-justify="center", vs-align="center", vs-w="4")
        .image
          img(:src="building.icon", v-tooltip="{ text: building.tooltip }")
        .button
          vs-input-number(:vs-color="building.color", vs-min="0", vs-max="10", vs-size="medium", v-model="building.quantity")
    vs-row.actions
      vs-button(vs-type="relief", vs-color="success", vs-icon="check", @click="confirmSave = true") lbl_button_save
      vs-button(vs-type="relief", vs-color="danger", vs-icon="autorenew", @click="confirmReset = true") lbl_button_reset
    // save
    vs-dialog(vs-color="success", vs-title="ttl_dialog_confirm", vs-type="confirm", @vs-accept="confirmSave = false", :vs-active.sync="confirmSave")
      p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    // reset
    vs-dialog(vs-color="danger", vs-title="ttl_dialog_confirm", vs-type="confirm", @vs-accept="confirmReset = false", :vs-active.sync="confirmReset")
      p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</template>

<script>
import { database } from '@/services/firebase'

export default {
  firebase: {
    buildings: database.ref('buildings')
  },
  data () {
    return {
      confirmSave: false,
      confirmReset: false
    }
  },
  created () {
    this.$vs.loading({ background: '#000' })
  },
  updated () {
    try { this.$vs.loading.close() } catch (error) {} // fixes null node
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
      height 80%
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
      height 20%
      display flex
      justify-content space-around
      align-items center
</style>
