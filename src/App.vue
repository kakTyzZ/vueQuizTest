<script setup >

import NavBar from "./components/NavBar.vue"
import SecondScreen from "./components/SecondScreen.vue"
import StartTestScreen from "./components/StartTestScreen.vue"
import ThirdScreen from "./components/ThirdScreen.vue"
import Footer from "./components/Footer.vue"
import QuizPage from "./components/QuizPage.vue"

import{ useMainStore} from "./store/MainStore"
const store = useMainStore()



</script>

<template>
  <div class="AppContainer">
    <div v-if="!store.startState">
      <NavBar/>
      <StartTestScreen/>
      <SecondScreen/>
      <ThirdScreen/>
      <Footer/>
    </div>
    <div class="Quiz" v-else>
      <QuizPage/>
    </div>
    
  </div>
</template>


<style>
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f0e0e0bd;
}
.AppContainer{
  max-width: 1024px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  box-shadow: 0 0 5px #00a86b,0 0 5px #00a86b,0 0 5px #00a86b;
}
.Quiz{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
  
}
</style>
