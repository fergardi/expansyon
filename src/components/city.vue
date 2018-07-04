<template lang="pug">
  vs-card.city(vs-color="warning")
    vs-card-header(vs-background-color="warning", vs-title="city", :vs-fill="true")
    vs-card-body
      vs-row
        vs-col(v-for="(building, index) in buildings", :key="index", vs-w="4")
          img(:src="building.image")
          vs-input-number(v-model="number", vs-size="mini")
</template>

<script>
import { database } from '@/services/firebase'

export default {
  name: 'city',
  props: ['city'],
  firebase: {
    buildings: database.ref('buildings')
  },
  data () {
    return {
      number: 0
    }
  }
}
</script>

<style lang="stylus" scoped>
  .city
    // background-image url('https://i.pinimg.com/originals/08/4f/3a/084f3ae580fce88822a747f5428b20a3.jpg')
    background-repeat no-repeat
    background-size cover
    background-position center
</style>

<style lang="stylus">
  .city
    .con-input-number
      justify-content space-between
</style>
