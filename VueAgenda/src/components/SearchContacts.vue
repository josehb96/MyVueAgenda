<script setup>

    // imports
    import { reactive, ref } from 'vue'

    // props
    const props = defineProps({
        listContacts: Array,
        setFunction: Function 
    })

    // states
    const bgBtn = ref('blue') 
    const stylesBtn = reactive({
        background: 'blue',
        color: 'blank'
    })

    const kword = ref('') 

    // methods 
    const isFocus = () => {
        // bgBtn.value = 'red'
        stylesBtn.background = 'grey'
        stylesBtn.color = 'white'
    }
   
    const filtrarLista = () => {
        props.setFunction() // Ejecutamos una función que se está enviando desde el componente padre
    } 
    
</script>

<template>
    <div class="flex items-center">
        <input 
            type="text" 
            class="block flex-1 border-0 bg-white py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
            placeholder="buscar.."
            @focus="isFocus">
        <button 
            class="bg-blue-500 py-1.5 px-5" 
            :style="stylesBtn"
            @click="filtrarLista"
        >Buscar</button>
    </div>
</template>