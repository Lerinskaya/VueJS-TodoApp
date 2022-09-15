<template>
  <div>
    <span :class="$style.btn__all">All</span>
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
.btn__all {
  margin-left: 8rem;
  border: 1px solid $brownBorder;
  border-radius: 0.625rem;
  padding: 0.3rem;
  margin-right: 1.56rem;
  cursor: pointer;
}
@media (max-width: 450px) {
  .btn__all {
    margin-left: 0.5rem;
  }
}
@media (max-width: 980px) {
  .btn__all {
    margin-left: 2rem;
    padding: 0.3rem;
    margin-right: 0.5rem;
  }
}
</style>
