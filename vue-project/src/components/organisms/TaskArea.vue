<template>
  <div :class="$style.todo__field">
    <TaskValue
      v-for="todo in todos"
      :key="todo.id"
      :title="todo.title"
      :isChecked="todo.completed"
    />
    <InputBtn />
  </div>
</template>

<script>
import TaskValue from "@/components/molecules/TaskValue";
import InputBtn from "@/components/atoms/InputBtn";
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
    TaskValue,
    InputBtn,
  },
};
</script>

<style lang="scss" module>
.todo__field {
  background-color: $lightPeach;
  padding-top: 1.875rem;
  padding-bottom: 1.875rem;
}
@media (max-width: 800px) {
  .todo__field {
    padding-top: 1rem;
  }
}
</style>
