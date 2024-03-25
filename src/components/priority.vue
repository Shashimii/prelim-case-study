<template>
  <div class="container">
    <h2>Prioritized Tasks</h2>
    <ul> <!-- List to display tasks -->
      <li v-for="(taskPriority, index) in taskPriority" :key="index" class="task-list">
        <div class="task-details">
          <input type="checkbox" v-model="taskPriority.completed" placeholder="Enter task" @change="taskCompleted(index)">
          <!-- If the task editing is true, show the input box else show the task -->
          <input v-if="taskPriority.editing" type="text" v-model="taskPriority.text" @keyup.enter="checkTask(index)">
          <span v-else @click="editTask(index)">{{ taskPriority.text }}</span>
        </div>
        <div class="task-actions">
          <button @click="removePrioTask(index)" class="btn-remove-prio">Remove Priority</button>
          <button @click="editTask(index)" class="btn-edit">Edit</button>
          <button @click="deleteTask(index)" class="btn-delete">Delete</button>
        </div>
      </li>
    </ul>
    <p>Priority Tasks to do: {{ totalTask }}</p>
  </div>
</template>


<script>
import {tasks, tasksDone, taskPriority} from '@/main.js'

export default {
  name: 'PriorityList',

  data() {
    return {
      error:'',
      task:'',
      tasks: tasks,
      tasksDone: tasksDone,
      taskPriority: taskPriority
    }
  },
  methods: {
    // Remove task from Priority
    removePrioTask(index) {
        this.tasks.push(this.taskPriority[index]);
        this.taskPriority.splice(index, 1);
    },
    // Edit task in the tasks list
    editTask(index) {
      if(this.taskPriority[index].text == '') {
        window.alert('Task cannot be empty. Please enter a task.');
        return;
      } else {
        this.taskPriority[index].editing = !this.taskPriority[index].editing
      }
      
    },
    // Delete task from the tasks list
    deleteTask(index) {
      this.taskPriority.splice(index, 1);
    },
    // Check if the task is empty during editing
    checkTask(index) {
      if(this.taskPriority[index].text == '') {
        window.alert('Task cannot be empty. Please enter a task.');
        return;
      }
    },
    // Moves the task from tasks list to tasks done list
    taskCompleted(index) {
      if(this.taskPriority[index].completed) {
        this.tasksDone.push(this.taskPriority[index]);
        this.taskPriority.splice(index, 1);
      }
    }
  },
  // Displays the total number of tasks
  computed: {
    totalTask() {
      return this.taskPriority.length
    },
  },
}

</script>

<style scoped>
  .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      font-family: Arial, sans-serif;
  }

  input[type="text"] {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
      margin-right: 10px;
      width: 50%;
  }

  input[type="checkbox"] {
      margin-right: 10px;
  }

  .btn-remove-prio {
    background-color: #aaaaaa;
    color: #fff;
  }

  .btn-edit {
    background-color: #199471;
    color: white;
  }

  .btn-delete {
      background-color: #f65c39;
      color: white;
  }

  .btn-remove-prio:hover {
      background-color: #6c6f7c;
  }

  .btn-edit:hover {
    background-color: #117159;
  }

  .btn-delete:hover {
    background-color: #cd4229;
  }

  p {
      color: #fff;
      margin-top: 20px;
  }
</style>
