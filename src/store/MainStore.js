import { defineStore } from 'pinia'
import { reactive, ref } from "vue"
import { quizData } from "../Data.js"


export const useMainStore = defineStore('mainStore', () => {

    const data = reactive(quizData)

    const loadingState = ref('base')
    const startState = ref(false)

    const changeState = () => {
        startState.value = !startState.value
    }

    return { startState, changeState, data, loadingState }
})