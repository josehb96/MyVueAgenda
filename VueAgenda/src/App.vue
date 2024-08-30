<script setup>
  const title = 'Mi Agenda - Lista de contactos'
  
  const buscarContacto = () => {
    console.log('buscando contacto ...') 
  }
</script>

<template>
  <div class="flex items-center flex-col p-5">
    <h1 class="text-xl m-4">{{ title }}</h1>
    <div>
      <input type="text">
      <button @click="buscarContacto">Buscar</button>
    </div>
    <div>
      <table>
        <thead>
          <th>Foto</th>   
          <th>Nombres</th>   
          <th>numero</th>   
          <th>correo</th>   
        </thead>   
        <tbody>
          <tr>
            <td></td>  
            <td>Monkey Luffy</td>
            <td>00124578</td>
            <td>reypirata@gmail.com</td>
          </tr>
        </tbody>
      </table>   
    </div>
  </div>
</template>

<style scoped>

</style>
