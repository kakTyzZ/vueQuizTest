<script setup>
import {ref,watch,computed,provide} from "vue"
import{ useMainStore} from "../store/MainStore"
import Loading from "./Loading.vue"
import Result from "./Result.vue"
const store = useMainStore()



const currentIndex = ref(0)
const selectedButton = ref(null)
const selectedColor = ref(null)
const amountOfAnswers = ref(0)



const lengthOfProgressBar = 100/store.data.length
const progressBarWidth = ref(lengthOfProgressBar)

const currentHeight = computed(()=>{
    if(store.data[currentIndex.value].question.pic !== undefined){
        return `${200/amountOfAnswers.value}px` 
    }
    else{
       return `${350/amountOfAnswers.value}px` 
    } 
})
const currentWidth = computed(()=>{
       return `${window.innerWidth/amountOfAnswers.value - 26}px` 
    })



const nextQuestion = ()=>{
    if(selectedButton.value === undefined && selectedColor.value === undefined){return }
    if(currentIndex.value < store.data.length - 1){
      currentIndex.value++
    selectedButton.value = null
    selectedColor.value = null  
    }else{
        store.loadingState = 'loading'
    }
    
}
const btnClick = (item)=>{
    selectedButton.value = item
}
const colorClick = (item)=>{
    selectedColor.value = item
    
}
watch(currentIndex,()=>{
    amountOfAnswers.value = store.data[currentIndex.value].answers.length

    progressBarWidth.value += lengthOfProgressBar
    console.log('progressBarWidth',progressBarWidth.value);
    console.log('lengthOfProgressBar',lengthOfProgressBar.value);
    
})



</script>



<template>
    <div class="container">
        <div v-if="store.loadingState !== 'result'" class="progress">
                <div 
                :style="{'width':progressBarWidth+'%'}"
                class="innerProgress"></div>
                
        </div>
        <div v-if="store.loadingState === 'base'" class="MainQuestionContainer">
            <div   class="innerContainer" >
            <h2
            class="h2Title"
            >{{ store.data[currentIndex].question.title }}</h2>
            
            <div
            class="picContainer"
            v-if="store.data[currentIndex].type === 'picture' || store.data[currentIndex].question.pic !== undefined">

                <img class="pic"   :src="store.data[currentIndex].question.pic" alt="">

            </div>
            <div class="ifContainer">
                <div
                class="answerContainer"
                v-if="store.data[currentIndex].type === 'basic'">
                    <div v-for="item in store.data[currentIndex].answers" :key="item"
                    
                    class="inputContainer"
                    :style="{'height':currentHeight} " 
                    >
                    <button
                        @click="btnClick(item)"
                        :class="{ 'selected': selectedButton === item }"
                        class="answerBtn">
                    <div 
                    :class="{ 'blueBG': selectedButton === item }"
                    class="circle"></div>
                    <div 
                    :class="{ 'blackText': selectedButton === item }"
                    class="title">{{ item.title }}</div></button>
                    </div>
                </div>

                <div v-if="store.data[currentIndex].type === 'colors'">
                    <div class="gridContainer">
                    <div v-for="item in store.data[currentIndex].answers" :key="item" class="">
                        <button
                        @click="colorClick(item)"
                        :class="{ 'yellowBorder': selectedColor === item }"
                        :style="{'background-color': `${item.title}`}"
                        class="gridElement">
                            {{ item.title }}
                        </button>
                        
                    </div>
                    
                    </div>
                </div>

                <div
                class="pictureTypeContainer"
                v-if="store.data[currentIndex].type === 'picture'">
                    <div
                    class="btnPicContainer"
                    v-for="item in store.data[currentIndex].answers" :key="item" >
                    <button
                        @click="btnClick(item)"
                        :class="{ 'yellowBorder': selectedButton === item }"
                        :style="{'width':currentWidth}"
                        class="pictureButton">
                    
                    <div 
                    :class="{ 'blackText': selectedButton === item }"
                    class="buttonText">{{ item.title }}</div>
                    </button>
                    </div>
                </div>
                
            </div>
            
        </div>
        <div class="btnContainer" >
            <button
            :class="{ 'selected': selectedButton !== null || selectedColor !== null }"
            @click="nextQuestion"
            class="btn">ДАЛЕЕ</button>
        </div>
        </div>
        <div
        style="height: 100%"
         v-if="store.loadingState === 'loading'">
            <Loading/>
        </div>

        <div
        style="height: 100%"
         v-if="store.loadingState === 'result'">
            <Result/>
        </div>
        

        
    </div>    

</template>

<style scoped>
.MainQuestionContainer{
    max-height: 100%;
    height: 100%;
    
}
.container {
    display: flex;
    flex-direction: column;
}
.ifContainer{
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    
    justify-content: center;
}
.progress {
    display: flex;
    margin: 0 auto;
    margin-top: 30px;
    background-color: gray;
    width: 85%;
    border-radius: 25px;
    position: relative;
}
.innerProgress{
    background-color: rgb(8, 201, 8);
    
    height: 20px;
    border-radius: 25px;
}

.innerContainer {
    height: 90%;
    display: flex;
    flex:1;
    margin: 0 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.answerContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    max-height: 100%;
}
.inputContainer{
    position: relative;
    
    
    width: 100%;
   height: 50px;
    display: flex;
    align-items: center;
    
    margin: 5px 0;
    gap: 30px;
}
.answerBtn{
    position: relative;
    background: rgba(154, 154, 154, 0.71);
    border:none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 5px 0;
    gap: 30px;
}

.circle{
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: none;
    border:1px solid white;
    margin-left: 30px;
    
   
}
.title{
    color: white;
}
.btnContainer{
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 10px;
    
    
}
.btn{
    border-radius: 20px;
    height: 40px;
    width: 190px;
    font: bold;
    font-size: 14px;
    line-height: 17.6px;
    cursor: pointer;
    background-color: #fff;
}

.selected{
    background-color: rgb(250, 226, 9);
}
.blueBG{
    background-color: #2950C2;
    
}
.blackText{
    color:black;
}
.gridContainer{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    gap: 20px;
    padding: 10px;
}
.gridElement{
    max-width: 100%;
    width: 100%;
    height: 100%;
}
.yellowBorder{
   
   border:5px solid rgb(255, 174, 0);
}
.pictureTypeContainer{
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin: 40px 0;

}
.pictureButton{
    color:black;
    max-width: 40px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
}
.btnPicContainer{
    max-width: 50px;
}

.pic{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.picContainer{
    display: flex;
    flex-direction: column;
    flex:1;
}
.h2Title{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

@media (min-width: 768px) {
    .container {
        justify-content: center;
    }
    
   
    
    .btnPicContainer{
    max-width: 150px;
}
    .pictureTypeContainer {
        width: 100%;
        display:grid;
        grid-template-columns: repeat(4, 150px);
        gap: 20px;
        
        
    }
    .pictureButton {
        max-width: 150px;
        width: 150px;
        font-size: 32px;
        height: 60px;
    }
    .buttonText{
        width: 150px;
    }
   
    
}
</style>