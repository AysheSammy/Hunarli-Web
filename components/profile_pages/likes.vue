<template>
    <div class="likes">
        <h4>Halanlarym</h4>
        <p class="date">02.09.2022</p>
        <div class="products">
            <Product v-for="i in number_liked" :key="i" :info="likedProducts[i]" />
        </div>
    </div>
</template>

<script>
import Product from '@/components/product/product.vue'
export default {
    components: {
        Product
    },
    computed: {
        likedProducts() {
            return this.$store.getters['liked/liked_products']
        },
        number_liked(){
            return this.$store.getters['liked/count_liked']
        }
    }


}
</script>

<style>
</style>