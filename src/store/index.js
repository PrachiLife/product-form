import { defineStore } from 'pinia'
import { reactive } from 'vue';

export const useProductFormStore = defineStore('productFormStore',()=>{
    const formData=reactive({});

    return {
        formData,
    }
})