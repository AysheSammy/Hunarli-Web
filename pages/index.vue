<template>
    <div class="home">

        <div class="banner">
            <VueSlickCarousel v-bind="settings">
                <div class="slide" v-for="(e, i) in banners" :key="i">
                    <img :src="require('./../assets/images/' + e.img)" alt="">
                    <div class="banner_text">
                        <p>
                            {{ e.title_tm }}
                        </p>
                    </div>
                </div>
            </VueSlickCarousel>
        </div>

        <div class="category_banners">
            <Category_banner v-for="(e, i) in category_banner"  :key="i" :infos="e"/>
        </div>

    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import CategoryBanner from '@/components/category_banner.vue';
import Category_banner from '../components/category_banner.vue';
export default {
    components: {
    VueSlickCarousel,
    CategoryBanner,
    Category_banner
},
    data() {
        return {
            banners: [
                {
                    img: 'banner-img.png',
                    title_tm: 'Sat we satyn al. Hünärleriň bilen gazan!',
                    title_ru: 'Sat we satyn al. Hünärleriň bilen gazan!'
                },
                {
                    img: 'banner-img.png',
                    title_tm: 'Sat we satyn al. Hünärleriň bilen gazan!',
                    title_ru: 'Sat we satyn al. Hünärleriň bilen gazan!'
                },
                {
                    img: 'banner-img.png',
                    title_tm: 'Sat we satyn al. Hünärleriň bilen gazan!',
                    title_ru: 'Sat we satyn al. Hünärleriň bilen gazan!'
                },
            ],
            settings: {
                dots: true,
                arrows: true,
                dotsClass: "slick-dots",
                edgeFriction: 0.35,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                pauseOnHover: true
            },
            category_banner: [
                {
                    id: 1,
                    bg_image: 'meal_banner_bg.png',
                    title: 'Öýde bişen naharlar...',
                    products: [
                        {
                            img: '1.png',
                            name_tm: 'Etli Somsa',
                            name_ru: 'Etli Somsa',
                            price: 20
                        },
                        {
                            img: '1.png',
                            name_tm: 'Etli Somsa',
                            name_ru: 'Etli Somsa',
                            price: 20
                        },
                        {
                            img: '1.png',
                            name_tm: 'Etli Somsa',
                            name_ru: 'Etli Somsa',
                            price: 20
                        },
                    ]
                },
                {
                    id: 2,
                    bg_image: 'clothes_banner_bg.png',
                    title: 'Egin-eşikler',
                    products: [
                        {
                            img: '2.png',
                            name_tm: 'Etli Somsa',
                            name_ru: 'Etli Somsa',
                            price: 20
                        },
                        {
                            img: '2.png',
                            name_tm: 'Etli Somsa',
                            name_ru: 'Etli Somsa',
                            price: 20
                        },
                        {
                            img: '2.png',
                            name_tm: 'Etli Somsa',
                            name_ru: 'Etli Somsa',
                            price: 20
                        },
                    ]
                },
                {
                    id: 3,
                    bg_image: 'jewelry_banner_bg.png',
                    title: 'Şaý-sepler',
                    products: [
                        {
                            img: '3.png',
                            name_tm: 'Etli Somsa',
                            name_ru: 'Etli Somsa',
                            price: 20
                        },
                        {
                            img: '3.png',
                            name_tm: 'Etli Somsa',
                            name_ru: 'Etli Somsa',
                            price: 20
                        },
                        {
                            img: '3.png',
                            name_tm: 'Etli Somsa',
                            name_ru: 'Etli Somsa',
                            price: 20
                        },
                    ]
                },
                {
                    id: 4,
                    bg_image: 'toys_banner_bg.png',
                    title: 'Oýunjaklar',
                    products: [
                        {
                            img: '4.png',
                            name_tm: 'Etli Somsa',
                            name_ru: 'Etli Somsa',
                            price: 20
                        },
                        {
                            img: '4.png',
                            name_tm: 'Etli Somsa',
                            name_ru: 'Etli Somsa',
                            price: 20
                        },
                        {
                            img: '4.png',
                            name_tm: 'Etli Somsa',
                            name_ru: 'Etli Somsa',
                            price: 20
                        },
                    ]
                },
            ]
        }
    }
}
</script>
