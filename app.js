const app = Vue.createApp({
  data() {
    return {
      todos: [],
      completed: [],
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos") // fetch the data
      .then((res) => res.json()) // convert the data into a json file
      .then((jsonRes) => {
        this.todos = jsonRes; // asing json data (jsonRes) into todos array
        console.log(jsonRes);
      });
  },
  methods: {
    handleClick(id) {
      // get the todo with specific id
      let todo = this.todos.find((x) => x.id === id);
      console.log("todo", todo);
      // push that todo to the completed array
      this.completed.push(todo);
      console.log("completed", this.completed);
      // get rid of things that are pushed to the completed array
      this.todos = this.todos.filter((x) => x.id !== id);
    },
    handleClick2(id) {
      let completed = this.completed.find((x) => x.id === id);
      this.todos.push(completed);
      this.completed = this.completed.filter((x) => x.id !== id);
    },
  },
});

app.mount("#app");
