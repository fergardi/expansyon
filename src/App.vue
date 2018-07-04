<template lang="pug">
  #app
    vs-topbar(vs-color="primary")
      vs-button(vs-color="primary", vs-color-text="white", vs-type="flat", vs-icon="menu", @click="sidebar = !sidebar")
      h3 {{ title }}
      vs-button(vs-color="primary", vs-color-text="white", vs-type="flat", vs-icon="menu")
    vs-sidebar(:vs-active.sync="sidebar")
      vs-divider(vs-color="primary") Hola
      vs-sidebar-item(@click.native="close", to="galaxy", :vs-active="active('galaxy')", vs-icon="question_answer") lbl_menu_galaxy
      vs-sidebar-item(@click.native="close", to="bestiary", :vs-active="active('bestiary')", vs-icon="question_answer") lbl_menu_bestiary
    #content
      router-view
</template>

<script>
import store from '@/vuex'

export default {
  name: 'app',
  data () {
    return {
      sidebar: true
    }
  },
  methods: {
    active (route) {
      return this.$route.path.includes(route)
    },
    close () {
      this.sidebar = false
    }
  },
  computed: {
    title () {
      return store.state.title
    }
  }
}
</script>

<style lang="stylus">
  html
  body
  #app
    display flex
    flex-direction column
    width 100vw
    height 100vh
  body
    background-image url('http://latest-headlines.com/upload/news/image_1524836778_3423560.jpg')
    background-repeat no-repeat
    background-size cover
    background-position center
    background-attachment fixed
    overflow hidden
    #app
      #content
        overflow-y auto
        height 100%
      .carousel-3d-slide
        background-color transparent
    .vs-topbar
      min-height 50px
      justify-content space-between !important
</style>
