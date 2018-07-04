<template lang="pug">
  #galaxy
    carousel-3d.constellation(:autoplay="false", :display="5", :count="planets.length", :border="0", :height="400", ref="constellation")
      slide.slide(v-for="(planet, index) in planets", :key="index", :index="index")
        planet(:planet="planet")
    .actions
      vs-button(vs-color="primary") lbl_button_attack
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
import { database } from '@/services/firebase'
import Planet from '@/components/planet'

export default {
  components: { Carousel3d, Slide, Planet },
  firebase: {
    planets: database.ref('planets')
  },
  created () {
    this.$vs.loading({ background: '#000' })
  },
  updated () {
    this.$refs.constellation && this.$refs.constellation.goSlide(this.$refs.constellation.currentIndex) // fixes invisible slide bug
    this.$vs.loading.close()
  },
  computed: {
    planet () {
      return this.$refs.constellation && this.planets ? this.planets[this.$refs.constellation.currentIndex] : null
    }
  }
}
</script>

<style lang="stylus" scoped>
  #galaxy
    margin 0
    padding 5px
    height 100%
    display flex
    flex-direction column
    .constellation
      margin 0 auto !important
      height 50%
    .actions
      display flex
      justify-content center
      align-items center
      height 50%
</style>
