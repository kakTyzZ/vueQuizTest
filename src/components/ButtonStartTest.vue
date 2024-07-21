<script setup >
import {useMainStore} from "../store/MainStore"
const store = useMainStore()


const props = defineProps({
    bg:String,
    color:String
})
</script>

<template>
    <button
    @click="store.changeState"
    :style="{'background-color':`${props.bg}`,'color':`${props.color}` }"
    class="btn">
        <strong>ПРОЙТИ ТЕСТ</strong>
    </button>
</template>

<style scoped>
.btn{
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

}
.btn:hover{
    cursor: pointer;
    box-shadow: 0 10px 15px -3px rgba(182, 170, 126, 0.5), 0 4px 6px -4px rgba(149, 118, 118, 0.5);
    box-shadow: 10 10 10 21px #FFC700;
}
@media (min-width: 768px) {
    .btn{
        max-width: 300px;
        width: 100%;
        font-size: 26px;
        height: 65px;
    }
}
</style>