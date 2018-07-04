<template lang="pug">
  #tree
    vs-row.branches
      vs-col.branch(v-for="(branch, index1) in tree", :key="index1", vs-type="flex", vs-justify="center", vs-align="center", vs-w="4")
        .skill(v-for="(skill, index2) in branch.skills")
          .image
            img(:src="skill.icon", v-tooltip="{ text: skill.tooltip }")
          .button
            vs-button(vs-type="relief", :vs-color="branch.color") {{ skill.name }}
    vs-row.actions
      vs-button(vs-type="relief", vs-color="success") lbl_button_save
      vs-button(vs-type="relief", vs-color="danger") lbl_button_reset
</template>

<script>
import { database } from '@/services/firebase'

export default {
  firebase: {
    tree: database.ref('tree')
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
