<script setup >
import ButtonStartTest from './ButtonStartTest.vue';
</script>

<template>
    <div class="container">
        <p class="p">Также по результатам теста
            <span class="span">вы получите</span>
             подробные <span class="span">советы</span>  по определению наиболее перспективной
             <span class="span">для вашего типа интеллекта сферы деятельности</span> , 
            которая принесет вам скорейший финансовый результат.
        </p>
        <div class="imgContainer">
            <img src="../assets/brain.png" alt="">
        </div>

        <div class="btn-container">
           <ButtonStartTest/>
        </div>
    </div>
</template>

<style scoped>
.container{
    padding:10px 11px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.p{
font-size: 22px;
line-height: 24px;
letter-spacing: 0.05em;
text-align: left;

}
.btn{
    background-color: #FFC700;
    border:none;
    border-radius: 50px;
    width: 200px;
    height: 44px;
    font-size: 16px;

}
.span{
    font-size: 22px;
    font-weight: bold;
    line-height: 24px;
    letter-spacing: 0.05em;
    text-align: left;
    text-transform: uppercase;
 
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
   
  
    .imgContainer {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .imgContainer img{
        width: 400px;
    }
    
}
</style>