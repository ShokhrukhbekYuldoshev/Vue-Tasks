<template>
  <div id="app">
    <router-view />
  </div>
</template>
 
<script>
export default {
  name: 'App',
  components: {

  }
};
</script>


<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

#app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

button {
  padding: 5px 10px;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007bff;
}

/* on hover darkens the button */
button:hover {
  background-color: darken;
}
</style>
