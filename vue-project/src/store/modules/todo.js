export default {
  state: {
    tabs: [
      { id: 1, title: "All", isActive: true },
      { id: 2, title: "Active", isActive: false },
      { id: 3, title: "Completed", isActive: false },
    ],
    todos: [],
    filter: "All",
  },
  getters: {
    allTodos: (state) => state.todos,

    getActiveTasks(state) {
      return state.todos.filter((todo) => todo.isChecked === false);
    },
    tabButtons: (state) => state.tabs,

    filterTasks(state) {
      if (state.filter == 'All') {
        return state.todos
      } else if (state.filter == 'Active') {
        return state.todos.filter((todo) => todo.isChecked === false)
      } else if (state.filter == 'Completed') {
        return state.todos.filter((todo) => todo.isChecked === true)
      }
      return state.todos;
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit("add_todo", todo)
    },

    deleteTask({ commit }, id) {
      commit("deleteTodo", id)
    }
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);

    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
    },
    changeTaskStatus(state, id) {
      state.todos.map((todo) => {
        if (todo.id == id) {
          todo.isChecked = !todo.isChecked;
        }
      });
    },
    changeTabStatus(state, title) {
      state.filter = title;
      state.tabs = state.tabs.map((tab) => {
        if (tab.title === title) {
          tab.isActive = true;
        } else {
          tab.isActive = false;
        }
        return tab;
      });
    },
  },
}