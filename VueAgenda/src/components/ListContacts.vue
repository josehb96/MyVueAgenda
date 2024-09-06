<script setup>

    import { computed, watch, watchEffect } from 'vue';

    // imports
    // import { contactList } from '../composables/useListContacts';
    import { useListContacts } from '../composables/useListContacts';
    import BtnDelete from './BtnDelete.vue';

    // props 
    const props = defineProps({
        title: {
            type: String,
            default: 'lista'
        }
    })

    // state composables
    const { contactList, msjEmpy, showEmpy } = useListContacts() // Se crea una copia sólamente para el ámbito de este componente

    // watchers
    // En el primer parámetro indicamos qué estado queremos observar
    // watch(contactList, (newValue, oldValue) => { // Pasamos al callback el valor nuevo y el valor antes de ser mutado
    //     console.log(newValue, oldValue) 
    //     showEmpy('No se encontraron resultados')
    // })
    
    // Dentro de este callback, watchEffect está atento a verificar qué estados hay dentro de esta lógica 
    watchEffect(() => {
        console.log(contactList.value)
        showEmpy('No se encontraron resultados')
        // Si aquí escribieramos la lógica para otros estados también las observaría
    })    

    // methods
    const totalRecompensa = computed(() => {
        return contactList.value.reduce(
            (accumulator, contact) => accumulator + contact.recompensa, 0 
        ) 
    })
    
    // const totalRecompensas = () => {
    //     return props.listContacts.reduce(
    //         (accumulator, contact) => accumulator + contact.recompensa, 0 
    //     ) 
    // }    

</script>

<template>
    <div class="m-6">
    <h3 class="text-xl my-3">{{ title }} - {{ totalRecompensa }}</h3>
      <table class="table-fixed">
        <thead> 
            <th>Foto</th>   
            <th>Nombres</th>   
            <th>numero</th>   
            <th>correo</th>   
            <th>accion</th>
        </thead>   
        <tbody>
            <tr v-for="contact in contactList">
                <td class="p-3 border-b-2">{{ contact.id }}</td>
                <td class="p-3 border-b-2">{{ contact.name }}</td>
                <td class="p-3 border-b-2">{{ contact.phone }}</td>
                <td class="p-3 border-b-2">{{ contact.email }}</td>
                <td class="flex items-center">
                    <a href="#" class="py-2 px-4 mx-2 bg-purple-800 rounded-full">Editar</a>  
                    <BtnDelete />
                </td>
            </tr>
        </tbody>
      </table>   
      <p class="text-red-800">{{ msjEmpy }}</p>
    </div>
</template>