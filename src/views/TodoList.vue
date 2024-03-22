<template>
  <div class="container">
    <input type="text" v-model="task" placeholder="Enter task">
    <button @click="addTask">Add Task</button>
    <ul> <!-- List to display tasks -->
      <li v-for="(task, index) in tasks" :key="index" class="task-list">
        <div class="task-details">
          <input type="checkbox" v-model="task.completed" placeholder="Enter task" @change="taskCompleted(index)">
          <!-- If the task editing is true, show the input box else show the task -->
          <input v-if="task.editing" type="text" v-model="task.text" @keyup.enter="checkTask(index)">
          <span v-else @click="editTask(index)">{{ task.text }}</span>
        </div>
        <div class="task-actions">
          <button @click="editTask(index)">Edit</button>
          <button @click="deleteTask(index)">Delete</button>
        </div>
      </li>
    </ul>
    <p>Tasks to do: {{ totalTask }}</p>
  </div>
</template>

<script>
import {tasks, tasksDone} from '@/main.js'

export default {
  name: 'TodoList',
  data() {
    return {
      error:'',
      task:'',
      tasks: tasks,
      tasksDone: tasksDone
    }
  },
  methods: {
    // Add task to the tasks list
    addTask() {
      if (this.task == '') {
        window.alert('Task cannot be empty. Please enter a task.');
        return;
      } else { 
        this.error = '';
        this.tasks.push({
          text: this.task,
          completed: false
        });
        this.task = '';
      }
    },
    // Edit task in the tasks list
    editTask(index) {
      if(this.tasks[index].text == '') {
        window.alert('Task cannot be empty. Please enter a task.');
        return;
      } else {
        this.tasks[index].editing = !this.tasks[index].editing
      }
      
    },
    // Delete task from the tasks list
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    // Check if the task is empty during editing
    checkTask(index) {
      if(this.tasks[index].text == '') {
        window.alert('Task cannot be empty. Please enter a task.');
        return;
      }
    },
    // Moves the task from tasks list to tasks done list
    taskCompleted(index) {
      if(this.tasks[index].completed) {
        this.tasksDone.push(this.tasks[index]);
        this.tasks.splice(index, 1);
      }
    }
  },
  // Displays the total number of tasks
  computed: {
    totalTask() {
      return this.tasks.length
    },
  },
}
</script>
