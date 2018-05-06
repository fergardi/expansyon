<template lang="pug">
  #app
    vc-toolbar#topbar(color="pink")
      vc-toolbar-icon-left(icon="menu", @click="sidebar = !sidebar")
        vc-toolbar-title
          span App
        vc-toolbar-controls-right
          vc-button(icon-button, color="transparent")
            vc-icon fa-home
    vc-nav-drawer#sidebar(v-model="sidebar", :temporary="true", :dark="false")
      p hola
    #content
      router-view
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      sidebar: false
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
    #content
      width 100%
      height 100%
</style>
