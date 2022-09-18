<template>
  <div :class="$style.todo">
    <Checkbox :isChecked="isChecked" />
    <span :class="$style.task">{{ title }}</span>
    <DeleteButton />
  </div>
</template>

<script>
import Checkbox from "@/components/atoms/Checkbox";
import DeleteButton from "@/components/atoms/DeleteButton";
export default {
  props: {
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
  .task {
    margin-left: -8rem;
  }
}
.todo:first-child {
  margin-top: 1.875rem;
}
@media (max-width: 600px) {
  .todo {
    font-size: 0.8rem;
  }
  .task {
    input {
      max-width: 10rem;
      font-size: 0.9rem;
    }
  }
}
@media (max-width: 850px) {
  .todo {
    font-size: 1rem;
  }
  .task {
    margin: 0 1rem;
    input {
      font-size: 1rem;
    }
  }
}
@media (max-width: 980px) {
  .todo {
    max-width: 28rem;
    margin: 1rem;
  }
}
</style>
