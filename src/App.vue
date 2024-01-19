<template>
  <div id="app">
    <h1>Secure Task Tracker</h1>
    <button @click="setCurrentView('login')">Go to Login</button>
    <button @click="setCurrentView('signup')">Go to Signup</button>
    <button @click="setCurrentView('tasks')">Go to Task List</button>
    <button @click="setCurrentView('add-task')">Go to Add Task</button>

    <Login v-if="currentView === 'login'" />
    <Signup v-if="currentView === 'signup'" />
    <TaskList v-if="currentView === 'tasks'" />
    <TaskForm v-if="currentView === 'add-task'" />
  </div>
</template>

<script>
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import TaskList from './components/TaskList.vue';
import TaskForm from './components/TaskForm.vue';

export default {
  data() {
    return {
      currentView: 'login', // Initial view, change as needed
    };
  },
  components: {
    Login,
    Signup,
    TaskList,
    TaskForm,
  },
  methods: {
    setCurrentView(view) {
      this.currentView = view;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: #41b883;
}

button {
  margin: 10px;
}
</style>
