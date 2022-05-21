<template>
  <div>
      <h2>Todo List</h2>
    <form @submit.prevent="createTodo">
      <input
        type="text"
        placeholder="Enter your notes"
        id="search"
        v-model="todoNote" ref="inputRef"
      />
      <button>Create</button>
    </form>
    <template v-for="(todo, index) in allTodo" :key="index">
      <div class="todo-box">
        <p>{{ todo }}</p>
        <span @click="editFunction(index)">Edit</span>
        <span @click="deleteFunction(index)">Delete</span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      todoNote: "",
      allTodo: [],
    };
  },

  methods: {
    createTodo() {
      if(this.todoNote != ""){
          this.allTodo.push(this.todoNote);
      this.todoNote = "";
      document.getElementById("search").focus();
      }
    },
    editFunction(index){
        console.log(this.allTodo[index]);
        this.todoNote = this.allTodo[index];
        document.getElementById("search").focus();
    },
    deleteFunction(index){
        console.log("delete");
        this.allTodo.splice(index,1)
    }
  },
};
</script>

<style scoped>
form {
  padding: 3px;
}
form input {
  height: 35px;
  width: 850px;
  padding: 10px;
  font-size: 16px;
}
form button {
  height: 35px;
  width: 100px;
  padding: 0px;
  font-size: 18px;
}
.todo-box {
  display: inline-block;
  background-color: rgb(200, 186, 186);
  border: 1px solid gray;
  margin: 10px;
  padding: 5px;
}
.todo-box p {
  padding: 2px;
}
.todo-box span {
  font-size: 16px;
  padding: 2px;
  border-radius: 3px;
  font-weight: 500;
  margin: 2px;
}
.todo-box span:nth-child(2) {
  background-color: rgb(108, 108, 202);
}
.todo-box span:nth-child(2):hover {
  background-color: blue;
}
.todo-box span:last-child {
  background-color: rgb(212, 104, 104);
}
.todo-box span:last-child:hover {
  background-color: red;
}
</style>
