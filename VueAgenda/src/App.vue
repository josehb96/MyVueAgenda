<script setup>
  import SearchContacts from './components/SearchContacts.vue'; 
  import ListContacts from './components/ListContacts.vue';
  
  const title = 'Mi Agenda - Lista de contactos'

</script>

<template>
  <div class="flex items-center flex-col p-5">
    <h1 class="text-xl m-4">{{ title }}</h1>
    <SearchContacts />
    <ListContacts title="Lista de Resultados"/>      
  </div>
</template>