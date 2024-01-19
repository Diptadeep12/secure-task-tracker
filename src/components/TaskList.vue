<template>
    <div>
      <h2>Task List</h2>
      <ul>
        <li v-for="task in tasks" :key="task._id">
          <h3>{{ task.title }}</h3>
          <p>{{ task.description }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'TaskList',
    data() {
      return {
        tasks: [],
      };
    },
    mounted() {
      // Fetch tasks from MongoDB when the component is mounted
      this.fetchTasks();
    },
    methods: {
      async fetchTasks() {
        try {
          // Call your backend API using Axios to fetch tasks
          // Replace 'YOUR_BACKEND_API/tasks' with your actual tasks endpoint
          const response = await axios.get('YOUR_BACKEND_API/tasks');
  
          // Update tasks data property with the fetched tasks
          this.tasks = response.data;
  
        } catch (error) {
          console.error('Error fetching tasks', error);
          // Handle error, show a message, etc.
        }
      },
    },
  };
  </script>
  