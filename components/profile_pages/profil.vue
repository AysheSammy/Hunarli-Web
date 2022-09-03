<template>
    <div class="profil">
        <h4>{{ $t('personal_info_title') }}</h4>

        <div class="datas">
            <div class="input">
                <label for="name">{{ $t('namePlaceholder') }}</label>
                <input type="text" v-model="users[0].name" disabled>
            </div>
            <div class="input">
                <label for="name">{{ $t('username') }}</label>
                <input type="text" v-model="users[0].username" disabled>
            </div>
            <div class="input">
                <label for="name">{{ $t('phone') }}</label>
                <input type="text" v-model="users[0].phone" disabled>
            </div>
            <div class="input">
                <label for="name">{{ $t('userPassword') }}</label>
                <div class="password">
                    <input :type="passwordType" name="password" id="password" v-model="users[0].password" disabled>
                    <img src="~/assets/images/icons/eye-open.png" v-if="seePasswordData" @click="seePassword"
                        class="eye">
                    <img src="~/assets/images/icons/eye-closed.png" v-else @click="seePassword" class="eye">
                </div>
            </div>
            <div class="input">
                <label for="name">{{ $t('address') }}</label>
                <input type="text" v-model="users[0].address[0]" disabled>
            </div>
            <button @click="changeUserInfo">{{ $t('personal_btn_text') }}</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            seePasswordData: false,
            passwordType: 'password',
        }
    },
    computed: {
        users() {
            return this.$store.getters['users/users']
        }
    },
    methods: {
        seePassword() {
            if (this.passwordType === 'password') {
                this.passwordType = 'text';
            } else {
                this.passwordType = 'password';
            }
            this.seePasswordData = !this.seePasswordData;
        },
        changeUserInfo() {
            this.$store.dispatch('changeUserInfo', { index: 0, userData: this.users[0] })
            console.log(this.$store.getters['users/users']);
        }
    }
}
</script>

<style>
</style>