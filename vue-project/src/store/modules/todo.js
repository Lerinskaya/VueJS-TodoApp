export default {
  state: {
    tabs: [
      { id: 1, title: "All" },
      { id: 2, title: "Active" },
      { id: 3, title: "Completed" },
    ],
    todos: [
      { id: 1, title: "Task 1", isActive: true },
      { id: 2, title: "Task 2", isActive: false },
      { id: 3, title: "Task 3", isActive: false },
    ],
  },
  getters: {
    allTodos: (state) => state.todos,

    getActiveTasks(state) {
      return state.todos.filter((todo) => todo.isChecked === false);
    },

    tabButtons(state) {
      return state.tabs;
    },
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
    },
    filterTasks(state) {
      if (state.title == 'all') {
        return state.todos
      } else if (state.title == 'active') {
        return state.todos.filter((todo) => todo.isChecked === false)
      } else if (state.title == 'completed') {
        return state.todos.filter((todo) => todo.isChecked === true)
      }
      return state.todos;
    },
    changeTaskStatus(state, id) {
      state.tasks.map((todo) => {
        if (todo.id == id) {
          todo.isChecked = !todo.isChecked;
        }
      });
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit("add_todo", todo)
    },

    deleteTask({ commit }, id) {
      commit("deleteTodo", id)
      console.log('GGGGGGG')
    }
  }
}