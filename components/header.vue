<template>
    <div class="header_all">
        <div class="header">
            <header>
                <div class="elements">
                    <div class="element" @click="search">
                        <img src="../assets/images/icons/search.svg" alt="">
                        <p>{{ $tt('gözle', 'поиск') }}</p>
                    </div>
                    <nuxt-link :to="isAuth ? '/selling' : '/registration'" class="element">
                        <img src="../assets/images/icons/coins.svg" alt="">
                        <p>{{ $tt('satyş', 'продавать') }}</p>
                    </nuxt-link>
                </div>

                <nuxt-link to="/">
                    <img src="../static/logo-light.svg" alt="">
                </nuxt-link>

                <div class="elements">
                    <nuxt-link v-if="isAuth" to="profile" class="element">
                        <img src="../assets/images/icons/bulb.svg" alt="">
                        <p>{{ $tt('profil', 'профиль') }}</p>
                    </nuxt-link>

                    <nuxt-link v-else to="registration" class="element">
                        <img src="../assets/images/icons/bulb.svg" alt="">
                        <p>{{ $tt('giriş', 'авторизоваться') }}</p>
                    </nuxt-link>

                    <div class="element" @click="seeFavorite">
                        <div class="like">
                            <img src="../assets/images/icons/heart.svg" alt="">
                            <span v-if="number_liked > 0">{{ number_liked }}</span>
                        </div>
                        <p>{{ $tt('halanlarym', 'нравится') }}</p>
                    </div>
                </div>
            </header>

            <nav>
                <ul>
                    <li v-for="(e, i) in categories" :key="i">
                        <nuxt-link :to="e.href">
                            {{ $tt(e.name_tm, e.name_ru) }}
                        </nuxt-link>
                        <img src="../assets/images/icons/dropdown.svg" v-if="e.sub_category_tm">

                        <div class="sub_category" v-if="e.sub_category_tm">
                            <div class="by_category">
                                <p class="title">{{ $tt('Kategoriýa boýunça', 'По категории') }}</p>

                                <p v-for="(a, s) in e.sub_category_tm" :key="s">
                                    <nuxt-link v-if="lang == 'tm'" to="/products">{{ a }}</nuxt-link>
                                </p>

                                <p v-for="(a, s) in e.sub_category_ru" :key="s">
                                    <nuxt-link v-if="lang == 'ru'" to="/products">{{ a }}</nuxt-link>
                                </p>


                            </div>
                            <div class="by_price">
                                <p class="title">{{ $tt('Bahasy boýunça', 'По цене') }}</p>

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
                                <p>{{ $tt('Satyjylardan köp satanlar', 'Бестселлеры') }}</p>
                                <div class="best_sellers_products">
                                    <VueSlickCarousel v-bind="settings">
                                        <div v-for="(e, i) in best_sellers" :key="i">
                                            <img :src="require('../assets/images/' + e.img)" alt="">
                                            <p>{{ $tt(e.name_tm, e.name_ru) }}</p>
                                        </div>
                                    </VueSlickCarousel>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li>
                        <button v-for="(e, i) in locales" :key="i" :class="{ 'active': e.code == lang }"
                            @click="$i18n.setLocale(e.code)">{{ e.name
                            }}</button>
                    </li>
                </ul>
                <nuxt-link to="/products" class="categories_title">{{ $tt('Kategoriýalar', 'Категории') }}</nuxt-link>
            </nav>

        </div>
        <SearchBar v-if="isSearchActive" />
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import SearchBar from '@/components/search_bar.vue';
export default {
    components: {
        VueSlickCarousel,
        SearchBar,
    },
    data() {
        return {
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
    methods: {
        search() {
            this.isSearchActive = !this.isSearchActive;
        },
        seeFavorite() {
            this.$emit('see-favorite');
        }
    },
    computed: {
        categories() {
            return this.$store.getters['categories/categories'];
        },
        isAuth() {
            return this.$store.getters.isAuthenticated;
        },
        locales() {
            return this.$i18n.locales
        },
        lang() {
            return this.$i18n.locale
        },
        number_liked() {
            return this.$store.getters['liked/count_liked']
        }
    }
}
</script>
