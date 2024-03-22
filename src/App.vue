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
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #555; /* Dark Gray */
  }

  nav {
    padding: 30px;
    color: #fff;
  }

  nav a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
  }

  nav a.router-link-exact-active {
    color: #202020;
    background-color: #fff;
    padding: 10px 20px;
    border-radius: 3px;
  }

  li {
    margin: auto;
  }

  h2 {
    margin: 0 0 20px;
    color: #fff;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  .task-list {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #fff; /* White */
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Shadow */
    margin-bottom: 15px;
  }

  .task-actions {
    display: flex;
    gap: 10px;
  }

  button {
    border: none;
    padding: 8px 15px;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }



</style>
