<template>
  <nav>
    <router-link to="/">Todos</router-link> |
    <router-link to="/completedList">Completed</router-link>
  </nav>
  <router-view/>
</template>

<script>
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }

  h2 {
    margin: auto;
  }

  ul {
    list-style-type: none;
    padding: 0 0 0 0;
  }

  li {
    margin: auto;
  }
  .task-list {
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  .task-actions {
    display: flex;
    gap: 10px;
  }

</style>
