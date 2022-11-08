<template>
  <div class="page">
    <HomePage />
  </div>
</template>

<script>
import HomePage from "./views/HomePage.vue";
export default {
  components: { HomePage },
  mounted() {
    // $route.push("/dashboard");
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Roboto:wght@400;500;700&family=Urbanist:wght@400;700&display=swap");
* {
  font-family: "Inter";
  font-size: 16px;
  font-weight: 500;
  color: white;
}
body {
  margin: 0px;
}
a {
  text-decoration: none;
}
.page {
  height: 100vh;
  width: 100%;
  background: url("./assets/bg/bg.png") 100% no-repeat, #000000;
  // background: #000000;
}
</style>
