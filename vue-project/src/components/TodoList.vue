<template>
  <section class="todoList">
    <div class="todoApp">
      <header class="todoTitle">
        <p>to do list</p>
      </header>
      <div class="todoField">
        <div class="todoTask">
          <label>
            <input type="checkbox" class="checkbox" />
            <span class="fake__checkbox"></span>
            <span>Task 1</span>
          </label>
          <button>&times;</button>
        </div>
        <div class="todoTask">
          <label>
            <input type="checkbox" class="checkbox" />
            <span class="fake__checkbox"></span>
            <span>Task 2</span>
          </label>
          <button>&times;</button>
        </div>
        <div class="todoTask">
          <label>
            <input type="checkbox" class="checkbox" />
            <span class="fake__checkbox"></span>
            <span>Task 3</span>
          </label>
          <button>&times;</button>
        </div>
        <div class="addTask">
          <label>
            <input type="text" placeholder="Add new task" />
          </label>
        </div>
      </div>
      <footer class="todoState">
        <p class="todoLeft">1/3 left</p>
        <span>All</span>
        <p>Active</p>
        <p class="todoCompleted">Completed</p>
      </footer>
    </div>
    <div class="todoImage">
      <img src="@/assets/note.png" />
    </div>
  </section>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss">
$lightOrange: #ffca93;
$lightPeach: #fff4e9;
$brown: #7f4b13;
$darkPeach: #ffdfbe;
$peach: #ffecd8;
$lightBrown: rgba(127, 75, 19, 0.42);
$brownBorder: #c9955d;
$orange: #fc8f1a;
* {
  margin: 0 auto;
  box-sizing: border-box;
}
.todoList {
  background: linear-gradient(104.11deg, #ff7e5f 14.52%, #feb567 87.26%);
  height: 100vh;
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .todoApp {
    flex-direction: column;
    margin-top: 0;
    max-width: 33.75rem;
    border: 2px solid $lightOrange;
    z-index: 1;
    .todoTitle {
      font-family: "Open Sans";
      background-color: $lightOrange;
      color: $brown;
      padding: 0.688rem 14.1rem;
      font-weight: 600;
      font-size: 1.25rem;
    }
    .todoField {
      background-color: $lightPeach;
      padding-top: 1.875rem;
      padding-bottom: 1.875rem;
      .todoTask {
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
            width: 24px;
            height: 24px;
            border: 1.5px solid #feb567;
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
      .addTask {
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
    .todoState {
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
      .todoLeft {
        margin-right: 0;
        cursor: pointer;
      }
      p {
        cursor: pointer;
      }
    }
  }
}
.todoTask:first-child {
  margin-top: 1.875rem;
}
.todoImage {
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
  border-radius: 5px;
  margin-right: -1.8px;
  opacity: 0;
  cursor: pointer;
}
.checkbox:checked + .fake__checkbox::before {
  opacity: 1;
}
@media (max-width: 980px) {
  .todoImage {
    img {
      margin-left: -6.5rem;
      margin-top: -6rem;
      max-width: 22rem;
    }
  }
  .todoList {
    .todoApp {
      max-width: 29rem;
      .todoTitle {
        padding: 0.688rem 9.1rem;
        font-size: 1.2rem;
      }
      .todoTask {
        max-width: 8rem;
        margin: 0 1rem;
      }
      .todoState {
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
        .todoLeft {
          margin-right: 0;
        }
      }
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
  .todoList {
    .todoApp {
      max-width: 28rem;
      .todoTitle {
        padding: 0.688rem 7rem;
      }
      .todoTask {
        font-size: 1rem;
      }
      .addTask {
        margin: 0 1rem;
        input {
          font-size: 1rem;
        }
      }
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
  .todoList {
    .todoApp {
      max-width: 24rem;
      .todoTitle {
        padding: 0.688rem 5rem;
      }
      .todoTask {
        font-size: 0.8rem;
      }
      .addTask {
        input {
          max-width: 10rem;
          font-size: 0.9rem;
        }
      }
    }
  }
}
@media (max-width: 450px) {
  .todoList {
    .todoApp {
      max-width: 17rem;
    }
    .todoState {
      font-size: 0.8rem;
      span {
        margin-left: 0.5rem;
      }
    }
  }
}
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Open+Sans:wght@400;600&display=swap");
</style>
