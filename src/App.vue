<template>
  <NavBar />
  <router-view></router-view>
  <!-- <SearchBar /> -->
  <!-- <router-view></router-view> -->
</template>

<script>
import NavBar from './components/NavBar.vue'
// import SearchBar from "./components/SearchBar.vue"

export default {
  name: 'App',
  components: {
    NavBar
}
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
