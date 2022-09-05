<template>
  <section class="profile">
    <h3>{{$tt('Hasabym')}}</h3>
    <div class="profile_drawer">
      <div class="drawer">
        <ul>
          <li v-for="(e, i) in profile_links" :key="i" :class="{ 'active': e.active }" @click="changeActive(i)">
            <img :src="require('../../assets/images/icons/' + e.icon)" alt="">
            {{ $tt(e.name_tm, e.name_ru) }}
          </li>
        </ul>
      </div>

      <div class="drawer_page">
        <my-products v-if="global_index == 0" />
        <likes-page v-else-if="global_index == 1" />
        <profil-page v-else />
      </div>
    </div>
  </section>
</template>

<script>
import ProfilPage from '@/components/profile_pages/profil.vue';
import MyProducts from '~/components/profile_pages/my_products.vue';
import LikesPage from '@/components/profile_pages/likes.vue';

export default {
  components: {
    ProfilPage,
    MyProducts,
    LikesPage,
  },
  data() {
    return {
      profile_links: [
        {
          name_tm: 'Goýan harytlarym',
          name_ru: 'asdfhaksdjf',
          icon: 'my_products.svg',
          active: true,
          link: ''
        },
        {
          name_tm: 'Halanlarym',
          name_ru: 'asdfhaksdjf',
          icon: 'heart-dark.svg',
          active: false,
        },
        {
          name_tm: 'Profilim',
          name_ru: 'asdfhaksdjf',
          icon: 'user-dark.svg',
          active: false,
        },
      ],
      global_index: 0,
    }
  },
  methods: {
    changeActive(i) {
      this.global_index = i;
      for (let i = 0; i < this.profile_links.length; i++) {
        this.profile_links[i].active = false;
      }
      this.profile_links[i].active = true;
    }
  }
}
</script>

<style>
</style>