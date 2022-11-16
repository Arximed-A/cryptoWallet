<template>
  <div class="box">
    <div class="header">
      <img :src="route" class="img" />
      <label :for="name" class="name">{{ name }}</label>
      <span>$ {{ quantity }} B</span>
    </div>
    <div class="footer">
      <progress
        class="progress"
        :class="{
          green: colorGreen,
          red: colorRed,
          purple: colorPurple,
        }"
        :id="name"
        max="100"
        :value="val"
      ></progress>
      <span>{{ allocation }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RateItem",
  props: {
    name: String,
    quantity: String,
    allocation: String,
    img: String,
  },
  data() {
    return {
      route: `https://raw.githubusercontent.com/Arximed-A/crypto_wallet/main/src/assets/currency/${this.img}`,
      // test: +this.allocation,
      val: parseFloat(this.allocation),
      colorGreen: false,
      colorRed: false,
      colorPurple: false,
    };
  },
  methods: {
    randomColor() {
      const random = Math.random() * 10;
      if (random < 3) {
        this.colorGreen = true;
      } else if (random < 6) {
        this.colorRed = true;
      } else {
        this.colorPurple = true;
      }
    },
  },
  created() {
    this.randomColor();
  },
};
</script>

<style lang="scss" scoped>
.name {
  flex: 1 1 auto;
}
.box {
  margin: 0px 0px 24px 0px;
}
.img {
  margin: 0px 12px 0px 0px;
}
.header {
  display: flex;
  align-items: center;
  margin: 0px 0px 14px 0px;
}
.footer {
  display: flex;
  align-items: center;
  span {
    font-size: 14px;
  }
}
.progress {
  margin: 0px 8px 0px 0px;
}

.progress[value] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
}
.progress[value]::-webkit-progress-bar {
  background-color: #353535;
  border-radius: 4px;
}
.progress[value]::-webkit-progress-value {
  border-radius: 4px;
}
.purple[value]::-webkit-progress-value {
  background: linear-gradient(268.5deg, #fb03f5 -11.69%, #aa9cff 112.48%);
}
.green[value]::-webkit-progress-value {
  background: linear-gradient(180deg, #5cff9c 0%, #00ffa3 100%);
}
.red[value]::-webkit-progress-value {
  background: linear-gradient(268.5deg, #fb035c -11.69%, #fa9fa5 112.48%);
}
</style>
