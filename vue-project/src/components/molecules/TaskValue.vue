<template>
  <div :class="$style.todo__task">
    <CheckBox :isChecked="isChecked" />
    <span :class="$style.task">{{ title }}</span>
    <DeleteBtn />
  </div>
</template>

<script>
import CheckBox from "@/components/atoms/CheckBox";
import DeleteBtn from "@/components/atoms/DeleteBtn";
export default {
  props: {
    title: String,
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    CheckBox,
    DeleteBtn,
  },
};
</script>

<style lang="scss" module>
.todo__task {
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
  .task {
    margin-left: -8rem;
  }
}
.todo__task:first-child {
  margin-top: 1.875rem;
}
@media (max-width: 600px) {
  .todo__task {
    font-size: 0.8rem;
  }
  .add__task {
    input {
      max-width: 10rem;
      font-size: 0.9rem;
    }
  }
}
@media (max-width: 850px) {
  .todo__task {
    font-size: 1rem;
  }
  .add__task {
    margin: 0 1rem;
    input {
      font-size: 1rem;
    }
  }
}
@media (max-width: 980px) {
  .todo__task {
    max-width: 28rem;
    margin: 1rem;
  }
}
</style>
