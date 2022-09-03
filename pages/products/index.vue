<template>
    <div class="products">
        <div class="page_categories">
            <ul>
                <li class="category_title" v-for="(e, i) in categories" :key="i">
                    <div @click="showSubCategories(i)">
                        <nuxt-link :to="e.href">{{ $tt(e.name_tm, e.name_ru) }}</nuxt-link>
                        <span v-if="!e.active">+</span>
                        <span v-else>-</span>
                    </div>
                    <ul class="category_self" v-if="e.sub_category_tm && e.active && lang == 'tm'">
                        <li v-for="(a, i) in e.sub_category_tm" :key="i">
                            <nuxt-link to="#">{{ a }}</nuxt-link>
                        </li>
                    </ul>
                    <ul class="category_self" v-if="e.sub_category_ru && e.active && lang == 'ru'">
                        <li v-for="(a, i) in e.sub_category_ru" :key="i">
                            <nuxt-link to="#">{{ a }}</nuxt-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="page_products">
            <Product v-for="i in categories[parentCategory].sub_category_tm" :key="i" />
        </div>
    </div>
</template>

<script>
import Product from '@/components/product/product.vue';
export default {
    components: {
        Product,
    },
    data() {
        return {
            parentCategory: 0,
        }
    },
    methods: {
        showSubCategories(id) {
            this.parentCategory = id;
            this.$store.dispatch('categories/changeActive', { index: this.parentCategory })
            console.log(this.$store.state['categories/categories[this.parentCategory].active'])
        }
    },
    computed: {
        categories() {
            return this.$store.getters['categories/categories'];
        },
        lang(){
            return this.$i18n.locale
        }
    }

}
</script>

<style>
</style>