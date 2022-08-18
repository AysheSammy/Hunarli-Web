<template>
    <div class="category_banner">
        <img :src="require('./../assets/images/' + infos.bg_image)" alt="">
        <div class="products">
            <BannerProduct v-for="(e, i) in infos.products" :key="i" :info="e" />
        </div>
        <div class="banner_info">
            <h2>{{ infos.title }}</h2>
            <button>Ýene gör</button>
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