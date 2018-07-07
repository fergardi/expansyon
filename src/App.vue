<template lang="pug">
  #app
    vs-topbar(vs-color="primary")
      vs-button(vs-color="primary", vs-color-text="white", vs-type="line", vs-icon="menu", @click="sidebar = !sidebar")
      h2 {{ $t(title) }}
      vs-button(vs-color="primary", vs-color-text="white", vs-type="line", vs-icon="settings", @click="login")
    vs-sidebar(:vs-active.sync="sidebar")
      template(v-for="(block, index1) in menu")
        vs-divider(vs-position="center", :vs-color="block.color") {{ $t(block.name) }}
        vs-sidebar-item(v-for="(item, index2) in block.items", :key="`key${index1}${index2}`", @click.native="close", :to="item.route", :vs-active="active(item.route)", :vs-icon="item.icon", :vs-color="block.color") {{ $t(item.name) }}
    #content
      transition(name="fade")
        router-view
</template>

<script>
import store from '@/vuex'

export default {
  name: 'app',
  data () {
    return {
      sidebar: false,
      menu: [
        {
          name: 'lbl_menu_exterior',
          color: 'primary',
          items: [
            { route: 'galaxy', name: 'ttl_route_galaxy', icon: 'check' },
            { route: 'empire', name: 'ttl_route_empire', icon: 'check' },
            { route: 'infrastructure', name: 'ttl_route_infrastructure', icon: 'check' },
            { route: 'hangar', name: 'ttl_route_hangar', icon: 'check' },
            { route: 'bestiary', name: 'ttl_route_bestiary', icon: 'check' },
            { route: 'tree', name: 'ttl_route_tree', icon: 'check' }
          ]
        }
      ]
    }
  },
  methods: {
    active (route) {
      return this.$route.path.includes(route)
    },
    close () {
      this.sidebar = false
    },
    login () {
      this.$router.push('/login')
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
    .vs-button
      font-size 1.2rem
      color rgba(255,255,255,0.8)
      i
        color rgba(255,255,255,0.8)
    .con-input-number
      button
        i
          font-size 1.2rem !important
    .con-vs-avatar
      .con-img
        padding 10px
      .dot-count.badgeNumber
        font-size 1rem
    // transitions
    .fade-enter-active
    .fade-leave-active
      transition-property opacity
      transition-duration .25s
    .fade-enter-active
      transition-delay .25s
    .fade-enter
    .fade-leave-active
      opacity 0
</style>
