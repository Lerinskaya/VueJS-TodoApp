<template>
  <h1 :class="$style.title">to do list</h1>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
.title {
  font-family: "Open Sans";
  background-color: $lightOrange;
  color: $brown;
  padding: 0.688rem 14.1rem;
  font-weight: 600;
  font-size: 1.25rem;
}
@media (max-width: 600px) {
  .title {
    padding: 0.688rem 5rem;
  }
}
@media (max-width: 850px) {
  .title {
    padding: 0.688rem 7rem;
  }
}
@media (max-width: 980px) {
  .title {
    padding: 0.688rem 9.1rem;
    font-size: 1.2rem;
  }
}
@media (max-width: 450px) {
  .title {
    padding: 0.688rem 2rem;
  }
}
</style>
