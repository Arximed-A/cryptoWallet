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
}
.img {
  height: 32px;
  width: 32px;
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
}
</style>
