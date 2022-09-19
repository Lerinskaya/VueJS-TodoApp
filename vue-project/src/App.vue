<template>
  <div id="app" :class="$style.list">
    <div :class="$style.app">
      <Title />
      <TaskArea :todos="todos" />
      <Footer />
    </div>
    <div :class="$style.todoImage">
      <img src="@/assets/note.png" />
    </div>
  </div>
</template>

<script>
import Title from "@/components/organisms/Title";
import TaskArea from "@/components/organisms/TaskArea";
import Footer from "@/components/organisms/Footer";

export default {
  name: "App",
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
    Title,
    TaskArea,
    Footer,
  },
};
</script>

<style lang="scss" module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.list {
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
  .app {
    flex-direction: column;
    margin-top: 0;
    max-width: 33.75rem;
    border: 2px solid $lightOrange;
    z-index: 1;
  }
  .todoImage {
    display: flex;
    flex-direction: row;
    position: absolute;
    margin-left: 33.5rem;
    margin-top: -2.5rem;
  }
}
@media (max-width: 980px) {
  .todoImage {
    img {
      margin-left: -6.5rem;
      margin-top: -6rem;
      max-width: 22rem;
    }
  }
  .list {
    .app {
      width: 33rem;
    }
  }
}
@media (max-width: 850px) {
  .todoImage {
    img {
      margin-left: -13rem;
      margin-top: -10rem;
      max-width: 25rem;
    }
  }
  .list {
    .app {
      max-width: 28rem;
    }
  }
}
@media (max-width: 710px) {
  .todoImage {
    img {
      margin-left: -15rem;
      margin-top: -13rem;
      max-width: 19rem;
    }
  }
}
@media (max-width: 650px) {
  .todoImage {
    img {
      margin-left: -18rem;
      margin-top: -15rem;
      max-width: 19rem;
    }
  }
}
@media (max-width: 600px) {
  .todoImage {
    img {
      display: none;
    }
  }
  .list {
    .app {
      max-width: 24rem;
    }
  }
}
@media (max-width: 450px) {
  .list {
    .app {
      max-width: 17rem;
    }
  }
}
</style>
