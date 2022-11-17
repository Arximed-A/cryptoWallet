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
  async created() {
    await this.getUser();
  },
};
</script>

<style lang="scss" scoped>
// $md4: 576px;
// $md3: 768px;
$md2: 1024px;
$md1: 1200px;
.body {
  flex: 0 0 auto;
  width: 1440px;
  // max-width: 1440px;
  height: 767px / 960px * 100%;
  background: url("../assets/bg/bgMenu.png") 0 0 / 100% no-repeat, #000000;
  border: 1px solid white;
  border-radius: 40px;
  padding: 0px 40px / 1440px * 100% 40px;
  @media (max-width: 1500px) {
    width: 99%;
    padding: 0px 10px 10px;
  }
}
.wrapper {
  display: flex;
  justify-content: space-between;

  &__bar {
    flex: 0 1 233px;
    @media (max-width: $md2) {
      display: none;
    }
  }
  &__main {
    flex: 1 1 773px;
    margin: 0px 30px;
  }
  &__info {
    flex: 0 1 284px;
  }
}
.conteiner {
  width: 100%;
  min-height: 593px;
  background: rgba(28, 28, 28, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 45px;
  @media (max-width: $md1) {
    padding: 3%;
  }
}
</style>
