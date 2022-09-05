<template>
    <div class="likes_drawer">
        <div class="links">
            <div @click="dontShowLikes">
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.71387 11.1431L0.57101 6.00028L5.71387 0.857422" stroke="#242424" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
                <p>{{ $t('continue_shopping') }}</p>
            </div>

            <nuxt-link to="/profile">
                <p>{{ $t('see_likes') }}</p>
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.28613 0.856864L6.42899 5.99972L1.28613 11.1426" stroke="#242424" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </nuxt-link>
        </div>
        <div class="products">
            <likes-product v-for="(e, i) in liked_products" :key="i" :liked_products="e" :index="i" />
        </div>

    </div>
</template>

<script>
import LikesProduct from '@/components/product/likes_product.vue'
export default {
    components: {
        LikesProduct
    },
    computed: {
        liked_products() {
            return this.$store.getters['liked/liked_products']
        },

    },
    methods: {
        dontShowLikes() {
            this.$emit('dont-show-likes')
        }
    }

}
</script>

<style>
</style>