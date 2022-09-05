<template>
  <section class="todoList">
    <div class="todoApp">
      <header class="todoTitle">
        <p>to do list</p>
      </header>
      <div class="todoField">
        <div class="todoTask">
          <span>
            <input type="checkbox" />
            Task 1
          </span>
          <button>&times;</button>
        </div>
        <div class="todoTask">
          <span>
            <input type="checkbox" />
            Task 2
          </span>
          <button>&times;</button>
        </div>
        <div class="todoTask">
          <span>
            <input type="checkbox" />
            Task 3
          </span>
          <button>&times;</button>
        </div>
        <div class="addTask">
          <span>Add a new task</span>
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
        margin-top: 0;
        color: $brown;
        font-weight: 400;
        font-size: 1.25rem;
        padding: 0.688rem 0;
        border-radius: 0.625rem;
        span {
          margin-left: 1.25rem;
          input {
            color: $lightOrange;
            background-color: $darkPeach;
          }
        }
        button {
          margin-right: 1.25rem;
          border: 1.5px solid $lightOrange;
          border-radius: 2px;
          color: $lightOrange;
          background-color: $darkPeach;
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
        font-weight: 400;
        font-size: 1.25rem;
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
      }
      .todoLeft {
        margin-right: 0;
      }
    }
  }
}
.todoTask:first-child {
  margin-top: 1.875rem;
}
.todoApp::before {
  width: 10rem;
  height: 10rem;
  background-image: "url(~@/assets/note.png)";
  margin-right: 1rem;
}
.todoImage {
  display: flex;
  flex-direction: row;
  position: absolute;
  margin-left: 33.5rem;
  margin-top: 0.8rem;
}
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Open+Sans:wght@400;600&display=swap");
</style>
