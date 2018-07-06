<template lang="pug">
  #login
    vs-row.flex
      vs-col(vs-type="flex", vs-justify="center", vs-align="center", vs-lg="4", vs-sm="6", vs-xs="12")
        vs-card(vs-color="primary")
          vs-card-header(vs-background-color="primary", :vs-title="$t('lbl_login_title')", :vs-fill="true")
          vs-card-body
            vs-input(:vs-label="$t('lbl_login_username')", :vs-placeholder="$t('lbl_login_username')", vs-icon="person", v-model="username")
            vs-input(:vs-label="$t('lbl_login_password')", :vs-placeholder="$t('lbl_login_password')", vs-type="password", vs-icon="lock", v-model="password")
          vs-card-body.actions
            vs-button(vs-type="relief", vs-color="primary") {{ $t('lbl_button_login') }}
            vs-button(vs-type="relief", vs-color="primary") {{ $t('lbl_button_register') }}
</template>

<script>
export default {
  data () {
    return {
      username: null,
      password: null
    }
  }
}
</script>

<style lang="stylus" scoped>
  #login
    padding 5px
    height 100%
    display flex
    justify-content center
    align-items center
    .flex
      display flex
      justify-content center
      align-items center
    .actions
      display flex
      justify-content space-around
      align-items center
</style>

<style lang="stylus">
  #login
    .vs-card
      background-color rgba(0,0,0,0.75)
      .label
        color rgba(255,255,255,0.8) !important
</style>
