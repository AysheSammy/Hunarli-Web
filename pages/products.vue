<template>
    <div class="products">
        <div class="page_categories">
            <ul>
                <li class="category_title" v-for="(e, i) in categories" :key="i">
                    <div @click="showSubCategories(i)">
                        <nuxt-link :to="e.href">{{ e.name_tm }}</nuxt-link>
                        <span v-if="!e.active">+</span>
                        <span v-else>-</span>
                    </div>
                    <ul class="category_self" v-if="e.sub_category_tm && e.active">
                        <li v-for="(a, i) in e.sub_category_tm" :key="i">
                            <nuxt-link to="#">{{ a }}</nuxt-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="page_products">
            <Product v-for="i in categories[parentCategory].sub_category_tm" :key="i"/>
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
            categories: [
                {
                    id: 1,
                    name_tm: 'Aşhana',
                    name_ru: 'Питание',
                    sub_category_tm: [
                        'Naharlar',
                        'Salatlar',
                        'Süýjilikler',
                        'Hamyr önümleri',
                        'Azyk önümler',
                    ],
                    href: '/products',
                    active: true
                },
                {
                    id: 2,
                    name_tm: 'Egin-eşik',
                    name_ru: 'Одежда',
                    sub_category_tm: [
                        'Ýaka / Tahýa',
                        'Taýýar köýnek',
                        'Çaga eşik',
                        'Jempir',
                        'Palto'
                    ],
                    href: '/products',
                    active: false
                },
                {
                    id: 3,
                    name_tm: 'Şaý-sep',
                    name_ru: 'Ювелирные изделия',
                    sub_category_tm: [
                        'Bilezik',
                        'Monjuk',
                        'Täç',
                        'Ýüzük',
                    ],
                    href: '/products',
                    active: false
                },
                {
                    id: 4,
                    name_tm: 'Toý serpaý',
                    name_ru: 'Свадьба окончена',
                    sub_category_tm: [
                        'Şekerlik',
                        'El-işi',
                        'Magnit',
                    ],
                    href: '/products',
                    active: false
                },
                {
                    id: 1,
                    name_tm: 'Oýunjak',
                    name_ru: 'Игрушка',
                    sub_category_tm: [
                        'Ýumşak oýunjak',
                        'Tagtadan oýunjak',
                        'Düzülýän oýunjak',
                    ],
                    href: '/products',
                    active: false
                },
            ],
            parentCategory: 0,
        }
    },
    methods: {
        showSubCategories(id){
            this.parentCategory = id;
            return this.categories[id].active = !this.categories[id].active;
        }
    }

}
</script>

<style>
</style>