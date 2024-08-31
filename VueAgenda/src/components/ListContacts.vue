<script setup>

    const props = defineProps({
        title: {
            type: String,
            default: 'lista'
        },
    })

</script>

<template>
    <div class="m-6">
    <h3 class="text-xl my-3">{{ title }}</h3>
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
</template>