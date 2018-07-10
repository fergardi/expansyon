<template lang="pug">
  #fleet

    // fleet
    vs-row
      transition-group(name="animation", enter-active-class="animated bounceIn", leave-active-class="animated bounceOut", tag="div")
        vs-col(v-for="(ship, index) in ships", :key="index", vs-type="flex", vs-justify="center", vs-align="center", vs-lg="4", vs-sm="6", vs-xs="12")
          ship(:ship="ship")
</template>

<script>
import { database } from '@/services/firebase'
import Ship from '@/components/ship'

export default {
  components: { Ship },
  firebase: {
    ships: database.ref('ships')
  }
}
</script>

<style lang="stylus" scoped>
  #fleet
    padding 5px
    height 100%
</style>
