<script setup>

    import { useRoute } from 'vue-router';
import { useListContacts } from '../composables/useListContacts';

    const { contactList } = useListContacts()
    const route = useRoute()    

    const id = route.params.id
    const contact = contactList.value.find((contact) => contact.id === id)    

</script>

<template>
    <div class="flex justify-center">
        <div class="max-w-md">
            <div v-if="contact">
                <h1 class="text-3xl m-10">Información del contacto</h1>
                <table class="table-fixed mb-10">
                    <thead> 
                        <th>Id</th>   
                        <th>Nombre</th>   
                        <th>Número</th>   
                        <th>Correo</th>   
                    </thead>   
                    <tbody>
                        <tr>
                            <td class="p-3 border-b-2">{{ contact.id }}</td>
                            <td class="p-3 border-b-2">{{ contact.name }}</td>
                            <td class="p-3 border-b-2">{{ contact.phone }}</td>
                            <td class="p-3 border-b-2">{{ contact.email }}</td>
                        </tr>
                    </tbody>
                </table>   
                <RouterLink to="/" class="my-10 mx-10 py-2 px-4 bg-blue-500 rounded-full mt-10">Volver</RouterLink>
            </div>
            <div v-else>
                <h1 class="text-3xl m-10">No se encontró el contacto</h1>
            </div>
        </div>
    </div>

</template>


<style lang="scss" scoped>

</style>