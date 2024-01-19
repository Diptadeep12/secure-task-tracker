<template>
    <div>
      <h2>Add Task</h2>
      <form @submit.prevent="addTask">
        <label for="taskTitle">Task Title:</label>
        <input type="text" id="taskTitle" v-model="taskTitle" required>
  
        <label for="taskDescription">Task Description:</label>
        <textarea id="taskDescription" v-model="taskDescription" required></textarea>
  
        <button type="submit">Add Task</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'TaskForm',
    data() {
      return {
        taskTitle: '',
        taskDescription: '',
      };
    },
    methods: {
      async addTask() {
        try {
          // Call your backend API using Axios to add a new task
          // Replace 'YOUR_BACKEND_API/add-task' with your actual add-task endpoint
          const response = await axios.post('YOUR_BACKEND_API/add-task', {
            title: this.taskTitle,
            description: this.taskDescription,
          });
  
          // Handle the response as needed
          console.log('Task added successfully:', response.data);
  
          // Optionally, you can emit an event or perform other actions after adding the task
  
        } catch (error) {
          console.error('Error adding task', error);
          // Handle error, show a message, etc.
        }
      },
    },
  };
  </script>
  