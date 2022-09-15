<template>
  <p :class="$style.todo__left">1/3 left</p>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss" module>
.todo__left {
  margin-right: 0;
  cursor: pointer;
}
@media (max-width: 980px) {
  .todo__left {
    margin-right: 0;
  }
}
</style>
