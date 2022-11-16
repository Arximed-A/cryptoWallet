<template>
  <div class="box" :class="{ box_black: openList }">
    <div class="box__item" @click="showList">
      <div class="box__wrapper">
        <img :src="url + img" class="box__img" />
      </div>
      <span class="box__name">{{ name }}</span>
      <img
        class="box__arrow"
        :class="{ box__arrow_rotate: openList }"
        src="./../../assets/icons/arrow.svg"
        alt=""
      />
    </div>

    <ul v-show="openList">
      <li
        class="box__item"
        v-for="item of items"
        :key="item.id"
        @click="selectCurrency(item.id)"
      >
        <div class="box__wrapper">
          <img :src="url + item.img" class="box__img" />
        </div>
        <span class="box__name">{{ item.shortcut }}</span>
        <img
          class="box__arrow box__arrow_rotate box__arrow_visible"
          src="./../../assets/icons/arrow.svg"
          alt=""
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "ChoseCurrensy",
  data() {
    return {
      name: "ETH", // решить вопрос с первым показом валюты
      img: "ethereum.svg",
      url: "https://raw.githubusercontent.com/Arximed-A/crypto_wallet/main/src/assets/currency/",
      openList: false,
    };
  },
  mounted() {},

  methods: {
    selectCurrency(id) {
      const item = this.items.filter((el) => el.id == id);
      this.changeCurrentСurrency(item[0]);
      this.name = this.currentСurrency.shortcut;
      this.img = this.currentСurrency.img;
      this.openList = false;
      this.createRandomDiagram();
    },
    showList() {
      this.openList = !this.openList;
    },
    hideList() {
      this.openList = false;
    },
    ...mapActions({
      changeCurrentСurrency: "changeCurrentСurrency",
      createRandomDiagram: "createRandomDiagram",
    }),
  },

  computed: {
    ...mapState({
      items: (state) => state.rateData,
      currentСurrency: (state) => state.currentСurrency,
    }),
  },
};
</script>

<style lang="scss" scoped>
.box {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: auto;
  &_black {
    background: rgba(0, 0, 0, 1);
  }
  &__item {
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 87px;
    height: 32px;
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0);
    &:hover {
      border: 1px solid rgba(255, 255, 255, 0.3);
      img.box__arrow_visible {
        opacity: 0.6;
      }
    }
  }
  &__wrapper {
    margin: 0px 4px 0px 5px;
    background: linear-gradient(
      144.64deg,
      #ffffff 6.13%,
      rgba(217, 217, 217, 0.71) 99.08%
    );
    border-radius: 50%;
    height: 22px;
    width: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__img {
    width: 12px;
    height: 12px;
  }
  &__arrow {
    width: 12px;
    height: 12px;
    margin: 0px 10px 0px 0px;
    transition: all 0.3s ease 0s;
    &_rotate {
      transform: rotate(90deg);
    }
    &_visible {
      opacity: 0;
    }
  }
  &__name {
    flex: 1 1 auto;
    font-size: 12px;
    text-transform: uppercase;
    margin: 0px 4px 0px 0px;
  }
}
</style>
