<template>
    <nuxt-link to="" class="product">
        <!-- <img :src="require(`../../assets/images/products/${info.imgs[0]}`)" alt=""> -->
        <img src="../../assets/images/products/1.png" alt="">
        <p class="name">
            <!-- {{ info.name }} -->
            Suyjije etlije somsa gyzgynjak
        </p>
        <p class="seller">
            <!-- {{ info.seller }} -->
            Ashley
        </p>
        <p class="product_date">
            <!-- {{ info.date }} -->
            18.08.2022
        </p>
        <p class="discount">
            -20%
            <!-- {{ info.discount }}% -->
        </p>
        <div class="new">
            <p>{{$tt('täze', 'новый')}}</p>
            <span to="#" class="like" @click="like()">
                <!-- {{ info.price }}M -->
                20.20M
                <img src="../../assets/images/icons/heart-filled.svg" v-if="isLiked">
                <img src="../../assets/images/icons/heart.svg" v-else>
            </span>
        </div>
    </nuxt-link> 
</template>

<script>
export default {
    props: {
        info: {
            type: Object,
            require: true,
        }
    },
    data() {
        return {
            isLiked: false,
        }
    },
    methods: {
        like() {
            this.$store.dispatch('addLike', this.info);
            this.isLiked = !this.isLiked;
        }
    }

}
</script>

<style>
</style>