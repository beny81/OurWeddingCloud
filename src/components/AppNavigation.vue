<script>
import NavItem from './NavItem.vue'
import AppLogo from './AppLogo.vue'
import { Popover } from 'bootstrap' // Ensure this import is present
import ModalPost from './ModalPost.vue'
import router from '../router'
import store from '../store'

export default {
  mounted() {
    // Initialize all elements with data-bs-toggle="popover"
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    popoverTriggerList.forEach((popoverTriggerEl) => {
      new Popover(popoverTriggerEl)
    })
  },
  components: {
    NavItem,
    AppLogo,
    ModalPost,
  },
  methods: {
    logout() {
      // Dispatch the logout action
      store.dispatch('auth/logout')

      // Navigate to the Login page
      router.push({ path: '/login', query: { showLogout: true } })
    },
  },
}
</script>

<template>
  <main class="sticky-top row">
    <ul class="col offset-1 nav flex-column">
      <AppLogo />

      <NavItem :to="'/home'" item="Accueil">
        <image href="../assets/iconBootstrap/accueil.svg" x="0" y="0" width="30" height="25" />
      </NavItem>
      <NavItem :to="'/Explorer'" item="Explorer">
        <image href="../assets/iconBootstrap/search.svg" x="0" y="0" width="30" height="25" />
      </NavItem>
      <NavItem :to="'/Notifications'" item="Notifications">
        <image href="../assets/iconBootstrap/bell.svg" x="0" y="0" width="30" height="25" />
      </NavItem>
      <NavItem :to="'/calendar'" item="Calendar">
        <image href="../assets/iconBootstrap/calender.svg" x="0" y="0" width="30" height="25" />
      </NavItem>
      <NavItem :to="'/map'" item="Maps">
        <image href="../assets/iconBootstrap/maps.svg" x="0" y="0" width="30" height="25" />
      </NavItem>
      <NavItem :to="'/Story'" item="Story">
        <image href="../assets/iconBootstrap/book.svg" x="0" y="0" width="30" height="25" />
      </NavItem>
      <NavItem :to="'/Favoris'" item="Favoris">
        <image href="../assets/iconBootstrap/bookmark.svg" x="0" y="0" width="30" height="25" />
      </NavItem>
      <NavItem :to="'/profil'" item="Profil">
        <image href="../assets/iconBootstrap/person-fill.svg" x="0" y="0" width="30" height="25" />
      </NavItem>

      <ModalPost :ModalId="'AppNavigation'" />

      <NavItem @click="logout" :to="'#'" item="Logout">
        <image href="../assets/iconBootstrap/logout.svg" x="0" y="0" width="30" height="25" />
      </NavItem>
    </ul>
  </main>
</template>
