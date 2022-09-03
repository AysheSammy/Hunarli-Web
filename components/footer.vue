<template>
    <footer>
        <nuxt-link to="/" class="logo">
            <img src="./../static/logo-light.svg" alt="">
        </nuxt-link>
        <div class="contacts">
            <p class="title">{{$t('contact')}}</p>
            <div class="contact" v-for="(e, i) in contacts" :key="i">
                <img :src="require(`./../assets/images/icons/${e.icon}`)" alt="">
                <p class="link">{{ e.link }}</p>
            </div>
        </div>

        <nuxt-link class="register" v-if="!this.$store.getters.isAuthenticated" to="/registration">{{$t('register')}}</nuxt-link>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            contacts: [
                {
                    icon: 'phone.svg',
                    link: '+993 65 833299'
                },
                {
                    icon: 'instagram.svg',
                    link: '@hunarli.com'
                },
                {
                    icon: 'imo.svg',
                    link: '+993 62 066964'
                },
                {
                    icon: 'email.svg',
                    link: 'hunarli@gmail.com'
                },
            ]
        }
    }
}
</script>

<style>
</style>