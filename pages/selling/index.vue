<template>
    <div class="selling">
        <h3>Haryt goş</h3>

        <div class="form">
            <div class="input">
                <input type="text" v-model="product_name" :placeholder="$t('add_product_name')">
            </div>

            <div class="input">
                <input type="num" v-moedl="price" :placeholder="$t('add_product_price')">
            </div>

            <div class="input">
                <div class="dropdown">
                    <div class="dropdown_title" @click="showCateg">
                        <p>{{ $tt('Kategoriýa saýla', 'Выберите категорию') }}</p>
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.65156 6.26872L8.94001 2.53543C9.00785 2.45545 9.04439 2.36263 9.04601 2.2662C9.04763 2.16977 9.01426 2.0731 8.94922 1.9858C8.88418 1.8985 8.78975 1.82361 8.67531 1.76859C8.56087 1.71357 8.43042 1.68034 8.29693 1.67219L1.8206 1.32846C1.68709 1.32244 1.55596 1.34179 1.44026 1.38459C1.32456 1.4274 1.22833 1.49216 1.16113 1.57245C1.09394 1.65273 1.05813 1.74573 1.05726 1.8422C1.05639 1.93866 1.0905 2.03523 1.15619 2.1223L4.34407 6.19933C4.41118 6.28411 4.50627 6.35631 4.62019 6.40896C4.7341 6.46161 4.86298 6.49294 4.99439 6.49991C5.1258 6.50689 5.25532 6.48928 5.37043 6.44878C5.48554 6.40829 5.58237 6.34627 5.65156 6.26872Z"
                                fill="#333333" fill-opacity="0.9" stroke="#333333" stroke-opacity="0.9"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div class="dropdown_menu" v-if="showCategory">
                        <ul>
                            <li v-for="(e, i) in categories" :key="i">
                                {{ $tt(e.name_tm, e.name_ru) }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="input">
                <textarea name="description" cols="30" rows="5" :placeholder="$t('add_product_description')"
                    v-model="description"></textarea>
            </div>

            <div class="input">
                <input type="tel" name="phone" :placeholder="$t('add_product_address')" v-model="address">
            </div>

            <div class="input image"> 
                <img src="" height="200" v-if="showImg" alt="Image preview...">
                <div class="file">
                    <input type="file" @change="previewFile()" accept=".jpg, .jpeg, .png">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M28 11V25.1125C28 25.3479 27.9065 25.5736 27.7401 25.7401C27.5736 25.9065 27.3479 26 27.1125 26H5C4.73478 26 4.48043 25.8946 4.29289 25.7071C4.10536 25.5196 4 25.2652 4 25V8C4 7.73478 4.10536 7.48043 4.29289 7.29289C4.48043 7.10536 4.73478 7 5 7H11.6625C11.8787 7.00089 12.089 7.07098 12.2625 7.2L15.7375 9.8C15.911 9.92902 16.1213 9.99911 16.3375 10H27C27.2652 10 27.5196 10.1054 27.7071 10.2929C27.8946 10.4804 28 10.7348 28 11Z"
                            stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13 18H19" stroke="#101828" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M16 15V21" stroke="#101828" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                </div>
            </div>
            <button>{{ $tt('Haryt Goş', 'Добавить товар') }}</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showCategory: false,
            showImg: false,
        }
    },
    computed: {
        categories() {
            return this.$store.getters['categories/categories'];
        },
        showCat() {
            return this.showCategory;
        }
    },
    methods: {
        showCateg() {
            return this.showCategory = !this.showCategory;
        },
        previewFile() {
            var preview = document.querySelector('img');
            var file = document.querySelector('input[type=file]').files[0];
            var reader = new FileReader();

            reader.onloadend = function () {
                preview.src = reader.result;
            }

            if (file) {
                reader.readAsDataURL(file);
                this.showImg - true
            } else {
                preview.src = "";
            }
        },
        addNewProduct(){
            return this.$store.dispatch('products')
        }
    }
}
</script>

<style>
</style>