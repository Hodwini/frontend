<script>
export default {
  data() {
    return {
      isCopied: false,
    };
  },
  methods: {
    async copyURL(mytext) {
      try {
        await navigator.clipboard.writeText(mytext);
        this.isCopied = true;
        setTimeout(() => {
          this.isCopied = false;
        }, 2000);
      } catch ($e) {}
    },
  },
};
</script>

<template>
  <transition name="fade">
    <main>
      <div class="main_image">
        <img src="../components/icons/Picture.png" alt="" />
      </div>
      <div class="main_description">
        <h1>Лисий Остров</h1>
        <!-- <p>Окунитесь в удивительное</p>
        <p>путешествие на неожиданно</p>
        <p>появившемся “Лисьем Острове”!</p>
        <p>Казалось бы обычное ванильное</p>
        <p>выживание может обернуться</p>
        <p>весьма интересной игрой.</p> -->
        <p>
          Окунитесь в удивительное путешествие на неожиданно появившемся “Лисьем
          Острове”! Казалось бы обычное ванильное выживание может обернуться
          весьма интересной игрой.
        </p>
        <div class="social_info">
          <div class="play_btn">
            <img src="../components/icons/Base.png" alt="" />
            <span @click="copyURL(`mc.hodwini.net`)" class="socail_btn"
              >Играть</span
            >
            <transition>
              <div v-if="isCopied" class="copy-success-message active">
                Текст успешно скопирован!
              </div>
            </transition>
          </div>
          <div class="social_icons">
            <a href="https://discord.gg/qQ6sB8E2kh">
              <img
                class="social_icon"
                src="../components/icons/Discord.png"
                alt=""
              />
            </a>
            <a href="https://t.me/hodwini">
              <img
                class="social_icon"
                src="../components/icons/Telegram.png"
                alt=""
            /></a>
            <a href="https://vk.com/hodwini">
              <img
                class="social_icon"
                src="../components/icons/Vkontakte.png"
                alt=""
            /></a>
          </div>
        </div>
      </div>
    </main>
  </transition>
</template>
<style lang="scss">
@import url(../assets/main.scss);
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
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
