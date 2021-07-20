import { createApp } from 'vue';
import HeaderContainer from './components/style/HeaderContainer.vue';
import DisplayFriends from './components/friends/DisplayFriends.vue';
import DisplayTasks from './components/tasks/DisplayTasks.vue';
import Navigation from './components/nav/Navigation.vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';


const app = createApp(App);

app.component('header-container', HeaderContainer);
app.component('navigation', Navigation);

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/friends', component: DisplayFriends },
      { path: '/', component: DisplayFriends },
      { path: '/tasks', component: DisplayTasks },
    ]
  });

  app.use(router);


app.mount('#app')
