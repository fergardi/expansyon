<template lang="pug">
  #buildings

    // buildings
    vs-row
      transition-group(name="animation", enter-active-class="animated bounceIn", leave-active-class="animated bounceOut", tag="div")
        vs-col(v-for="(building, index) in buildings", :key="index", vs-type="flex", vs-justify="center", vs-align="center", vs-lg="4", vs-sm="6", vs-xs="12")
          building(:building="building")
</template>

<script>
import { database } from '@/services/firebase'
import Building from '@/components/building'

export default {
  components: { Building },
  firebase () {
    return {
      buildings: {
        source: database.ref('buildings'),
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
  #buildings
    padding 5px
    height 100%
</style>
