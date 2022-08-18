<template>
  <div class="banner_product">
    <img :src="require(`../../assets/images/products/${info.img}`)" alt="">
    <p class="name">{{ info.name_tm }}</p>
    <p class="price">{{ info.price }}M</p>
    <button>Sebede goş</button>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      require: true
    }
  }
}
</script>

<style>
</style>