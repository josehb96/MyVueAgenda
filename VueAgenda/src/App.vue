<script setup>
  import { ref } from 'vue';
  import SearchContacts from './components/SearchContacts.vue'; 
  import ListContacts from './components/ListContacts.vue';
  
  // 
  import { getAllContacts } from './services/apiContacts';
import { list } from 'postcss';

  //
  // let listContacts = getAllContacts()
  const listContacts = ref(getAllContacts()) // Ahora esta variable se ha convertido en un estado de Vue al usar la directiva ref
  const title = 'Mi Agenda - Lista de contactos'

  const clearList = () => {
    listContacts.value = []
  }  

</script>

<template>
  <div class="flex items-center flex-col p-5">
    <h1 class="text-xl m-4">{{ title }}</h1>
    <SearchContacts listContacsts="listContacts"/>
    <ListContacts title="Lista de Resultados" :listContacts="listContacts"/>     

    <div>
      <button class="bg-blue-500 py-1.5 px-5" @click="clearList">Limpiar</button> 
    </div>
  </div>
</template>