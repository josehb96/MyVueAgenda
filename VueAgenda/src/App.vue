<script setup>
  const title = 'Mi Agenda - Lista de contactos'
  
  const buscarContacto = () => {
    console.log('buscando contacto ...') 
  }
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <div>
      <input type="text">
      <button @click="buscarContacto">Buscar</button>
    </div>
  </div>
</template>

<style scoped>

</style>
