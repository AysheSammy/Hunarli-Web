<template>
    <div class="sign">
        <h4>{{$t('login')}}</h4>

        <div class="form">
            <input type="text" name="username" id="username" :placeholder="$t('userDataPlaceholder')"
                v-model="username">
            <div class="password">
                <input :type="passwordType" name="password" id="password" :placeholder="$t('userPassword')"
                    v-model="password">
                <img src="~/assets/images/icons/eye-open.png" v-if="seePasswordData" @click="seePassword" class="eye">
                <img src="~/assets/images/icons/eye-closed.png" v-else @click="seePassword" class="eye">
            </div>
            <button @click="confirmUser">{{ $t('send_btn_text') }}</button>
        </div>
        <p>{{ $t('youSigned') }}</p>
        <button @click="notConfirmed">{{$t('signUp')}}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            seePasswordData: false,
            passwordType: 'password',
        }
    },

    methods: {
        confirmUser() {
            this.$store.dispatch('users/confirmUser', { userdata: this.username, userPassword: this.password },);
            if (this.$store.getters['users/isConfirmed']) {
                this.$store.dispatch('login');
            }
        },

        seePassword() {
            if (this.passwordType === 'password') {
                this.passwordType = 'text';
            } else {
                this.passwordType = 'password';
            }
            this.seePasswordData = !this.seePasswordData;
        },
        notConfirmed() {
            this.$store.dispatch('users/notConfirmed');
        }
    }
}
</script>

<style>
</style>