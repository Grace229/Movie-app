<template>
  <div id="firebaseui-auth-container" class="mt-8">

  </div>
</template>

<script>
export default {
name: 'Login',
mounted(){
    const uiconfig = {
        callback: {
            signInSuccessWithAuthResult: authResult =>{
                this.$store.dispatch('setUser', authResult.user)
                this.$store.dispatch('showDrawer')
                this.$router.push('/')
                return false
            },
        },
        signInOptions: [this.$firebase.auth.GoogleAuthProvider.PROVIDER_ID, this.$firebase.auth.EmailAuthProvider.PROVIDER_ID],
    }
    this.$firebaseui.start('#firebaseui-auth-container', uiconfig)
}
}
</script>

<style>

</style>