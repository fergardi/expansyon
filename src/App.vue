<template lang="pug">
  #app
    
    // topbar
    vs-topbar(vs-color="primary")
      i.material-icons(@click="sidebar = !sidebar") menu
      h2 {{ $t(title) }}
      vs-dropdown
        i.material-icons more_vert
        vs-dropdown-menu
          vs-dropdown-item
            vs-chip(vs-color="danger", vs-icon="check") 1000 {{ $t('lbl_resource_influence') }}
          vs-dropdown-item
            vs-chip(vs-color="success", vs-icon="check") 1000 {{ $t('lbl_resource_terrain') }}
          vs-dropdown-item
            vs-chip(vs-color="warning", vs-icon="check") 1000 {{ $t('lbl_resource_gold') }}
          vs-dropdown-item
            vs-chip(vs-color="primary", vs-icon="check") 1000 {{ $t('lbl_resource_mana') }}
          vs-dropdown-item
            vs-chip(vs-color="dark", vs-icon="check") 1000 {{ $t('lbl_resource_people') }}
    
    // sidebar
    vs-sidebar(:vs-active.sync="sidebar")
      template(v-for="(block, index1) in menu")
        vs-divider(vs-position="center", :vs-color="block.color") {{ $t(block.name) }}
        vs-sidebar-item(v-for="(item, index2) in block.items", :key="`key${index1}${index2}`", @click.native="close", :to="item.route", :vs-active="active(item.route)", :vs-icon="item.icon", :vs-color="block.color") {{ $t(item.name) }}
    
    // content
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
            { route: 'shop', name: 'ttl_route_shop', icon: 'check' }
          ]
        },
        {
          name: 'lbl_menu_interior',
          color: 'primary',
          items: [
            { route: 'army', name: 'ttl_route_army', icon: 'check' },
            { route: 'empire', name: 'ttl_route_empire', icon: 'check' },
            { route: 'fleet', name: 'ttl_route_fleet', icon: 'check' },
            { route: 'infrastructure', name: 'ttl_route_infrastructure', icon: 'check' },
            { route: 'tree', name: 'ttl_route_tree', icon: 'check' }
          ]
        },
        {
          name: 'lbl_menu_help',
          color: 'primary',
          items: [
            { route: 'artifacts', name: 'ttl_route_artifacts', icon: 'check' },
            { route: 'ships', name: 'ttl_route_ships', icon: 'check' },
            { route: 'troops', name: 'ttl_route_troops', icon: 'check' }
          ]
        },
        {
          name: 'lbl_menu_account',
          color: 'primary',
          items: [
            { route: 'login', name: 'ttl_route_login', icon: 'check' }
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
  @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css")
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
    background-image url('https://image.freepik.com/free-vector/beautiful-eclipse-background-with-sparkle_23-2147667751.jpg')
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
        height auto !important
    .vs-topbar
      min-height 50px
      justify-content space-between !important
      i
        padding 10px
    .vs-con-dropdown
      i
        color rgba(255,255,255,0.8)
    .con-vs-dropdown-menu
      .vs-dropdown-item
        white-space nowrap
        a
          padding-top 0
          padding-bottom 0
          .con-vs-chip
            width 100%
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
    .vs-card
      .card-titles
        align-items center !important
    /* transitions */
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
