<template lang="pug">
  #galaxy
    carousel-3d.constellation(:autoplay="true", :display="3", :border="0")
      slide.planet(v-for="(planet, index) in planets", :key="index", :index="index")
        vc-card
          vc-card-title(:color="planet.color")
            h3.headline.ma-0.pa-0.ellipsis.align-center.font-white {{ planet.name }}
          vc-card-text
            img.image(:src="planet.image")
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
export default {
  components: { Carousel3d, Slide },
  data () {
    return {
      planets: [
        { image: 'https://image.flaticon.com/icons/svg/139/139706.svg', name: 'Tierra H4K8', color: 'pink' },
        { image: 'https://image.flaticon.com/icons/svg/124/124582.svg', name: 'Marte H4K8', color: 'green' },
        { image: 'https://image.flaticon.com/icons/svg/124/124558.svg', name: 'Jupiter J5G8', color: 'red' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  #galaxy
    margin 5px
    height 100%
    img
      height 150px
</style>

<style lang="stylus">
  #galaxy
    .constellation
    .planet
    .carousel-3d-slider
      height 100% !important
    .carousel-3d-slide
      background-color transparent !important
</style>
