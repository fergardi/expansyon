<template lang="pug">
  #galaxy
    carousel-3d.constellation(:autoplay="false", :display="5", :count="planets.length", :border="0", :height="391", ref="constellation")
      slide.planet(v-for="(planet, index) in planets", :key="index", :index="index")
        vc-card.card
          vc-card-title(:color="planet.color")
            h3.headline.ma-0.pa-0.ellipsis.align-center.font-white {{ planet.name }}
          vc-card-text.space
            .globe(v-tooltip="{position: 'top', text: 'tooltip text'}")
              img(:src="planet.globe")
            .orbit
              .moon(v-tooltip="{position: 'top', text: 'tooltip text'}")
                img(:src="planet.moon")
              .satellite(v-tooltip="{position: 'top', text: 'tooltip text'}")
                img(:src="planet.satellite")
          vc-card-text.stats
            vc-progress(name="name", :fill="20", progress-color="red", v-tooltip="{position: 'top', text: 'tooltip text'}")
            vc-progress(name="name", :fill="76", progress-color="red", v-tooltip="{position: 'top', text: 'tooltip text'}")
            vc-progress(name="name", :fill="53", progress-color="red", v-tooltip="{position: 'top', text: 'tooltip text'}")
            vc-progress(name="name", :fill="0", progress-color="red", v-tooltip="{position: 'top', text: 'tooltip text'}")
            vc-progress(name="name", :fill="5", progress-color="red", v-tooltip="{position: 'top', text: 'tooltip text'}")
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
import { database } from '@/services/firebase'

export default {
  components: { Carousel3d, Slide },
  firebase: {
    planets: database.ref('planets')
  },
  updated () {
    this.$refs.constellation.goSlide(this.$refs.constellation.currentIndex) // fixes invisible slide bug
  },
  methods: {
    name () {
      return Math.random().toString(36).slice(6).toUpperCase()
    }
  }
}
</script>

<style lang="stylus" scoped>
  #galaxy
    margin 5px
    height 100%
    .planet
      opacity 0.95 !important
      .card
        .space
          display flex
          flex-direction row
          justity-content center
          align-items center
          height 100%
          .globe
          .orbit
            width 50%
            height 100%
          .globe
            img
              height 150px
          .orbit
            display flex
            flex-direction column
            justity-content center
            align-items center
            img
              height 75px
              padding 5px
        .stats
          .vc-progress
            padding 5px 0
</style>
