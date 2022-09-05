<template>
  <div class="registration">

    <sign-in-vue v-if="isConfirmed"></sign-in-vue>
    <sign-up-vue v-else></sign-up-vue>
  </div>
</template>

<script>
import signUpVue from '../../components/registration/signUp.vue';
import signInVue from '../../components/registration/signIn.vue';
export default {
  components: {
    signUpVue,
    signInVue,
  },
  computed: {
    isConfirmed() {
      return this.$store.getters['users/isConfirmed'];
    }
  }
}
</script>

<style>
</style>