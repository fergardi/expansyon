<template lang="pug">
  #infrastructure
    vs-row
      vs-col(vs-type="flex", vs-justify="center", vs-align="center", vs-lg="4", vs-sm="6", vs-xs="12")
        city
</template>

<script>
import City from '@/components/city'

export default {
  components: { City }
}
</script>

<style lang="stylus" scoped>
  #infrastructure
    padding 5px
    height 100%
    .vs-row
      display flex
      justify-content center
</style>
