<template lang="pug">
  #galaxy

    // galaxy
    vs-row.planets
      carousel-3d.constellation(:autoplay="false", :display="5", :count="planets.length", :border="0", :height="400", ref="constellation")
        slide.slide(v-for="(planet, index) in planets", :key="index", :index="index")
          planet(:planet="planet")
    
    // actions
    vs-row.actions
      vs-button(vs-type="relief", vs-color="primary", vs-icon="check", @click="confirm") {{ $t('lbl_button_attack') }}
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
import { database } from '@/services/firebase'
import Planet from '@/components/planet'

export default {
  components: { Carousel3d, Slide, Planet },
  firebase () {
    return {
      planets: {
        source: database.ref('planets'),
        readyCallback: () => this.$vs.loading.close()
      }
    }
  },
  created () {
    this.$vs.loading({ background: 'rgba(0,0,0,0.8)' })
  },
  updated () {
    this.$refs.constellation && this.$refs.constellation.goSlide(this.$refs.constellation.currentIndex) // fixes invisible slide bug
  },
  computed: {
    planet () {
      return this.$refs.constellation && this.planets ? this.planets[this.$refs.constellation.currentIndex] : null
    }
  },
  methods: {
    confirm () {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: `Confirm`,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        accept: this.attack
      })
    },
    attack () {
      this.$vs.notify({
        position: 'top-right',
        title: 'Titulo',
        text: 'Lorem ipsum dolor sit amet, consectetur',
        color: 'primary',
        icon: 'info'
      })
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
      height 60%
    .actions
      display flex
      justify-content center
      align-items center
      height 40%
</style>
