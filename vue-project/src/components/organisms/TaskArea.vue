<template>
  <div :class="$style.taskArea">
    <Task
      v-for="todo in filterTasks"
      :key="todo.id"
      :id="todo.id"
      :title="todo.title"
      :isChecked="todo.isChecked"
      @delete="deleteTask(todo.id)"
      @change="changeTaskStatus(todo.id)"
    />
    <AddTask />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import Task from "@/components/molecules/Task";
import AddTask from "@/components/atoms/AddTask";
export default {
  methods: {
    ...mapMutations(["changeTaskStatus"]),
    ...mapActions(["deleteTask"]),
  },
  computed: {
    ...mapGetters(["filterTasks"]),
  },
  components: {
    Task,
    AddTask,
  },
};
</script>

<style lang="scss" module>
.taskArea {
  background-color: $lightPeach;
  padding-top: 1.875rem;
  padding-bottom: 1.875rem;
  @media (max-width: 800px) {
    padding-top: 1rem;
  }
}
</style>
