<template>
  <section class="container">
    <h2 class="title">Chain allocation</h2>
    <ul>
      <li v-for="item of items" :key="item.id">
        <RateItem
          :name="item.name"
          :quantity="item.quantity"
          :allocation="item.allocation"
          :img="item.img"
        />
      </li>
    </ul>
    <ButtonBase text="View All" />
  </section>
</template>

<script>
import ButtonBase from "../UI/ButtonBase.vue";
import { mapActions, mapState } from "vuex";
import RateItem from "./RateItem.vue";

export default {
  components: { RateItem, ButtonBase },
  name: "Rate",

  methods: {
    ...mapActions({
      getRateDate: "getRateDate",
    }),
  },
  computed: {
    ...mapState({
      items: (state) => state.rateData,
    }),
  },
  async created() {
    await this.getRateDate();
  },
};
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  height: 39px;
  border-radius: 12px;
  background: #2a2a2a;
  border: none;
}
.title {
  text-transform: capitalize;
  margin: 0px 0px 20px 0px;
  font-size: 18px;
}
.container {
  padding: 30px;
  background: rgba(28, 28, 28, 0.6);
  border-radius: 16px;
  margin: 0px 0px 30px 0px;
}
</style>
