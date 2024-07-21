<script setup >
import {onMounted} from "vue"
import {useMainStore} from "../store/MainStore"
const store = useMainStore()


onMounted(()=>{
    setTimeout(()=>{
        store.loadingState = 'result'
    },3000)
})

</script>

<template>
    <div class="container">
        <div class="innerContainer">
            <div class="innerContainer__title">Обработка результатов</div>
            <div class="innerContainer__img">
                <img src="../assets/loading.png" alt="">
            </div>
            <div class="innerContainer__text">
                Определение стиля мышления...........
.......................................................
            </div>
        </div>
    </div>

</template>

<style scoped>
.container {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    
    
}
.innerContainer{
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 30px;
    
}
.innerContainer__title{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 30px;
    max-width: 50%;
}
.innerContainer__text{
    display: flex;
    font-size: 16px;
    
    text-align: center;
}
</style>