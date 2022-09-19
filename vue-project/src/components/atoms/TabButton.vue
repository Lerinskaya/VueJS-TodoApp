<template>
  <div>
    <p :class="$style.tab">{{ title }}</p>
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
.tab {
  cursor: pointer;
}
.tab:nth-last-child(3) {
  margin-left: 8rem;
  border: 1px solid $brownBorder;
  border-radius: 0.625rem;
  padding: 0.3rem;
  margin-right: 1.56rem;
}
@media (max-width: 980px) {
  p {
    margin-right: 0.5rem;
  }
}
</style>
