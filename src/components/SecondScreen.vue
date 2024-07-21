



<template>
    <div class="container">
        <div class="quoteContainer top">
            <img src="../assets/topQ.png" alt="">
        </div>
       
        <p class="textContainer">
            <strong>Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, 
        но и выработать список рекомендаций для повышения этого показателя.</strong>
             </p>
        <div class="quoteContainer bot">
            <img src="../assets/botQ.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.container{
    padding: 10% 0;
    background-image: url('../assets/image.png');
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: red;
    position: relative;
}
.quoteContainer{
    display: flex;
    justify-content: start;
    width: 100%;
    
}
.top{
    padding-left: 10%;
}
.bot{
    justify-content: end;
    padding-right: 10%;
}

.textContainer{
    color: white;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.05em;
    text-align: center;
    padding: 0 10%;

}
@media (min-width: 768px) {
    .textContainer {
        font-size: 30px;
    }
}
</style>