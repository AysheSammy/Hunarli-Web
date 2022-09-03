<template>
    <div class="search_bar">
        <div class="search">
            <img src="./../assets/images/icons/search.svg" alt="">
            <input type="text" :placeholder="$t('searchText')" v-model="search_word">
        </div>
        <button>{{ $t('search') }}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search_word: ''
        }
    }
}
</script>

<style>
</style>