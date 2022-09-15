<template>
  <div>
    <p :class="$style.todo__completed">Completed</p>
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
.todo__completed {
  cursor: pointer;
}
@media (max-width: 980px) {
  p {
    margin-right: 0.5rem;
  }
}
</style>
