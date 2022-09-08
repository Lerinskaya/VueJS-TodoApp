<template>
  <section class="todo__list">
    <div class="todo__app">
      <h1 class="todo__title">to do list</h1>
      <div class="todo__field">
        <div class="todo__task">
          <label>
            <input type="checkbox" class="checkbox" />
            <span class="fake__checkbox" />
            <span>Task 1</span>
          </label>
          <button>&times;</button>
        </div>
        <div class="todo__task">
          <label>
            <input type="checkbox" class="checkbox" />
            <span class="fake__checkbox" />
            <span>Task 2</span>
          </label>
          <button>&times;</button>
        </div>
        <div class="todo__task">
          <label>
            <input type="checkbox" class="checkbox" />
            <span class="fake__checkbox" />
            <span>Task 3</span>
          </label>
          <button>&times;</button>
        </div>
        <div class="add__task">
          <label>
            <input type="text" placeholder="Add new task" />
          </label>
        </div>
      </div>
      <footer class="todo__state">
        <p class="todo__left">1/3 left</p>
        <span>All</span>
        <p>Active</p>
        <p class="todo__completed">Completed</p>
      </footer>
    </div>
    <div class="todo__image">
      <img src="@/assets/note.png" />
    </div>
  </section>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
@import "../styles/main.scss";
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
    .todo__title {
      font-family: "Open Sans";
      background-color: $lightOrange;
      color: $brown;
      padding: 0.688rem 14.1rem;
      font-weight: 600;
      font-size: 1.25rem;
    }
    .todo__field {
      background-color: $lightPeach;
      padding-top: 1.875rem;
      padding-bottom: 1.875rem;
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
        label {
          margin-left: 1.25rem;
          text-align: center;
          input {
            position: absolute;
            z-index: -1;
            opacity: 0;
            color: $lightOrange;
            background-color: $darkPeach;
          }
          .fake__checkbox {
            display: inline-flex;
            width: 1.5rem;
            height: 1.5rem;
            border: 1.5px solid $backgroundGradient;
            border-radius: 5px;
            margin-right: 1.4rem;
          }
        }
        button {
          margin-right: 1.25rem;
          border: 1.5px solid $lightOrange;
          border-radius: 2px;
          color: $lightOrange;
          background-color: $darkPeach;
          max-height: 1.5rem;
        }
        button:hover {
          border: 1.5px solid $orange;
          color: $orange;
          cursor: pointer;
        }
      }
      .add__task {
        font-family: "Inter";
        padding: 0.688rem 0;
        border-radius: 0.625rem;
        display: flex;
        color: $lightOrange;
        background-color: $peach;
        border: 2px dashed $lightOrange;
        max-width: 30rem;
        input {
          font-weight: 400;
          font-size: 1.25rem;
          color: $lightOrange;
          background-color: $peach;
          border: none;
          display: flex;
          text-align: center;
        }
      }
    }
    .todo__state {
      font-family: "Open Sans";
      background-color: $lightOrange;
      display: flex;
      flex-direction: row;
      color: $lightBrown;
      font-weight: 600;
      font-size: 1.25rem;
      padding: 0.3rem 1.875rem;
      align-items: center;
      span {
        margin-left: 8rem;
        border: 1px solid $brownBorder;
        border-radius: 0.625rem;
        padding: 0.3rem;
        margin-right: 1.56rem;
        cursor: pointer;
      }
      .todo__left {
        margin-right: 0;
        cursor: pointer;
      }
      p {
        cursor: pointer;
      }
    }
  }
}
.todo__task:first-child {
  margin-top: 1.875rem;
}
.todo__image {
  display: flex;
  flex-direction: row;
  position: absolute;
  margin-left: 33.5rem;
  margin-top: -0.3rem;
}
.fake__checkbox::before {
  content: "";
  width: 24px;
  height: 24px;
  background-image: url("@/assets/checked.png");
  margin-top: -1.5px;
  border-radius: 0.31rem;
  margin-right: -1.8px;
  opacity: 0;
  cursor: pointer;
}
.checkbox:checked + .fake__checkbox::before {
  opacity: 1;
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
      max-width: 29rem;
      .todo__title {
        padding: 0.688rem 9.1rem;
        font-size: 1.2rem;
      }
      .todo__task {
        max-width: 8rem;
        margin: 0 1rem;
      }
      .todo__state {
        font-size: 1rem;
        padding: 0.3rem 1.875rem;
        span {
          margin-left: 2rem;
          padding: 0.3rem;
          margin-right: 0.5rem;
        }
        p {
          margin-right: 0.5rem;
        }
        .todo__left {
          margin-right: 0;
        }
      }
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
      .todo__title {
        padding: 0.688rem 7rem;
      }
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
      .todo__title {
        padding: 0.688rem 5rem;
      }
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
  }
}
@media (max-width: 450px) {
  .todo__list {
    .todo__app {
      max-width: 17rem;
    }
    .todo__state {
      font-size: 0.8rem;
      span {
        margin-left: 0.5rem;
      }
    }
  }
}
</style>
