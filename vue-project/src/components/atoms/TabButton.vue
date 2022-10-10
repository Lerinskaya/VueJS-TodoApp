<template>
  <button
    :class="[$style.tab, { [$style.active]: isActive }]"
    @click="$emit('click')"
  >
    {{ title }}
  </button>
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
  font-family: "Open Sans";
  background: #ffca93;
  font-weight: 600;
  font-size: 20px;
  color: rgba(127, 75, 19, 0.42);
  border: none;
  cursor: pointer;
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
}

button {
  margin-right: 0;
}
.active {
  border: 1px solid $brownBorder;
  border-radius: 10px;
}
@media (max-width: 980px) {
  p {
    margin-right: 0.5rem;
  }
}
</style>
