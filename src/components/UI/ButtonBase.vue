<template>
  <button class="button">{{ text }}</button>
</template>

<script>
export default {
  name: "ButtonBase",
  props: {
    text: String,
  },
};
</script>

<style scoped>
.button {
  width: 100%;
  height: 39px;
  border-radius: 12px;
  background: #2a2a2a;
  border: none;
  cursor: pointer;
}
</style>
