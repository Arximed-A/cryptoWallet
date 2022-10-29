<template>
  <main class="body">
    <HeaderBase />
  </main>
</template>

<script>
import HeaderBase from "@/components/HeaderBase.vue";
export default {
  name: "Home",
  components: { HeaderBase },
};
</script>

<style lang="scss">
.body {
  margin: 0px auto;
  max-width: 1440px;
  // min-height: 1024px;
  // background: url("../assets/bg/bg.png"), #000000;
  background: #000000;
  border: 1px solid white;
}
</style>
<!-- url("https://raw.githubusercontent.com/Arximed-A/crypto_wallet/main/src/assets/bg/bgMenu.png") -->
