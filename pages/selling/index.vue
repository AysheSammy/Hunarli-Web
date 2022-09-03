<template>
    <div class="selling">
        <h3>Haryt goş</h3>

        <div class="form">
            <div class="input">
                <input type="text" v-model="product_name" placeholder="Harydyň ady">
            </div>

            <div class="input">
                <input type="num" v-moedl="price" placeholder="Harydyň bahasy">
            </div>

            <div class="input">
                <div class="dropdown">
                    <div class="dropdown_title">
                        <p>Kategoriýa saýla</p>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.65156 6.26872L8.94001 2.53543C9.00785 2.45545 9.04439 2.36263 9.04601 2.2662C9.04763 2.16977 9.01426 2.0731 8.94922 1.9858C8.88418 1.8985 8.78975 1.82361 8.67531 1.76859C8.56087 1.71357 8.43042 1.68034 8.29693 1.67219L1.8206 1.32846C1.68709 1.32244 1.55596 1.34179 1.44026 1.38459C1.32456 1.4274 1.22833 1.49216 1.16113 1.57245C1.09394 1.65273 1.05813 1.74573 1.05726 1.8422C1.05639 1.93866 1.0905 2.03523 1.15619 2.1223L4.34407 6.19933C4.41118 6.28411 4.50627 6.35631 4.62019 6.40896C4.7341 6.46161 4.86298 6.49294 4.99439 6.49991C5.1258 6.50689 5.25532 6.48928 5.37043 6.44878C5.48554 6.40829 5.58237 6.34627 5.65156 6.26872Z"
                                fill="#333333" fill-opacity="0.9" stroke="#333333" stroke-opacity="0.9"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div class="dropdown_menu">
                        <ul>
                            <li v-for="(e, i) in categories" :key="i">
                                {{ e.name_tm }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="input">
                <textarea name="description" cols="30" rows="5" placeholder="Haryt barada başga maglumatlar"
                    v-model="description"></textarea>
            </div>

            <div class="input">
                <input type="tel" name="phone" placeholder="Adres giriz" v-model="address">
            </div>

            <div class="input">
                <input type="file" >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    computed: {
        categories() {
            return this.$store.getters['categories/categories'];
        },
    }
}
</script>

<style>
</style>