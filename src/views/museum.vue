<template lang="pug">
  #museum
    // artifacts
    vs-row.artifacts
      transition-group(name="animation", enter-active-class="animated bounceIn", leave-active-class="animated bounceOut", tag="div")
        vs-col.artifact(v-for="(artifact, index1) in joined", :key="index1", vs-type="flex", vs-justify="center", vs-align="center", vs-lg="4", vs-sm="4", vs-xs="6")
          vs-avatar(:vs-src="artifact.icon", vs-size="80px", vs-color="rgba(0,0,0,0.8)", vs-badge-color="rgba(0,0,0,0.8)", :vs-badge="artifact.quantity", v-tooltip="{ text: $t(artifact.tooltip) }")
          vs-button(:vs-color="artifact.color", vs-type="relief") {{ $t(artifact.name) }}
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
      museum: {
        source: database.ref('users').child('test').child('artifacts'),
        readyCallback: () => this.queries++
      },
      artifacts: {
        source: database.ref('artifacts'),
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
      return this.museum.map(m => Object.assign(m, this.artifacts.find(a => a['.key'] === m['.key'])))
    }
  }
}
</script>

<style lang="stylus" scoped>
  #museum
    padding 5px
    height 100%
    display flex
    flex-direction column
    overflow hidden
    .artifacts
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
        .artifact
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
