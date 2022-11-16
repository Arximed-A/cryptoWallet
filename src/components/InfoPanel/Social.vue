<template>
  <section class="container">
    <img src="../../assets/group.png" alt="people" class="img" />
    <h3 class="title">Join Our Community</h3>
    <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <ButtonBase text="Join Now" />
  </section>
</template>

<script>
import ButtonBase from "../UI/ButtonBase.vue";
export default {
  components: { ButtonBase },
  name: "Social",
};
</script>

<style scoped>
.container {
  height: 281px;
  background: rgba(29, 29, 29, 0.6);

  border-radius: 16px;
  padding: 24px 29px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  margin: 0px 0px 12px 0px;
}
.text {
  font-size: 10px;
  font-weight: 400;
  margin: 0px 0px 15px 0px;
  text-align: center;
  letter-spacing: 0.01em;
  line-height: 150%;
}
.img {
  margin: 0px 0px 27px 0px;
  cursor: pointer;
}
</style>
