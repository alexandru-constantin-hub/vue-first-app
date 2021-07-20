import { default } from './components/style/HeaderContainer.vue';
<template>
 
    <header-container>
      <template v-slot:title><h1>Demo application</h1></template>
      <template v-slot:default>
        <navigation></navigation>
      </template>
    </header-container>
    <main>
        <router-view></router-view>
    </main>
     
        
      
    
</template>

<script>


export default {
  
}

</script>
<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

main {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}


#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #0c3a0b;
  margin: 0 0 1rem 0;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li, #app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #0b4104;
  background-color: #298a10;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  color: #fad60a;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}



</style>


