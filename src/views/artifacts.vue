<template lang="pug">
  #artifacts

    // artifacts
    vs-row
      transition-group(name="animation", enter-active-class="animated bounceIn", leave-active-class="animated bounceOut")
        vs-col(v-for="(artifact, index) in artifacts", :key="index", vs-type="flex", vs-justify="center", vs-align="center", vs-lg="4", vs-sm="6", vs-xs="12")
          artifact(:artifact="artifact")
</template>

<script>
import { database } from '@/services/firebase'
import Artifact from '@/components/artifact'

export default {
  components: { Artifact },
  firebase: {
    artifacts: database.ref('artifacts')
  }
}
</script>

<style lang="stylus" scoped>
  #artifacts
    padding 5px
    height 100%
</style>
