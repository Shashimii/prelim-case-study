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
          <button @click="deleteTask(index)">Delete</button>
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

