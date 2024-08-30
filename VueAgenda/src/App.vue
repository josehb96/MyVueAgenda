<script setup>
  const title = 'Mi Agenda - Lista de contactos'
  
  const buscarContacto = () => {
    console.log('buscando contacto ...') 
  }
</script>

<template>
  <div class="flex items-center flex-col p-5">
    <h1 class="text-xl m-4">{{ title }}</h1>
    <div class="flex items-center">
      <input 
        type="text" 
        class="block flex-1 border-0 bg-white py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
        placeholder="buscar..">
      <button class="bg-blue-500 py-1.5 px-5">Buscar</button>
    </div>
    <div>
      <table class="table-fixed">
        <thead>
          <th>Foto</th>   
          <th>Nombres</th>   
          <th>numero</th>   
          <th>correo</th>   
          <th>accion</th>
        </thead>   
        <tbody>
          <tr v-for="n in 20">
            <td class="p-3 border-b-2">{{ n }}</td>  
            <td class="p-3 border-b-2">Monkey Luffy</td>
            <td class="p-3 border-b-2">00124578</td>
            <td class="p-3 border-b-2">reypirata@gmail.com</td>
            <td>
              <a href="#" class="py-2 px-4 bg-purple-800 rounded-full">Editar</a>  
            </td>
          </tr>
        </tbody>
      </table>   
    </div>
  </div>
</template>

<style scoped>

</style>
