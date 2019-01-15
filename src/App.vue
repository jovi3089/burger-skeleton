<template>
  <div id="app">
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <router-view/>
  </div>
</template>

<script>
import Ordering from "./views/Ordering.vue"

export default {
  name: 'app',
  components: {
    Ordering
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato');
body {
  margin: 0 0 0 0;
  height: 100vh;
  font-family: 'Montserrat';
  background-size: 200% 200%;
  background-color: #f7f7f7;
  /*animation: Gradient 20s linear infinite;
  background: radial-gradient(white, #f7f7f7);*/
}
/*
body {
  background: white;
  background-size: 200% 200%;
  animation: Gradient 20s linear infinite;
  margin: 0;
}*/

@keyframes Gradient {
  0% {
    background-position: 10% 10%
  }
  20% {
    background-position: 50% 50%
  }
  40% {
    background-position: 10% 90%
  }
  60% {
    background-position: 90% 90%
  }
  80% {
    background-position: 90% 10%
  }
  100% {
    background-position: 10% 10%
  }
}

</style>
