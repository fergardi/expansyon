<template lang="pug">
  #tree
    vs-row.branches
      vs-col.branch(v-for="(branch, index1) in tree", :key="index1", vs-type="flex", vs-justify="center", vs-align="center", vs-w="4")
        .skill(v-for="(skill, key, index2) in branch.skills", :key="index2")
          .image
            img(:src="skill.icon", v-tooltip="{ text: skill.tooltip }")
          .button
            vs-input-number(:vs-color="branch.color", vs-min="0", vs-max="10", vs-size="medium", v-model="skill.level", :disabled="enabled(index1, index2)")
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
    tree: database.ref('tree')
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
  },
  methods: {
    enabled (index1, index2) {
      if (index2 === 0) return false
      let previous = Object.keys(this.tree[index1].skills).map(key => this.tree[index1].skills[key])[index2 - 1].level
      let next = Object.keys(this.tree[index1].skills).map(key => this.tree[index1].skills[key])[index2].level
      return previous <= next
    }
  }
}
</script>

<style lang="stylus" scoped>
  #tree
    padding 5px
    height 100%
    display flex
    flex-direction column
    overflow hidden
    .branches
      display flex
      flex-direction column
      flex-wrap wrap
      height 80%
      .branch
        display flex
        flex-direction column
        height 100%
        .skill
          height 100%
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
