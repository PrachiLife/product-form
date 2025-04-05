<template>
    <form class="">
        <div v-for="product in productData" :key="product.title">
            <div v-if="product.type=='text'">{{ formData }}
                <InputTextField :label="product.title" type="text" :required="product.required" v-model="formData[product.inputKey]"/>
            </div>
        </div>
    </form>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from 'pinia';
import productFormData from "../json/productData.json";
import InputTextField from "./InputTextField.vue";
import {useProductFormStore} from "../store/index";

const productFormStore=useProductFormStore();
const {formData}=storeToRefs(productFormStore);


// const modelValue=computed((product)=>{
//     get(){
//         return product[inputKey];
//     },
//     set(value){
//         product[inputKey]=value;
//     }
// })

const productData=ref(productFormData.product);

</script>

<style scoped>

</style>