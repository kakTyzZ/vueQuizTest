<script setup>
import {ref} from "vue"

const callState = ref(false)
const answerData = ref()

const closeResult =()=>{
    callState.value = false
}
const makeACall =async()=>{
    const response = await fetch('https://swapi.dev/api/people/1/')
    const data = await response.json()
    callState.value = true
    answerData.value = data
    console.log(answerData.value);
}



</script>

<template>
    <div class="container">
        <h3 class="title">Ваш результат рассчитан: </h3>
        <p class="TitleText">
            <span class="titleTextSpan">Вы относитесь к 3%</span>
             респондентов, чей уровень интеллекта более   чем на 
            15 пунктов отличается от среднего в большую или меньшую сторону! </p>

        <div class="getResult">Скорее получите свой результат!</div>
        <div class="mainTextContainer">
            <p class="mainText">В целях защиты персональных 
                данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона
            </p>
        </div>
        <div class="timerContainer">
            <div>Звоните скорее, запись доступна всего </div>
            <div class="minutes">10:00 МИНУТ</div>
        </div>
        <div class="buttonContainer">
            <button @click="makeACall" class="btn">
                <img class="imgIcon" src="../assets/CallPic.png" alt="">
                <div class="btnText">позвонить и прослушать
                    результат </div>
            </button>
        </div>
        <div
        class="callState"
        v-if="callState">
            <div class="callState__Inner">
                <ul class="ul" v-if="answerData !== undefined">
                    <li>Name: {{ answerData.name }}</li>
                    <li>Birth_year:{{ answerData.birth_year }}</li>
                    <li>Eye_color: {{ answerData.eye_color }}</li>
                    <li>Gender: {{ answerData.gender }}</li>
                    <li>Skin_color: {{ answerData.skin_color }}</li>
                    <li>height: {{ answerData.height }}</li>
                    <button @click="closeResult" class="lastLi">Закрыть</button>
                </ul>


                <div v-else>loading...</div>
            </div>
        </div>
                                            
    </div>
</template>

<style scoped >
.container{
    
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding:35px 10px;
}
.title {
    margin: 0;
    font-size: 24px;
}
.TitleText {
    font-size: 18px;
}
.titleTextSpan{
    text-decoration: underline;
}
.getResult {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color:#3BDE7C;
    font-size: 28px;
}
.mainTextContainer {
    padding: 10px;
    display: flex;
    text-align: center;
    background-color: #1C2741;
    margin: 10px;
}
.mainText {
    font-size: 14px;
    line-height: 1.5;
}
.timerContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    color:#3BDE7C;
}

.buttonContainer {
    display: flex;
    background-color:#EB1B00;
    width: 100%;
}
.btn {
    background: none;
    border:none;
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: start;
    text-align: start;
    padding: 10%;
    gap: 15px;
}
.imgIcon {
}
.btnText {
    color:white;
    font-size: 16px;
    line-height: 17.6px;
    font-weight: bold;
    letter-spacing: 0.05em;

}
.callState{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
}
.callState__Inner{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    width: 50%;
    height: 50%;
    color:black;
    font-size: 20px;
    line-height: 17.6px;
    
    letter-spacing: 0.05em;
}
.ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0;
    margin: 0;
}
.ul li{
    border-bottom: #1C2741 1px solid;
}
.lastLi{
    position: absolute;
    bottom: 10px;
    color:red;
    cursor: pointer;
    font-weight: bold;
    font-size: 26px;
    border:none;
    background: none;

}
@media (min-width: 768px) {
  
.title {
    font-size: 36px;
}
.TitleText {
    font-size: 26px;
    text-align: center;
}

.getResult {
    font-size: 34px;
}
.mainTextContainer {
    border-radius: 50px;
}
.mainText {
    font-size: 20px;
}
.timerContainer {
    font-size: 26px;
}
.minutes {
    font-size: 26px;
}
.buttonContainer {
    width: 70%;
    border-radius: 50px;
}
.btn {
    display: flex;
    align-items: center;
}
.imgIcon {
}
.btnText {
    font-size: 26px;
}
}
</style>