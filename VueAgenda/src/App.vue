<script setup>
  import { ref } from 'vue';
  import SearchContacts from './components/SearchContacts.vue'; 
  import ListContacts from './components/ListContacts.vue';
  
  // 
  import { getAllContacts } from './services/apiContacts';
  // import { contactList } from './composables/useListContacts';
  import { useListContacts } from './composables/useListContacts';
 
  // states 
  const { contactList } = useListContacts()
  
  // let listContacts = getAllContacts()
  // const listContacts = ref(getAllContacts()) // Ahora esta variable se ha convertido en un estado de Vue al usar la directiva ref
  const title = 'Mi Agenda - Lista de contactos'

  const clearList = (newList) => {
    contactList.value = newList 
  }  

  const filterListContact = (kword) => {
    // Con este if conseguimos que la lista original se recargue en caso de que el campo de filtrado este vacío
    if (kword.trim() === '') {
      contactList.value = getAllContacts()
    }
    // Lo normal aquí sería crear una copia de la lista de contactos usando let listaActual = [...listContacts] para evitar perder la lista original,
    // y despues hacer el filtro, pero como nosotros ya inicializamos ese valor cada vez que se carga el componente no necesitamos hacer esto.
    contactList.value = contactList.value.filter(
      contact => contact.name.toLowerCase().includes(kword.toLowerCase()
    ))
  }

</script>

<template>
  <div class="flex items-center flex-col p-5">
    <h1 class="text-xl m-4">{{ title }}</h1>
    <SearchContacts @filterContact="filterListContact"/>
    <ListContacts title="Lista de Resultados"/>     

    <div>
      <button class="bg-blue-500 py-1.5 px-5" @click="clearList">Limpiar</button> 
    </div>
  </div>
</template>