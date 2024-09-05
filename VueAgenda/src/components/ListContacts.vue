<script setup>

    import { computed } from 'vue';

    // imports
    import { contactList } from '../composables/useListContacts';
    import BtnDelete from './BtnDelete.vue';

    // props 
    const props = defineProps({
        title: {
            type: String,
            default: 'lista'
        }
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
    </div>
</template>