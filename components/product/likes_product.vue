<template>
    <div class="likes_product">
        <img src="./../../assets/images/products/1.png" alt="">
        <div class="content">
            <p class="product_name">
                {{ $tt(liked_products.name_tm, liked_products.name_ru) }}
            </p>
            <p class="seller">
                {{ liked_products.seller }}
            </p>
            <div>
                <button @click="remove(index)">{{ $tt('Aýyr', 'Удалять') }}</button>
                <p class="price">{{ liked_products.price }}M</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        liked_products: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    methods: {
        remove(i) {
            return this.$store.dispatch('liked/removeFromLiked', { index: i });
        }
    }
}
</script>

<style>
</style>