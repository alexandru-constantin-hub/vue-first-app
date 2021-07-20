<template>
  <section>
    <header>
      <h1>My Tasks</h1>
    </header>
    <new-task @add-task="addTask"></new-task>
    <ul>
        <li v-for="task in tasks" :key="task.id">{{task.description}}<br><button @click="deleteTask(task.id)">Delete task</button></li>
      
    </ul>
  </section>
</template>

<script>
import NewTask from './NewTask.vue';
export default {
  components: {
      NewTask
  },  
  data() {
    return {
      tasks: [
        {
          id: "1",
          description: "Learn Vu",
        },
        {
          id: "2",          
          description: "Learn Vuex"
        },
      ],
    };
  },
  methods: {
    addTask(description) {
      const newTask = {
        id: new Date().toISOString(),
        description: description
        };
      this.tasks.push(newTask);
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
    }
  }
};
</script>

<style scope>

</style>