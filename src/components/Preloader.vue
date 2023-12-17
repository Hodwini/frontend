<script></script>
<template>
  <Transition name="bounce">
    <div class="preloader">
      <img src="../components/icons/preLoader.gif" alt="" />
    </div>
  </Transition>
</template>
<style lang="scss">
.preloader {
  background-color: rgba(17, 19, 23, 1);
  z-index: 9999;
  width: 100%;
  height: 100%;
  position: fixed;
  margin: 0 auto;
  
  display: flex;
  justify-content: center;
  & img {
    position: absolute;
    top: 40%;
    width: 293.556px;
    height: 200px;
  }
}
.bounce-enter-active,
.bounce-leave-active {
  animation: bounce-in 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
