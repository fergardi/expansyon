<template lang="pug">
  #app
    vc-toolbar#topbar(color="pink")
      vc-toolbar-icon-left(icon="menu", @click="sidebar = !sidebar")
      vc-toolbar-title {{title}}
      vc-toolbar-controls-right
        vc-button(icon-button, color="transparent")
          vc-icon fa-home
    vc-nav-drawer#sidebar(v-model="sidebar", :temporary="true", :dark="false")
      vc-collapsible(name="economy", color="pink", :multiple="true")
        vc-collapsible-item(label="lbl_menu_economy", has-vc-list, icon="home", open)
          vc-list
            vc-list-item(avatar="panorama_wide_angle", icon="chevron_right", tag="router-link", to="/empire")
              vc-list-item-primary-text ttl_route_empire
              vc-list-item-secondary-text stt_route_empire
            vc-list-item(avatar="panorama_wide_angle", icon="chevron_right", tag="router-link", to="/galaxy")
              vc-list-item-primary-text ttl_route_galaxy
              vc-list-item-secondary-text stt_route_galaxy
    #content
      router-view
    #notifications
      
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
    width 100vw
    height 100vh
  body
    background-image url('http://latest-headlines.com/upload/news/image_1524836778_3423560.jpg')
    background-repeat no-repeat
    background-size cover
    background-position center
    width 100%
    height 100%
  #app
    #content
      width 100%
      height 100%
</style>
