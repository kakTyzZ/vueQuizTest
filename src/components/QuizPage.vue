<script setup >
import {ref} from "vue"
import Questions from "./Questions.vue"
import{ useMainStore} from "../store/MainStore"
const store = useMainStore()

const burgerState = ref(false)

const burgerOpenFunc =()=>{
    store.changeState()
}

</script>



<template>
    <div class="navContainer">
        <div v-if="burgerState === false" class="nav">
           <button @click="burgerState = true" class="burger"></button>
            <img class="img" src="../assets/brainMini.png" alt="">
            <div v-if="store.loadingState !== 'result'" class="logo">ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ</div>
            <div v-else class="logo">ГОТОВО!</div> 
        </div>
        <div class="openBurger" v-if="burgerState === true">
            <div class="openBurger__innerContainer">
                <button @click="burgerOpenFunc" class="burgerButton">Main Page</button>
                <button @click="burgerState = false" class="closeButton">Close</button>
            </div>
            
        </div>
        
    </div>
    <div class="container">
        <Questions/>
    </div>

</template>


<style scoped>
.closeButton{
    cursor: pointer;
  position: absolute;
  top: 5%;
  left: 20%;
  width: 3em;
  height: 3em;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z'/%3E%3C/svg%3E");
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  color:yellow;

}
.burgerButton{
    background: none;
    border:none;
    padding: 10px 30px;
    cursor: pointer;
    color: white;
    font-weight: bold;
    font-size: 36px;
}
.burgerButton:hover{
    border:2px solid yellow;
    border-radius: 20px;
}
.navContainer{
    
    width: 100%;
}
.openBurger{
    position: fixed;
    top: 0;
    left: 0;
    
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0);
    z-index: 100;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
}
.nav{
    background-color: #3a3939 ;
    display: flex;
    height:60px ;
    justify-content: start;
    align-items: center;
    gap: 5px;
    width: 100%;
}
.burger {
    display: inline-block;
  width: 2em;
  height: 2em;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' fill-rule='evenodd' d='M3.5 5a1 1 0 0 0 0 2h17a1 1 0 1 0 0-2zm-1 7a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1m0 6.001a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1' clip-rule='evenodd'/%3E%3C/svg%3E");
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  color: gray;
}
.img{
    height: 45px;
    width: 50px;
}
.logo{
    color:#FFC700 ;
}
.container{
    background-image: url('../assets/space.png');
    height: 93.5vh;
    width: 100%;
    color: white;
}

@media (min-width: 768px) {
    .nav {
        height:65px ;
        gap: 10px;
    }
    .burger {
        width: 3em;
    height: 3em;
    }
    .img {
        height: 65px;
    width: 65px;
    }
    .logo {
        font-size: 30px;
    }
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
    }
}
</style>