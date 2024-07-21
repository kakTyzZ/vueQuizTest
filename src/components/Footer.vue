<script setup >
import ButtonStartTest from './ButtonStartTest.vue';
</script>


<template>
    <div>
        <div class="bgContainer">
            <div class="frontContainer">
                <div class="topText">Прохождение теста займет у вас не более
                    <span class="yellow-color">12 минут</span>
                    , а его результаты вы сможете 
                    <span class="yellow-color">использовать всю жизнь.</span> 
                </div>
                <div
                class="centralText"
                >Профессиональная интерпретация и детально
                <strong>проработанные рекомендации</strong>
                 позволят вам качественно
                 <strong>изменить все аспекты своей жизни:</strong>
                  от финансового до любовного.</div>
                <div class="btn-container">
                        <ButtonStartTest color="white" bg="none"/>
                </div>
            </div> 
            
            <img class="lighting left" src="../assets/Light-left.png" alt="">
            <img class="lighting right" src="../assets/Light-right.png" alt="">
            
        </div>
    </div>
</template>

<style scoped>
.bgContainer{
    position: relative;
}
.lighting{
    position: absolute;
    
}

.left{
    left: 10px;
    top: 420px;
    transform: rotate(-10deg);
}
.right{
    right:0;
    top: 100px;
}
.frontContainer{
    background-image: url('../assets/space.png');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 100vh;
    z-index: 10;
    color: white;
    padding: 20px 14px;
}
.topText{
font-size: 22px;
line-height: 20px;
letter-spacing: 0.05em;
text-align: left;

}
.centralText{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 300px;
    background-color: #F3F3F2CC;
    
    border-radius: 20px;
    color: black;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.05em;
    text-align: left;
    padding: 15px 15px;

}
/* .btn{
    width: 200px;
    height: 44px;
    border-radius: 50px;
    background: none;
    color: white;
    font-weight: bold;
    font-size: 14px;
    line-height: 17.6px;
    letter-spacing: 0.1em;
    text-align: center;
    border:1px solid white;
    margin-bottom: 40px;
    margin-top: 30px;

} */
.yellow-color{
    color:#FFC700 ;
}
.btn-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 15px;
    gap: 20px;
    font-size: 15px;
}

@media (min-width: 768px) {
    .topText {
        font-size: 26px;
        text-align: center;
    }
    .centralText {
        font-size: 24px;
    }
}
</style>