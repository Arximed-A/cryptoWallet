<template>
  <a
    @click="setTime(text), createRandomDiagram()"
    v-if="text"
    :class="{ time_white: white }"
    class="time"
    >{{ text }}
  </a>
  <a v-else class="time" :class="{ time_white: white }">
    <img src="./../../assets/icons/calendar.svg" alt="calendar" />
  </a>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "ChoseTime",
  props: {
    text: String,
  },
  data() {
    return {
      white: false,
    };
  },
  watch: {
    time() {
      if (this.time === this.text) {
        this.white = true;
      } else {
        this.white = false;
      }
    },
  },
  mounted() {
    if (this.time === this.text) {
      this.white = true;
    }
  },
  methods: {
    ...mapActions({
      setTime: "changeCurrentTime",
      createRandomDiagram: "createRandomDiagram",
    }),
  },
  computed: {
    ...mapState({
      time: (state) => state.currentTime,
      // items: (state) => state.diagram,
    }),
  },
};
</script>

<style lang="scss" scoped>
.time {
  cursor: pointer;
  width: 26px;
  height: 22px;
  background: rgba(66, 66, 66, 0.6);
  border-radius: 6px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 16px;
    width: 16px;
  }
  &_white {
    background: #ffffff;
    color: #211621;
  }
}
</style>
