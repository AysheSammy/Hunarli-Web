<template>
  <div class="likes">
      <h4>Goýan harytlarym</h4>
      <p class="date">02.09.2022</p>
      <div class="products">
          <Product v-for="i in 5" :key="i" :info="likedProducts[i]" />
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
      }
  }


}
</script>

<style>
</style>