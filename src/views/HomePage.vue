<template>
  <main class="page">
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
.page {
  margin: 0px auto;
  max-width: 1078px;
  min-height: 767px;
  // background: #000000, url("../assets/bg/bg.png");
  // background-color: grey;
}
</style>
