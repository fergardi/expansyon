<template lang="pug">
  #tree

    // skills
    vs-row.skills
      transition-group(name="animation", enter-active-class="animated bounceIn", leave-active-class="animated bounceOut", tag="div")
        vs-row.level(v-for="(level, index1) in tree", :key="index1")
          vs-col.skill(v-for="(skill, index2) in level.skills", :key="index2", vs-type="flex", vs-justify="center", vs-align="center", :vs-w="12 / level.size")
            vs-avatar(:vs-src="skill.icon", vs-size="80px", vs-color="rgba(0,0,0,0.8)", vs-badge-color="rgba(0,0,0,0.8)", :vs-badge="skill.level", v-tooltip="{ text: $t(skill.tooltip) }")
            vs-button(:vs-color="level.color", vs-type="relief", @click="increase(skill)") {{ $t(skill.name) }}
    
    // actions
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
      height 85%
      > div // fix transitions
        display flex
        flex-direction column
        flex-wrap nowrap
        height 100%
        width 100%
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
      height 15%
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
