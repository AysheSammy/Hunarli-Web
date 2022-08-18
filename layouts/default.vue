<template>
    <div class="main">
        <Header />
        <SearchBar @isSearchActive="search" v-if="isSearch"/>
        <nuxt />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import SearchBar from '@/components/search_bar.vue';

export default {
    components: {
        Header,
        Footer,
        SearchBar,
    },
    data(){
        return{
            isSearch: false,
        }
    },
    methods:{
        search(val){
            this.isSearch = val;
        }
    }
}
</script>

<style>
</style>