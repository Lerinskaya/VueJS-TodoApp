<template>
  <div :class="$style.taskArea">
    <div :class="$style.empty" v-if="filterTasks.length == 0">
      The task list is empty! <br />
      Add a new task!
    </div>
    <Task
      v-for="todo in filterTasks"
      :key="todo.id"
      :id="todo.id"
      :title="todo.title"
      :isChecked="todo.isChecked"
      @delete="deleteTodo(todo.id)"
      @changes="changeTaskStatus(todo.id)"
    />
    <AddTask @keyup="addTodoItem(), clearInput()" v-model.trim="todoText" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Task from "@/components/molecules/Task";
import AddTask from "@/components/atoms/AddTask";
export default {
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    ...mapMutations(["changeTaskStatus"]),
    deleteTodo(id) {
      this.$store.commit("deleteTask", id);
    },
    addTodoItem() {
      this.$store.commit("addTodo", this.todoText);
      this.todoText = "";
    },
    clearInput() {
      input.value = "";
    },
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
  .empty {
    padding-bottom: 2rem;
    font-size: 2rem;
    font-family: "Open Sans";
    font-weight: 600;
    color: $lightBrown;
    text-align: center;
  }
  @media (max-width: 800px) {
    padding-top: 1rem;
  }
}
.add {
  font-family: "Inter";
  padding: 0.688rem 0;
  border-radius: 0.625rem;
  display: flex;
  color: $lightOrange;
  background-color: $peach;
  border: 2px dashed $lightOrange;
  max-width: 30rem;
  @media (max-width: 980px) {
    max-width: 30rem;
    margin: 1rem;
  }
  @media (max-width: 450px) {
    margin-bottom: 0;
  }
  input {
    font-weight: 400;
    font-size: 1.25rem;
    color: $lightOrange;
    background-color: $peach;
    border: none;
    display: flex;
    text-align: center;
    @media (max-width: 450px) {
      max-width: 10rem;
      font-size: 1rem;
    }
  }
}
</style>
