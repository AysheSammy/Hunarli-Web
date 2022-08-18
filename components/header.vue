<template>
    <div class="header">
        <header>
            <div class="elements">
                <div class="element" @click="search()">
                    <img src="../assets/images/icons/search.svg" alt="">
                    <p>gözle</p>
                </div>
                <nuxt-link to="selling" class="element">
                    <img src="../assets/images/icons/coins.svg" alt="">
                    <p>satyş</p>
                </nuxt-link>
            </div>

            <nuxt-link to="/">
                <img src="../static/logo-light.svg" alt="">
            </nuxt-link>

            <div class="elements">
                <nuxt-link to="registration" class="element">
                    <img src="../assets/images/icons/bulb.svg" alt="">
                    <p>giriş</p>
                </nuxt-link>
                <div class="element">
                    <img src="../assets/images/icons/heart.svg" alt="">
                    <p>halanlarym</p>
                </div>
            </div>
        </header>

        <nav>
            <ul>
                <li v-for="(e, i) in categories" :key="i">
                    <nuxt-link :to="e.href">
                        {{ e.name_tm }}
                    </nuxt-link>
                    <img src="../assets/images/icons/dropdown.svg" v-if="e.sub_category">

                    <div class="sub_category" v-if="e.sub_category">
                        <div class="by_category">
                            <p class="title">Kategoriýa boýunça</p>

                            <p v-for="(a, s) in e.sub_category" :key="s">
                                <nuxt-link to="/products">{{ a }}</nuxt-link>
                            </p>

                        </div>
                        <div class="by_price">
                            <p class="title">Bahasy boýunça</p>

                            <p>
                                <nuxt-link to="/products">50M - 200M</nuxt-link>
                            </p>
                            <p>
                                <nuxt-link to="/products">200M - 500M</nuxt-link>
                            </p>
                            <p>
                                <nuxt-link to="/products">500M - </nuxt-link>
                            </p>

                        </div>
                        <div class="best_sellers">
                            <p>Satyjylardan köp satanlar</p>
                            <div class="best_sellers_products">
                                <VueSlickCarousel v-bind="settings">
                                    <div v-for="(e, i) in best_sellers" :key="i">
                                        <img :src="require('../assets/images/' + e.img)" alt="">
                                        <p>{{ e.name_tm }}</p>
                                    </div>
                                </VueSlickCarousel>
                            </div>

                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
export default {
    components: {
        VueSlickCarousel,
    },
    data() {
        return {
            categories: [
                {
                    id: 1,
                    name_tm: 'Aşhana',
                    name_ru: 'Питание',
                    sub_category: [
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
                    sub_category: [
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
                    sub_category: [
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
                    sub_category: [
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
                    sub_category: [
                        'Ýumşak oýunjak',
                        'Tagtadan oýunjak',
                        'Düzülýän oýunjak',
                    ],
                    href: '/products',
                    active: false
                },
            ],

            best_sellers: [
                {
                    img: 'best-seller-product.png',
                    name_tm: 'Gülli tort',
                    name_ru: 'Цветочный торт',
                },
                {
                    img: 'best-seller-product2.png',
                    name_tm: 'Etli somsa',
                    name_ru: 'Мясистая сомса',
                },
                {
                    img: 'best-seller-product3.png',
                    name_tm: 'Oliwýe salat',
                    name_ru: 'Оливковый салат',
                },
                {
                    img: 'best-seller-product4.png',
                    name_tm: 'Burger',
                    name_ru: 'бургер',
                },
                {
                    img: 'best-seller-product.png',
                    name_tm: 'Gülli tort',
                    name_ru: 'Цветочный торт',
                },
                {
                    img: 'best-seller-product2.png',
                    name_tm: 'Etli somsa',
                    name_ru: 'Мясистая сомса',
                },
                {
                    img: 'best-seller-product3.png',
                    name_tm: 'Oliwýe salat',
                    name_ru: 'Оливковый салат',
                },
                {
                    img: 'best-seller-product4.png',
                    name_tm: 'Burger',
                    name_ru: 'бургер',
                },

            ],
            settings: {
                dots: true,
                arrows: true,
                focusOnSelect: true,
                infinite: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 3,
                touchThreshold: 5,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            initialSlide: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            },
            isSearchActive: false,
        }
    },
    computed: {
        isSearch(){
            return this.isSearchActive;
        }
    },
    methods: {
        search(){
            this.isSearchActive = true;
            this.$emit('isSearchActive', this.isSearch)
        }
    }
}
</script>
