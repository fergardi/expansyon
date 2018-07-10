<template lang="pug">
  vs-card.ship(:vs-color="ship.color")
    vs-card-header(:vs-background-color="ship.color", :vs-title="$t(ship.name)", :vs-fill="true")
    vs-card-body.attributes
      .character(v-tooltip="{ text: $t('ttp_ship_character') }")
        img(:src="ship.icon")
      .habilities
        .type(v-tooltip="{ text: $t('ttp_ship_type') }")
          img(:src="getTypeImage(ship.type)")
        .element(v-tooltip="{ text: $t('ttp_ship_element') }")
          img(:src="getElementImage(ship.element)")
    vs-card-body.stats
      vs-progress(:vs-percent="ship.magic", vs-color="primary", v-tooltip="{ text: $t('ttp_stats_magic') }")
      vs-progress(:vs-percent="ship.attack", vs-color="warning", v-tooltip="{ text: $t('ttp_stats_attack') }")
      vs-progress(:vs-percent="ship.defense", vs-color="dark", v-tooltip="{ text: $t('ttp_stats_defense') }")
      vs-progress(:vs-percent="ship.dexterity", vs-color="success", v-tooltip="{ text: $t('ttp_stats_dexterity') }")
      vs-progress(:vs-percent="ship.life", vs-color="danger", v-tooltip="{ text: $t('ttp_stats_life') }")
</template>

<script>
export default {
  name: 'ship',
  props: ['ship'],
  methods: {
    getTypeImage (type) {
      switch (type) {
        case 'flying':
          return 'https://image.flaticon.com/icons/svg/981/981459.svg'
        case 'melee':
          return 'https://image.flaticon.com/icons/svg/499/499244.svg'
        case 'distance':
          return 'https://image.flaticon.com/icons/svg/262/262419.svg'
      }
    },
    getElementImage (element) {
      switch (element) {
        case 'fire':
          return 'https://image.flaticon.com/icons/svg/599/599502.svg'
        case 'water':
          return 'https://image.flaticon.com/icons/svg/653/653434.svg'
        case 'lightning':
          return 'https://image.flaticon.com/icons/svg/488/488586.svg'
        case 'holy':
          return 'https://image.flaticon.com/icons/svg/315/315091.svg'
        case 'poison':
          return 'https://image.flaticon.com/icons/svg/275/275903.svg'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .ship
    background-color rgba(0,0,0,0.75)
    // background-image url('https://images.fineartamerica.com/images-medium-large-5/old-map-of-europe-and-mediterranean-colin-and-linda-mckie.jpg')
    background-repeat no-repeat
    background-size cover
    background-position center
    &:hover
      cursor pointer
    .attributes
      display flex
      flex-direction row
      justity-content center
      align-items center
      height 100%
      .character
      .habilities
        width 100%
        height 100%
        display flex
        flex-direction column
        justity-content center
        align-items center
      .character
        img
          height 150px
      .habilities
        img
          height 80px
          padding 5px
    .info
      color rgba(255,255,255,0.8)
      text-align center
</style>
