<template>
    <div class="sign">
        <h4></h4>
        <div class="form">
            <input type="text" name="name" id="name" :placeholder="$t('namePlaceholder')" v-model="userData.name">
            <input type="text" name="username" id="username" :placeholder="$t('username')" v-model="userData.username">
            <input type="tel" name="phone" id="phone" :placeholder="$t('phone')" v-model="userData.phone">
            <input type="text" name="address" id="address" :placeholder="$t('address')" v-model="userData.address[0]">
            <div class="password">
                <input :type="passwordType" name="password" id="password" :placeholder="$t('userPassword')"
                    v-model="userData.password">
                <img src="~/assets/images/icons/eye-open.png" v-if="seePasswordData" @click="seePassword" class="eye">
                <img src="~/assets/images/icons/eye-closed.png" v-else @click="seePassword" class="eye">
            </div>
            <div class="password">
                <input :type="confirmPasswordType" name="confirmPassword" id="confirmPassword"
                    :placeholder="$t('confirmPassword')" v-model="confirmPassword">
                <img src="~/assets/images/icons/eye-open.png" v-if="seeConfirmPasswordData" @click="seeConfirmPassword"
                    class="eye">
                <img src="~/assets/images/icons/eye-closed.png" v-else @click="seeConfirmPassword" class="eye">
            </div>


            <button @click="submit">{{ $t('signUp') }}</button>
        </div>

        <p>{{ $t('youLogged') }}</p>
        <button @click="confirmed">{{ $t('login') }}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userData: {
                id: 0,
                name: '',
                username: '',
                phone: null,
                address: [],
                password: '',
                regTime: '25.08.2022'

            },
            confirmPassword: '',
            seePasswordData: false,
            passwordType: 'password',
            seeConfirmPasswordData: false,
            confirmPasswordType: 'password'
        }
    },
    methods: {
        submit() {
            if (this.userData.name != '' && this.userData.username != '' && this.userData.phone != null && this.userData.password != '' && this.userData.password == this.confirmPassword) {
                this.userData.id += 1
                this.$store.dispatch('users/addUser', { data: this.userData });
                this.$store.dispatch('login');
                console.log(this.$store.getters.isAuthenticated);


                this.userData.name == '' &&
                    this.userData.username == '' &&
                    this.userData.phone == null &&
                    this.userData.password == '' &&
                    this.confirmPassword == ''
            } else {
                alert('yalnyslyk bar!')
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
        seeConfirmPassword() {
            if (this.confirmPasswordType === 'password') {
                this.confirmPasswordType = 'text';
            } else {
                this.confirmPasswordType = 'password';
            }
            this.seeConfirmPasswordData = !this.seeConfirmPasswordData;
        },
        confirmed() {
            this.$store.dispatch('users/confirmed');
        }
    },
}
</script>
