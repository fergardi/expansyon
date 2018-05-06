<template lang="pug">
  vc-card.planet
    vc-card-title(:color="color(planet)")
      h3.headline.ma-0.pa-0.ellipsis.align-center.font-white {{ planet.name }}
    vc-card-text.space
      .globe(v-tooltip="{text: 'ttp_planet_globe'}")
        img(:src="planet.globe")
      .orbit
        .moon(v-tooltip="{text: 'ttp_planet_moon'}")
          img(src="https://image.flaticon.com/icons/svg/616/616465.svg", :style="planet.moon ? 'enabled' : ''")
        .satellite(v-tooltip="{text: 'ttp_planet_satellite'}")
          img(src="https://image.flaticon.com/icons/svg/179/179527.svg", :style="planet.satellite ? 'enabled' : ''")
    vc-card-text.stats
      vc-progress(name="mana", :fill="planet.mana", progress-color="blue", track-color="blue l-100", v-tooltip="{text: 'ttp_resource_mana'}")
      vc-progress(name="gold", :fill="planet.gold", progress-color="yellow", track-color="yellow l-100", v-tooltip="{text: 'ttp_resource_gold'}")
      vc-progress(name="people", :fill="planet.people", progress-color="purple", track-color="purple l-100", v-tooltip="{text: 'ttp_resource_people'}")
      vc-progress(name="size", :fill="planet.size", progress-color="green", track-color="green l-100", v-tooltip="{text: 'ttp_resource_space'}")
      vc-progress(name="influence", :fill="planet.influence", progress-color="red", track-color="red l-100", v-tooltip="{text: 'ttp_resource_influence'}")
</template>

<script>
export default {
  name: 'planet',
  props: ['planet'],
  methods: {
    color (planet) {
      switch (Math.max(planet.mana, planet.gold, planet.people, planet.size, planet.influence)) {
        case planet.mana:
          return 'blue'
        case planet.gold:
          return 'yellow'
        case planet.people:
          return 'purple'
        case planet.size:
          return 'green'
        case planet.influence:
          return 'red'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .planet
    &:hover
      cursor pointer
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
          opacity 0.25
    .stats
      .vc-progress
        padding 5px 0
</style>
