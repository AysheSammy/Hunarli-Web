<template>
    <div class="category_banner">
        <img :src="require('./../assets/images/' + infos.bg_image)" alt="">
        <div class="banner_products">
            <BannerProduct v-for="(e, i) in infos.products" :key="i" :info="e" />
        </div>
        <div class="banner_info">
            <h2>{{ $tt(infos.title_tm, infos.title_ru) }}</h2>
            <nuxt-link to="/products" >{{ $tt('Ýene gör', 'Posmotret wse') }}</nuxt-link>
        </div>

    </div>
</template>

<script>
import BannerProduct from './product/banner_product.vue';
export default {
    components: {
        BannerProduct,
    },
    props: {
        infos: {
            type: Object,
            require: true,
        }
    }
}
</script>

<style>
</style>