<template>
  <section class="conteiner">
    <header class="header">
      <InfoItem title="Total assets" icon="moneys" :numbers="totalAssets" />
      <InfoItem title="Total deposits" icon="wallet" :numbers="totalDeposits" />
      <InfoItem title="APY" icon="chart" :numbers="apy" :procent="true" />
    </header>
    <body class="body">
      <div class="body__header">
        <h2 class="body__title">Portfolios performance</h2>
        <div class="body__settings">
          <div class="body__currency">
            <ChoseCurrency />
          </div>
          <div class="body__wrapper">
            <img
              class="body__img"
              src="./../../../assets/icons/candle.svg"
              alt=""
            />
          </div>
          <div class="body__time time">
            <div class="time__item">
              <ChoseTime text="1H" />
            </div>
            <div class="time__item"><ChoseTime text="1D" /></div>
            <div class="time__item"><ChoseTime text="3D" /></div>
            <div class="time__item"><ChoseTime text="1M" /></div>
            <div class="time__item"><ChoseTime text="1Y" /></div>
            <div class="time__item"><ChoseTime /></div>
          </div>
        </div>
      </div>
      <div class="body__diagram">
        <Diagram />
      </div>
    </body>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import InfoItem from "../../UI/InfoItem.vue";
import ChoseCurrency from "../../UI/ChoseCurrency.vue";
import ChoseTime from "../../UI/ChoseTime.vue";
import Diagram from "./Diagram.vue";
export default {
  name: "Dasboard",
  components: { InfoItem, ChoseCurrency, ChoseTime, Diagram },
  methods: {
    ...mapActions({
      changeCurrentTime: "changeCurrentTime",
    }),
  },
  computed: {
    ...mapState({
      totalAssets: (state) => state.totalAssets,
      totalDeposits: (state) => state.totalDeposits,
      apy: (state) => state.apy,
    }),
  },
};
</script>

<style lang="scss" scoped>
.conteiner {
  width: 100%;
  height: 100%;
  background: rgba(28, 28, 28, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 45px;
}
.header {
  display: flex;
  justify-content: space-between;
  margin: 0px 0px 47px 0px;
}
.body {
  &__header {
    margin: 0px 0px 23px 0px;
  }
  &__title {
    font-size: 20px;
    margin: 0px 0px 15px 0px;
  }
  &__settings {
    display: flex;
    align-items: center;
  }
  &__wrapper {
    flex: 1 1 auto;
  }
  &__img {
    height: 24px;
    width: 24px;
  }
  &__currency {
    margin: 0px 18px 0px 0px;
    position: relative;
    z-index: 1;
    flex: 0 0 87px;
    height: 32px;
  }
  &__time {
  }
}

.time {
  display: flex;
  &__item {
    margin: 0px 8px 0px 0px;
    &:last-child {
      margin: 0px 0px 0px 0px;
    }
  }
}
</style>
