<template>
  <router-link :to="direction" class="link">
    <button class="button">
      <img
        class="img"
        :src="require(`./../../assets/icons/${icon}.svg`)"
        alt="icon"
      />
      {{ name }}
    </button>
  </router-link>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    name: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      // required: true,
      default: "/",
    },
    icon: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  height: 56px;
  background: none;
  border-radius: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: border 0.3s ease 0s;
  border: 1px solid rgba(0, 0, 0, 0);
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: linear-gradient(
      101.05deg,
      rgba(31, 142, 190, 0.2) -5.36%,
      rgba(68, 4, 149, 0.2) 29.46%,
      rgba(68, 4, 149, 0.2) 56.03%,
      rgba(177, 2, 205, 0.2) 81.92%
    );
  }
  margin: 0px 0px 10px 0px;
}

.img {
  margin: 0px 19px 0px 25px;
  width: 24px;
  height: 24px;
}

.router-link-active {
  button {
    background: linear-gradient(
      101.05deg,
      #1f8ebe -5.36%,
      #440495 29.46%,
      #440495 56.03%,
      #b102cd 81.92%
    ) !important;
  }
}
</style>
