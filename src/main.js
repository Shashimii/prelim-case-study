import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// declared the tasks array as global variables
// to be used in other components
const tasks = [];
const tasksDone = [];

export {tasks, tasksDone};
createApp(App).use(router).mount('#app')
