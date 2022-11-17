<template>
  <div class="box">
    <div class="wrapper">
      <img
        class="img"
        :src="require(`./../../assets/icons/${icon}.svg`)"
        alt=""
      />
    </div>
    <div class="description">
      <div class="title">{{ title }}</div>
      <div v-if="!procent" class="number">$ {{ numbers }}</div>
      <div v-else class="number">+ {{ numbers }} %</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoItem",
  props: {
    title: String,
    icon: String,
    numbers: Number,
    procent: Boolean,
  },
};
</script>

<style lang="scss" scoped>
// $md4: 576px;
// $md3: 768px;
$md2: 1024px;
$md1: 1200px;

.box {
  display: flex;
  align-items: center;
}
.wrapper {
  height: 60px;
  width: 60px;
  border-radius: 14px;
  background: rgba(176, 176, 176, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 9px 0px 0px;
  @media (max-width: $md1) {
    width: 40px;
    height: 40px;
  }
}
.img {
  height: 32px;
  width: 32px;
  @media (max-width: $md1) {
    height: 25px;
    width: 25px;
  }
}
.description {
}
.title {
  font-size: 14px;
  margin: 0px 0px 4px 0px;
}
.number {
  font-size: 24px;
  font-weight: 700;
  @media (max-width: $md1) {
    font-size: 16px;
  }
}
</style>
