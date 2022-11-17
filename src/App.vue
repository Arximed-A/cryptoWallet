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
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: white;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  box-sizing: border-box;
}
body {
  margin: 0px;
}
a {
  text-decoration: none;
}
li {
  list-style-type: none;
}
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100%;
  background: url("./assets/bg/bg.png") 0 0 / 100% no-repeat, #000000;
}
</style>
