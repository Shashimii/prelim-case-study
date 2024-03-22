<!-- CompletedList.vue -->
<template>
  <div class="container">
    <h2>Completed Tasks</h2>
    <ul> <!-- List to display tasks -->
      <li v-for="(task, index) in tasksDone" :key="index" class="task-list">
        <div class="task-details">
          <input type="checkbox" v-model="task.completed" placeholder="Enter task" @change="taskToggle(index)">
          <span>{{ task.text }}</span>
        </div>
        <div class="task-actions">
          <button @click="deleteTask(index)" class="btn-delete">Delete</button>
        </div>
      </li>
    </ul>
    <p>Completed tasks: {{ totalCompleted }}</p>
  </div>
</template>

<script>
import {tasks, tasksDone} from '@/main.js'

export default {
  name: 'CompletedList',
  data() {
    return {
      tasks: tasks,
      tasksDone: tasksDone
    }
  },
  methods: {
    // If the task is unticked, it will return to the tasks list
    taskToggle(index) {
      if(!this.tasksDone[index].completed) {
        this.tasks.push(this.tasksDone[index]);
        this.tasksDone.splice(index, 1);
      }
    },
    // Delete task from the completed list
    deleteTask(index) {
      this.tasksDone.splice(index, 1);
    }
  },
  // Get the total number of completed tasks
  computed: {
    totalCompleted() {
      return this.tasksDone.length;
    }
  }
}
</script>

<style scoped>
  .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      font-family: Arial, sans-serif;
  }

  .task-details {
      display: flex;
      align-items: center;
  }

  .task-details input[type="checkbox"] {
      margin-right: 10px;
  }

  .task-details span {
      color: #555;
  }

  .btn-delete {
      background-color: #f65c39;
      color: white;
  }

  .btn-delete:hover {
      background-color: #cd4229;
  }

  p {
      color: #fff;
      margin-top: 20px;
  }
</style>