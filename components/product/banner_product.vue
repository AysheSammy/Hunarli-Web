<template>
  <div class="banner_product">
    <img :src="require(`../../assets/images/products/${info.img}`)" alt="">
    <p class="name">{{ $tt(info.name_tm, info.name_ru) }}</p>
    <p class="price">{{ info.price }}M</p>
    <button>{{ $tt('Haladym', 'Liked') }}</button>
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