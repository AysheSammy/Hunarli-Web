<template>
    <div class="main">
        <Header @see-favorite="see_likes" />
        <Likes_drawer v-if="showLikes" @dont-show-likes="dontShowLikes" />
        <nuxt />
        <Footer v-if="route_path != '/registration'" />
    </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import Likes_drawer from '../components/likes_drawer.vue';

export default {
    components: {
        Header,
        Footer,
        Likes_drawer
    },
    data(){
        return {
            showLikes: false,
        }
    },
    computed: {
        route_path() {
            return this.$route.path;
        },
    },
    methods: {
        see_likes(){
            return this.showLikes = !this.showLikes;
        },
        dontShowLikes(){
            return this.showLikes = false;
        }
    }
}
</script>

<style>
</style>