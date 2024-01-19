<template>
    <div>
      <h2>Signup</h2>
      <form @submit.prevent="signup">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
  
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required>
  
        <button type="submit">Signup</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'SignUp',
    data() {
      return {
        username: '',
        password: '',
        confirmPassword: '',
      };
    },
    methods: {
      async signup() {
        try {
          // Check if passwords match
          if (this.password !== this.confirmPassword) {
            console.error('Passwords do not match');
            // Handle password mismatch error, show a message, etc.
            return;
          }
  
          // Call your backend API using Axios to perform signup
          // Replace 'YOUR_BACKEND_API/signup' with your actual signup endpoint
          const response = await axios.post('YOUR_BACKEND_API/signup', {
            username: this.username,
            password: this.password,
          });
  
          // Assuming your backend returns a token upon successful signup
          const token = response.data.token;
  
          // Call Vuex action to store the user and token
          this.$store.dispatch('login', { user: this.username, token });
  
          // Redirect to the task list page or perform other actions as needed
          this.$router.push('/tasks');
        } catch (error) {
          console.error('Signup failed', error);
          // Handle signup error, show a message, etc.
        }
      },
    },
  };
  </script>
  