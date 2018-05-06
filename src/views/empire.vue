<template lang="pug">
  #empire
    carousel-3d.constellation(:autoplay="false", :display="5", :count="planets.length", :border="0", :height="391", ref="constellation")
      slide.slide(v-for="(planet, index) in planets", :key="index", :index="index")
        planet(:planet="planet")
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
import { database } from '@/services/firebase'
import Planet from '@/components/planet'

export default {
  components: { Carousel3d, Slide, Planet },
  firebase: {
    planets: database.ref('users').child('test').child('planets')
  },
  updated () {
    this.$refs.constellation && this.$refs.constellation.goSlide(this.$refs.constellation.currentIndex) // fixes invisible slide bug
  }
}
</script>

<style lang="stylus" scoped>
  #empire
    margin 5px
    height 100%
</style>
