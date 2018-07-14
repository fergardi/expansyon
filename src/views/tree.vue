<template lang="pug">
  #tree
    // skills
    vs-row.skills
      transition-group(name="animation", enter-active-class="animated bounceIn", leave-active-class="animated bounceOut", tag="div")
        vs-row.level(v-for="(level, index1) in tree", :key="index1")
          vs-col.skill(v-for="(skill, index2) in level.skills", :key="index2", vs-type="flex", vs-justify="center", vs-align="center", :vs-w="12 / level.size")
            vs-avatar(:vs-src="skill.icon", vs-size="80px", vs-color="rgba(0,0,0,0.8)", vs-badge-color="rgba(0,0,0,0.8)", :vs-badge="skill.level", v-tooltip="{ text: $t(skill.tooltip) }")
            vs-button(:vs-color="level.color", vs-type="relief") {{ $t(skill.name) }}
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
      tree: {
        source: database.ref('tree'),
        readyCallback: () => { this.$vs.loading.close() }
      }
    }
  },
  created () {
    this.$vs.loading({ background: 'rgba(0,0,0,0.8)' })
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
