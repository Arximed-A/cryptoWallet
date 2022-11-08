<template>
  <main class="body">
    <HeaderBase />
    <div class="wrapper">
      <div class="wrapper__bar">
        <SideBar />
      </div>
      <div class="wrapper__main">
        <router-view />
      </div>
      <div class="wrapper__info">
        <InfoPanel />
      </div>
    </div>
  </main>
</template>

<script>
import HeaderBase from "@/components/HeaderBase.vue";
import SideBar from "@/components/Sidebar/SideBar.vue";
import InfoPanel from "@/components/InfoPanel/InfoPanel.vue";
import { mapActions } from "vuex";

export default {
  name: "HomePage",
  components: { HeaderBase, SideBar, InfoPanel },
  methods: {
    ...mapActions({
      getUser: "getUser",
    }),
  },
  async mounted() {
    await this.getUser();
  },
};
</script>

<style lang="scss">
.body {
  margin: 0px auto;
  // width: 56.15%;
  max-width: 1440px;
  // height: 766px / 960px * 100%;
  background: url("../assets/bg/bgMenu.png") 100% no-repeat, #000000;
  // background: #000000;
  border: 1px solid white;
  border-radius: 40px;
  padding: 0px 41px / 1440px * 100%;
}
.wrapper {
  display: flex;
  justify-content: space-between;

  &__bar {
    flex: 0 0 233px / 1440px * 100%;
  }
  &__main {
    flex: 0 0 773px / 1440px * 100%;
  }
  &__info {
    flex: 0 0 284px / 1440px * 100%;
  }
}
</style>
<!-- url("https://raw.githubusercontent.com/Arximed-A/crypto_wallet/main/src/assets/bg/bgMenu.png") -->
