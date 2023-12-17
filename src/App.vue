<script>
import Navbar from "./components/Navbar.vue";
import MainPage from "./views/MainPage.vue";
import Footer from "./components/Footer.vue";
import Preloader from "./components/Preloader.vue";
export default {
  data() {
    return {
      showPreloader: true,
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      setTimeout(() => {
        this.showPreloader = false;
      }, 2000);
    },
  },
  components: {
    Navbar,
    MainPage,
    Footer,
    Preloader,
  },
};
</script>

<template>
  <div id="app" class="mobile">
     <Transition name="fade">
    <preloader v-if="showPreloader" />
  </Transition>
  <Transition>
    <Navbar></Navbar>
  </Transition>
  <Transition name="fade">
     <RouterView></RouterView> 
  </Transition>

  <Footer></Footer> </div>
 
</template>

<style lang="scss">
#app{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
}
.preloader {
  overflow-x: hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
