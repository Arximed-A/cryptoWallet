<template>
  <div class="column">
    <div
      class="stick"
      :style="{ height: max + '%', bottom: min + '%' }"
      :class="{ increase }"
    >
      <div
        class="body"
        :style="{ height: open + '%', bottom: close + '%' }"
        :class="{ increase }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Candlestick",
  data() {
    return {
      increase: false,
    };
  },
  props: {
    max: Number,
    min: Number,
    open: Number,
    close: Number,
  },
  mounted() {
    if (this.open > this.close) {
      this.increase = true;
    }
  },
};
</script>

<style scoped>
.increase {
  background: #5cff9c !important;
}
.column {
  height: 100%;
  width: 13px;
  position: relative;
}
.body {
  position: absolute;
  width: 7px;
  background: #f00090;
  left: -3px;
}
.stick {
  width: 1px;
  background: #f00090;
  position: absolute;
  left: 3px;
}
</style>
