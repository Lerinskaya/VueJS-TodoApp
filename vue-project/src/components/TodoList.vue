<template>
  <section :class="$style.todo__list">
    <div :class="$style.todo__app">
      <TitleList />
      <TaskArea v-bind:todos="todos" />
      <FooterField />
    </div>
    <div :class="$style.todo__image">
      <img src="@/assets/note.png" />
    </div>
  </section>
</template>

<script>
import TitleList from "@/components/organisms/TitleList";
import TaskArea from "@/components/organisms/TaskArea";
import FooterField from "@/components/organisms/FooterField";
export default {
  name: "TodoList",
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
    TitleList,
    TaskArea,
    FooterField,
  },
};
</script>

<style lang="scss" module>
.todo__list {
  background: linear-gradient(
    104.11deg,
    $backgroundOrange 14.52%,
    $backgroundGradient 87.26%
  );
  height: 100vh;
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .todo__app {
    flex-direction: column;
    margin-top: 0;
    max-width: 33.75rem;
    border: 2px solid $lightOrange;
    z-index: 1;
  }
  .todo__image {
    display: flex;
    flex-direction: row;
    position: absolute;
    margin-left: 33.5rem;
    margin-top: -2.5rem;
  }
}
@media (max-width: 980px) {
  .todo__image {
    img {
      margin-left: -6.5rem;
      margin-top: -6rem;
      max-width: 22rem;
    }
  }
  .todo__list {
    .todo__app {
      width: 33rem;
    }
  }
}
@media (max-width: 850px) {
  .todo__image {
    img {
      margin-left: -13rem;
      margin-top: -10rem;
      max-width: 25rem;
    }
  }
  .todo__list {
    .todo__app {
      max-width: 28rem;
    }
  }
}
@media (max-width: 710px) {
  .todo__image {
    img {
      margin-left: -15rem;
      margin-top: -13rem;
      max-width: 19rem;
    }
  }
}
@media (max-width: 650px) {
  .todo__image {
    img {
      margin-left: -18rem;
      margin-top: -15rem;
      max-width: 19rem;
    }
  }
}
@media (max-width: 600px) {
  .todo__image {
    img {
      display: none;
    }
  }
  .todo__list {
    .todo__app {
      max-width: 24rem;
    }
  }
}
@media (max-width: 450px) {
  .todo__list {
    .todo__app {
      max-width: 17rem;
    }
  }
}
</style>
