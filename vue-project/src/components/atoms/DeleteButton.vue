<template>
  <button>&times;</button>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss" module>
button {
  margin-right: 1.25rem;
  border: 1.5px solid $lightOrange;
  border-radius: 2px;
  color: $lightOrange;
  background-color: $darkPeach;
  max-height: 1.5rem;
}
button:hover {
  border: 1.5px solid $orange;
  color: $orange;
  cursor: pointer;
}
</style>
