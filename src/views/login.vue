<template lang="pug">
  #login
    // card
    vs-row.flex
      vs-col(vs-type="flex", vs-justify="center", vs-align="center", vs-lg="4", vs-sm="6", vs-xs="12")
        vs-card.animated.bounceIn(vs-color="primary")
          vs-card-header(vs-background-color="primary", :vs-title="$t('lbl_login_title')", :vs-fill="true")
          //tabs
          vs-tabs
            // login
            vs-tab(:vs-label="$t('lbl_login_access')")
              vs-card-body.center
                vs-avatar(vs-src="https://image.flaticon.com/icons/svg/639/639358.svg", vs-size="80px", vs-badge="10", vs-color="rgba(0,0,0,0.8)", vs-badge-color="rgba(0,0,0,0.8)")
                vs-input(:vs-label="$t('lbl_login_username')", :vs-placeholder="$t('lbl_login_username')", type="email", vs-icon="person", v-model="email", :vs-danger="error", :vs-danger-text="$t('msg_login_failed')")
                vs-input(:vs-label="$t('lbl_login_password')", :vs-placeholder="$t('lbl_login_password')", type="password", vs-icon="lock", v-model="password", :vs-danger="error", :vs-danger-text="$t('msg_login_failed')")
                vs-checkbox(v-model="remember", vs-color="primary") {{ $t('lbl_login_remember') }}
              vs-card-body.actions
                vs-button(vs-type="relief", vs-color="success", @click="login") {{ $t('lbl_button_login') }}
                vs-button(vs-type="relief", vs-color="warning") {{ $t('lbl_button_forgot') }}
            // register
            vs-tab(:vs-label="$t('lbl_login_register')")
              vs-card-body.center
                vs-avatar(vs-src="https://image.flaticon.com/icons/svg/684/684932.svg", vs-size="80px", vs-badge="10", vs-color="rgba(0,0,0,0.8)", vs-badge-color="rgba(0,0,0,0.8)")
                vs-input(:vs-label="$t('lbl_login_email')", :vs-placeholder="$t('lbl_login_email')", type="email", vs-icon="email", v-model="email")
                vs-input(:vs-label="$t('lbl_login_password')", :vs-placeholder="$t('lbl_login_password')", type="password", vs-icon="lock", v-model="password")
                vs-input(:vs-label="$t('lbl_login_repeat_password')", :vs-placeholder="$t('lbl_login_repeat_password')", type="password", vs-icon="lock", v-model="repeat")
              vs-card-body.actions
                vs-button(vs-type="relief", vs-color="success") {{ $t('lbl_button_register') }}
                vs-button(vs-type="relief", vs-color="danger", @click="reset") {{ $t('lbl_button_reset') }}
</template>

<script>
import { authenticate } from '@/services/firebase'

export default {
  data () {
    return {
      email: 'root@root.com',
      password: 'password',
      repeat: 'password',
      remember: true,
      error: false
    }
  },
  methods: {
    async login () {
      this.error = false
      if (this.email && this.password) {
        this.$vs.loading({ background: 'rgba(0,0,0,0.8)' })
        try {
          await authenticate(this.email, this.password, this.remember)
          this.$router.push({ path: '/infrastructure' })
        } catch (error) {
          this.error = true
        }
        this.$vs.loading.close()
      } else {
        this.error = true
      }
    },
    register () {
      if (this.email && this.password && this.repeat && this.password === this.repeat) {
        // TODO
      }
    },
    forgot () {

    },
    reset () {
      this.email = ''
      this.password = ''
      this.repeat = ''
      this.remember = false
      this.error = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  #login
    padding 5px
    height 100%
    width 100%
    display flex
    justify-content center
    align-items flex-start
    .flex
      display flex
      justify-content center
      align-items center
    .center
      display flex
      justify-content center
      align-items center
      flex-direction column
    .actions
      display flex
      justify-content space-around
      align-items center
</style>

<style lang="stylus">
  #login
    .vs-card
      background-color rgba(0,0,0,0.75)
      .vs-input-label
      .con-slot-label
        color rgba(255,255,255,0.8) !important
    .con-vs-checkbox
      margin-top 16px
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
