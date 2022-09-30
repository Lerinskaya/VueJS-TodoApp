<template>
  <p :class="$style.todoLeft">
    {{ getActiveTasks.length }}/{{ allTodos.length }} left
  </p>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["allTodos", "getActiveTasks"]),
  },
};
</script>

<style lang="scss" module>
.todoLeft {
  margin-right: 0;
  cursor: pointer;
}
</style>