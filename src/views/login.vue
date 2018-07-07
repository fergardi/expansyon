<template lang="pug">
  #login
    vs-row.flex
      vs-col(vs-type="flex", vs-justify="center", vs-align="center", vs-lg="4", vs-sm="6", vs-xs="12")
        vs-card(vs-color="primary")
          vs-card-header(vs-background-color="primary", :vs-title="$t('lbl_login_title')", :vs-fill="true")
          vs-tabs

            // login
            vs-tab(:vs-label="$t('lbl_login_access')")
              vs-card-body
                .center
                  vs-avatar(vs-src="https://image.flaticon.com/icons/svg/149/149071.svg", vs-size="75px", vs-badge="10", vs-color="primary", vs-badge-color="primary")
                vs-input(:vs-label="$t('lbl_login_username')", :vs-placeholder="$t('lbl_login_username')", vs-icon="person", v-model="username")
                vs-input(:vs-label="$t('lbl_login_password')", :vs-placeholder="$t('lbl_login_password')", vs-type="password", vs-icon="lock", v-model="password")
                vs-checkbox(v-model="remember", vs-color="primary") {{ $t('lbl_login_remember') }}
              vs-card-body.actions
                vs-button(vs-type="relief", vs-color="success") {{ $t('lbl_button_login') }}
                vs-button(vs-type="relief", vs-color="warning") {{ $t('lbl_button_forgot') }}
            
            // register
            vs-tab(:vs-label="$t('lbl_login_register')")
              vs-card-body
                .center
                  vs-avatar(vs-src="https://image.flaticon.com/icons/svg/149/149071.svg", vs-size="75px", vs-badge="10", vs-color="primary", vs-badge-color="primary")
                vs-input(:vs-label="$t('lbl_login_email')", :vs-placeholder="$t('lbl_login_email')", vs-type="email", vs-icon="email", v-model="email")
                vs-input(:vs-label="$t('lbl_login_username')", :vs-placeholder="$t('lbl_login_username')", vs-icon="person", v-model="username")
                vs-input(:vs-label="$t('lbl_login_password')", :vs-placeholder="$t('lbl_login_password')", vs-type="password", vs-icon="lock", v-model="password")
              vs-card-body.actions
                vs-button(vs-type="relief", vs-color="success") {{ $t('lbl_button_register') }}
                vs-button(vs-type="relief", vs-color="danger") {{ $t('lbl_button_reset') }}
</template>

<script>
export default {
  data () {
    return {
      email: 'root@root.com',
      username: 'root',
      password: 'root',
      remember: true
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
    .center
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
      .con-slot-label
        color rgba(255,255,255,0.8) !important
      .con-input + .con-input
        margin-top 27px
    .con-vs-avatar
      .con-img
        padding 0
    ul.ul-tabs
      justify-content center
      list-style-type none
      li
        background-color rgba(255,255,255,0.25)
        .tabtext
          color rgba(255,255,255,0.8)
        &.tab-activo
          background-color rgba(255,255,255,0.75)

</style>
