<template lang="pug">
  #app
    vs-topbar(vs-color="primary")
      vs-button(vs-color="primary", vs-color-text="white", vs-type="line", vs-icon="menu", @click="sidebar = !sidebar")
      h2 {{ title }}
      vs-button(vs-color="primary", vs-color-text="white", vs-type="line", vs-icon="settings")
    vs-sidebar(:vs-active.sync="sidebar")
      vs-divider(vs-color="primary", vs-icon="star")
      vs-sidebar-item(@click.native="close", to="galaxy", :vs-active="active('galaxy')", vs-icon="question_answer") ttl_menu_galaxy
      vs-sidebar-item(@click.native="close", to="infrastructure", :vs-active="active('infrastructure')", vs-icon="question_answer") ttl_menu_infrastructure
      vs-divider(vs-color="primary", vs-icon="star")
      vs-sidebar-item(@click.native="close", to="bestiary", :vs-active="active('bestiary')", vs-icon="question_answer") ttl_menu_bestiary
      vs-divider(vs-color="primary", vs-icon="star")
      vs-sidebar-item(@click.native="close", to="tree", :vs-active="active('tree')", vs-icon="question_answer") ttl_menu_tree
    #content
      router-view
</template>

<script>
import store from '@/vuex'

export default {
  name: 'app',
  data () {
    return {
      sidebar: false
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
  @import url('https://fonts.googleapis.com/css?family=Wendy+One')
  *
    font-family 'Wendy One', sans-serif
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
      .vs-button
        font-size 1.5rem
        i
          color rgba(255,255,255,0.8)
    .vs-button
      font-size 1.2rem
    .con-input-number
      button
        i
          font-size 1.2rem !important
</style>
