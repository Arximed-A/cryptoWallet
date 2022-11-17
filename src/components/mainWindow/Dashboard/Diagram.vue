<template>
  <div class="diagram">
    <div class="diagram__wrapper">
      <div class="diagram__limits limits">
        <span class="limits__item text">$ 600</span>
        <span class="limits__item text">$ 500</span>
        <span class="limits__item text">$ 400</span>
        <span class="limits__item text">$ 300</span>
        <span class="limits__item text">$ 200</span>
        <span class="limits__item text">$ 100</span>
      </div>
      <div class="diagram__chart chart">
        <template v-for="item of items" :key="item.id">
          <!-- плохое решение с ключом -->
          <Candlestick
            :max="item.max"
            :min="item.min"
            :open="item.open"
            :close="item.close"
          />
        </template>
      </div>
    </div>
    <div class="diagram__date date">
      <span class="date__item text">17 Mar</span>
      <span class="date__item text">18 Mar</span>
      <span class="date__item text">19 Mar</span>
      <span class="date__item text">20 Mar</span>
      <span class="date__item text">21 Mar</span>
      <span class="date__item text">22 Mar</span>
      <span class="date__item text">23 Mar</span>
      <span class="date__item text">24 Mar</span>
      <span class="date__item text">25 Mar</span>
      <span class="date__item text">26 Mar</span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Candlestick from "./Candlestick.vue";
export default {
  name: "Diagram",
  components: { Candlestick },
  data() {
    return {};
  },

  methods: {
    ...mapActions({
      getDiagramData: "getDiagramData",
      createRandomDiagram: "createRandomDiagram",
    }),
  },
  computed: {
    ...mapState({
      items: (state) => state.diagram,
    }),
  },
  mounted() {
    this.createRandomDiagram();
  },
};
</script>

<style lang="scss" scoped>
.diagram {
  &__wrapper {
    display: flex;
    margin: 0px 0px 5px 0px;
  }
  &__limits {
    flex: 0 0 40px;
  }
  &__chart {
    flex: 1 1 auto;
  }
  &__date {
  }
}
.limits {
  display: flex;
  flex-direction: column;
  padding: 6px 0px 0px 0px;
  &__item {
    margin: 0px 0px 29.4px 0px;
  }
}
.chart {
  padding: 0px 0px 0px 10px;
  display: flex;
  justify-content: space-between;
  background: url("./../../../assets/line.svg") 0 0 / 100% auto no-repeat;
}

.date {
  display: flex;
  justify-content: flex-end;
  &__item {
    margin: 0px 0px 0px 26px;
  }
}
.text {
  color: #878787;
  font-size: 10px;
}
</style>
