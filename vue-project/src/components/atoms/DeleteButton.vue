<template>
  <button :class="$style.delete">&times;</button>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss" module>
.delete {
  margin-right: 1.25rem;
  border: 1.5px solid $lightOrange;
  border-radius: 2px;
  color: $lightOrange;
  background-color: $darkPeach;
  max-height: 1.5rem;
}
.delete:active {
  color: red;
}
.delete:hover {
  border: 1.5px solid $orange;
  color: $orange;
  cursor: pointer;
}
</style>
