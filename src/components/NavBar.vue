<template>
  <div>
    <section id="navbar">
      <article>
        <ul>
          <li><router-link to="/" class="router">Home</router-link></li>
          <li><router-link to="/todo" class="router">Todo List</router-link></li>
          <li>About</li>
        </ul>
      </article>
      
    </section>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
#navbar {
  background-color: rgb(137, 177, 232);
}
#navbar article {
  padding: 0 100px;
}
ul li {
  text-decoration: none;
  list-style: none;
  padding: 25px 15px;
}
.router{
    color: black;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
}
ul {
  display: flex;
}
ul li:last-child {
  margin-left: 1100px;
}
</style>
