<script setup>
import ButtonStartTest from './ButtonStartTest.vue';
</script>


<template>
    <div class="container">
        <img class="brainImg" src="../assets/bigBrain.png" alt="">
        <div class="innerContainer">
            <div class="innerContainer__first">
            <h4 class="title">Пройдите точный и быстрый </h4>
            <h1 class="text-yellow label">ТЕСТ НА ОПРЕДЕЛЕНИЕ IQ</h1>
            </div>

            <div class="btn-container">
                <ButtonStartTest/>
                <div>
                    <div class="text-yellow text">и получите рекомендации 
                    по развитию своего интеллекта 
                    </div>
                    <div>и улучшению финансового благосостояния и личной жизни</div>
                </div>
                
                <div>
                    <span></span>
                    <div>Подробнее</div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    position: relative;
    height: 95vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(187, 182, 182);
    overflow: hidden;
    background-image: url('../assets/space.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.brainImg{
    position: absolute;
    top: 180px;
}
.innerContainer{
    padding-top: 27px;
    padding-bottom: 11px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: white;
    max-height: 100%;
    height: 90%;
    
}
.innerContainer__first{
    margin: 0 auto;
}
.text-yellow{
    color: #FFC700;
}
.label{
    max-width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 15px;
    gap: 20px;
    font-size: 15px;
}
.text{
    font-size: 15px;
}
@media (min-width: 768px) {
    h4{
        margin: 10px;
    }
    .innerContainer{
        padding: 0;
    }
.btn-container > div {
    font-size: 26px;
}
.text{
    font-size: 26px;
}
.title{
    font-size: 26px;
}
}

</style>