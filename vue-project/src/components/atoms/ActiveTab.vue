<template>
  <div>
    <p :class="$style.todo__active">Active</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" module>
@import "@/styles/main.scss";
.todo__active {
  cursor: pointer;
}
@media (max-width: 980px) {
  p {
    margin-right: 0.5rem;
  }
}
</style>
