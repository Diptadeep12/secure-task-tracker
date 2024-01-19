<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'LoginForm',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          // Call your backend API using Axios to perform login
          // Replace 'YOUR_BACKEND_API/login' with your actual login endpoint
          const response = await axios.post('YOUR_BACKEND_API/login', {
            username: this.username,
            password: this.password,
          });
  
          // Assuming your backend returns a token upon successful login
          const token = response.data.token;
  
          // Call Vuex action to store the user and token
          this.$store.dispatch('login', { user: this.username, token });
  
          // Redirect to the task list page or perform other actions as needed
          this.$router.push('/tasks');
        } catch (error) {
          console.error('Login failed', error);
          // Handle login error, show a message, etc.
        }
      },
    },
  };
  </script>
  