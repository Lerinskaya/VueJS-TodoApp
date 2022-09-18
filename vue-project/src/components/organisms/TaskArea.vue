<template>
  <div :class="$style.taskArea">
    <Task
      v-for="todo in todos"
      :key="todo.id"
      :title="todo.title"
      :isChecked="todo.completed"
    />
    <AddTask />
  </div>
</template>

<script>
import Task from "@/components/molecules/Task";
import AddTask from "@/components/atoms/AddTask";
export default {
  data() {
    return {
      todos: [
        { id: 1, title: "Task 1", completed: false },
        { id: 2, title: "Task 2", completed: false },
        { id: 3, title: "Task 3", completed: false },
      ],
    };
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
}
@media (max-width: 800px) {
  .taskArea {
    padding-top: 1rem;
  }
}
</style>
