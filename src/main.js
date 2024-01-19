import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import store from './store';
import App from './App.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import TaskList from './components/TaskList.vue';
import TaskForm from './components/TaskForm.vue';


const routes = [
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/tasks', component: TaskList },
  { path: '/add-task', component: TaskForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
