<script setup>
import {ref} from "vue"
import{ useMainStore} from "../store/MainStore"
const store = useMainStore()

const burgerState = ref(false)

function burgetStateChange() {
    burgerState.value = !burgerState.value
    
}

</script>

<template>
    <div class="navTopContainer">
        <nav v-if="!burgerState" class="navbar">
            <div @click="burgetStateChange" class="burger">burger</div>
        </nav>
        <div class="burgerOpen" v-else>
            <div class="closeBtnContainer">
               <div
               @click="burgetStateChange"
               class="closeButton">cross</div> 
            </div>
            
            <ul class="ul">
                <li>Главная</li>
                <li>Информация о тесте</li>
                <li>
                    <button @click="store.changeState" class="startTest">Пройти тест</button>
                </li>
            </ul>

        </div>
    </div>
    
</template>


<style scoped>
.navTopContainer{
    max-width: 1024px;
}
.burger{
    
  display: inline-block;
  width: 2.5em;
  height: 2.5em;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' fill-rule='evenodd' d='M3.5 5a1 1 0 0 0 0 2h17a1 1 0 1 0 0-2zm-1 7a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1m0 6.001a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1' clip-rule='evenodd'/%3E%3C/svg%3E");
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;

}
.ul{
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 30px;
    list-style-type: none;
    font-size: 26px;
    line-height: 22px;
    text-align: left;
    padding: 20px;

}
.ul button:hover{
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0 0 5px 2px yellow;
}
.navbar {
    width: 100%;
    height: 46px;
    background-color: #333;
    color: white;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
}
.burgerOpen{
    max-width: 1024px;
    width: 100%;
    height: 100vh;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    padding: 5px;
    box-sizing: border-box;
}
.closeBtnContainer{
    display: flex;
    justify-content: start;
    width: 100%;
}
.closeButton{
  
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
.startTest{
    color:yellow;
    background:none;
    border:none;
    font-size: 26px;
    line-height: 22px;
    padding:0;
}
@media (min-width: 768px) {
    .navbar {
    }
    .burger {
    }
    .burgerOpen {
    }
    .closeBtnContainer {
    }
    .closeButton {
    }
    .ul {
    }
    .startTest {
    }
}
</style>