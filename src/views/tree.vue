<template lang="pug">
  #tree
    vs-row.skills
      vs-row.level(v-for="(level, index1) in tree", :key="index1")
        vs-col.skill(v-for="(skill, index2) in level.skills", :key="index2", vs-type="flex", vs-justify="center", vs-align="center", :vs-w="(12 / (index1 + 1))")
          vs-avatar(:vs-src="skill.icon", vs-size="75px", vs-color="#000", vs-badge-color="#000", :vs-badge="skill.level", v-tooltip="{ text: $t(skill.tooltip) }")
          vs-button(:vs-color="level.color", vs-type="relief", @click="increase(skill)") {{ $t(skill.name) }}
    vs-row.actions
      vs-button(vs-type="relief", vs-color="success", vs-icon="check", @click="confirmSave = true") {{ $t('lbl_button_save') }}
      vs-button(vs-type="relief", vs-color="danger", vs-icon="autorenew", @click="confirmReset = true") {{ $t('lbl_button_reset') }}
    
    // save
    vs-dialog(vs-color="success", :vs-title="$t('ttl_tree_save')", vs-type="confirm", @vs-accept="confirmSave = false", :vs-active.sync="confirmSave")
      p {{ $t('txt_tree_save') }}
    
    // reset
    vs-dialog(vs-color="danger", :vs-title="$t('ttl_tree_reset')", vs-type="confirm", @vs-accept="confirmReset = false", :vs-active.sync="confirmReset")
      p {{ $t('txt_tree_reset') }}
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
  methods: {
    increase (skill) {
      skill.level++
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
    .skills
      display flex
      flex-direction column
      flex-wrap nowrap
      height 90%
      .level
        display flex
        height 100%
        .skill
          height 100%
          display flex
          justify-content center
          align-items center
          flex-direction column
    .actions
      height 10%
      display flex
      justify-content space-around
      align-items center
</style>

<style lang="stylus">
  #tree
    .skill
      .con-img
        padding 10px
    .badgeNumber
      font-size 1rem
</style>
