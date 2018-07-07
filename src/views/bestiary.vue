<template lang="pug">
  #bestiary
    vs-row
      vs-col(v-for="(troop, index) in troops", :key="index", vs-type="flex", vs-justify="center", vs-align="center", vs-lg="4", vs-sm="6", vs-xs="12")
        troop(:troop="troop")
</template>

<script>
import { database } from '@/services/firebase'
import Troop from '@/components/troop'

export default {
  components: { Troop },
  firebase: {
    troops: database.ref('troops')
  }
}
</script>

<style lang="stylus" scoped>
  #bestiary
    padding 5px
    height 100%
</style>
