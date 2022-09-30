<template>
  <div :class="$style.todo">
    <Checkbox :isChecked="isChecked" />
    <span :class="$style.task">{{ title }}</span>
    <DeleteButton @click="$emit('delete')" />
  </div>
</template>

<script>
import Checkbox from "@/components/atoms/Checkbox";
import DeleteButton from "@/components/atoms/DeleteButton";
import { mapActions } from "vuex";
export default {
  props: {
    todo: {},
    title: String,
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Checkbox,
    DeleteButton,
  },
  methods: {
    ...mapActions(["deleteTodo"]),
    //   removeTodo(id) {
    //     this.$store.dispatch("deleteTodo", id);
    //   },
    // },
  },
};
</script>

<style lang="scss" module>
.todo {
  font-family: "Inter";
  background-color: $darkPeach;
  max-width: 30rem;
  margin-bottom: 1.56rem;
  display: flex;
  color: $brown;
  font-weight: 400;
  font-size: 1.25rem;
  padding: 0.688rem 0;
  margin-top: 0;
  border-radius: 0.625rem;
  @media (max-width: 980px) {
    max-width: 30rem;
    margin: 1rem;
  }
  @media (max-width: 850px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
  .task {
    margin-left: -8rem;
    @media (max-width: 850px) {
      input {
        font-size: 1rem;
      }
    }
    @media (max-width: 600px) {
      margin-left: -6rem;
      input {
        max-width: 10rem;
        font-size: 0.9rem;
      }
    }
    @media (max-width: 450px) {
      margin-left: -3rem;
    }
  }
}
.todo:first-child {
  margin-top: 1.875rem;
}
</style>
