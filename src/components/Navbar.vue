<script>
export default {
  data() {
    return {
      isBar: false,
      isDesktop: true,
      menuOpened: false,
      // Вообще не очень гуд так делать, ибо роуты должны
      // передаваться в пропсах, но пох ибо переписывать будем
      navLinks: [
        { path: '/', text: 'Главная', name: 'home' },
        { path: '/rules', text: 'Правила', name: 'rules' },
        { path: '/about', text: 'О проекте', name: 'about' },
      ]
    };
  },
  created() {
    const mediaQuery = window.matchMedia("(min-width: 1230px)");
    this.isDesktop = mediaQuery.matches;

    mediaQuery.addListener((e) => {
      this.isDesktop = e.matches;
    });
  },
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  },
  methods: {
    changeBar() {
      this.isBar = !this.isBar;
    },
    openMenu() {
      this.menuOpened = true;
      this.isBar = !this.isBar;
    },
  },
};
</script>
<template>
  <nav>
    <div class="menu">
      <div class="dekstop_menu mobile">
        <div class="nav_logo">
          <img src="../components/icons/Logo (2).png" alt="" />
          <RouterLink to="/"><p>Hodwini</p></RouterLink>
        </div>
        <Transition>
          <div class="nav mobile-menu" v-if="isBar || isDesktop">
            <ul class="bar">
              <RouterLink v-for="link in navLinks" :key="link.name" v-bind:to="link.path">
                <li
                  v-bind:class="'list_item' + (link.name === currentRouteName ? ' active' : '')"
                >
                  {{ link.text }}
                </li>
              </RouterLink>
              <li class="list_item">Донат</li>
            </ul>
          </div>
        </Transition>
      </div>
      <div class="mobile_nav" v-if="!isDesktop">
        <img @click="openMenu" src="../components/icons/image_1.png" alt="" />
      </div>
    </div>

    <!-- <div class="nav" v-if="isBar">
      <ul class="bar">
        <li class="list_item">Главная</li>
        <li class="list_item">О проекте</li>
        <li class="list_item">Донат</li>
      </ul>
    </div>
    <div class="mobile_nav" v-else>
      <img @click="changeBar" src="../components/icons/image_1.png" alt="" />
    </div> -->
  </nav>
</template>
<style lang="scss">
@import url(../assets/navabar.scss);
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
