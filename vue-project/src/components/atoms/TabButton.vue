<template>
  <div>
    <button :class="[$style.tab, { [$style.active]: isActive }]">
      {{ title }}
    </button>
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
  font-family: "Open Sans";
  background: #ffca93;
  font-weight: 600;
  font-size: 20px;
  color: rgba(127, 75, 19, 0.42);
  border: none;
  cursor: pointer;
}
.tab:active {
  color: rgba(224, 158, 87, 0.42);
}
// .tab:nth-last-child(3) {
//   margin-left: 8rem;
//   border: 1px solid $brownBorder;
//   border-radius: 0.625rem;
//   padding: 0.3rem;
// }
button {
  margin-right: 0;
}
.active {
  border: 1px solid $brownBorder;
}
@media (max-width: 980px) {
  p {
    margin-right: 0.5rem;
  }
}
</style>
