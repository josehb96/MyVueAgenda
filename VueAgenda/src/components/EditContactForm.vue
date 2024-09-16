<script setup>



</script>

<template>
    <div>
        <h1 class="text-3xl m-10">Editar Contacto</h1>
        <form @submit.prevent="updateContact">
            <input type="text" class="block flex-1 border-0 bg-white m-10 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="nombre">
            <input type="text" class="block flex-1 border-0 bg-white m-10 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="numero">
            <input type="email" class="block flex-1 border-0 bg-white m-10 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="email">
            <input type="text" class="block flex-1 border-0 bg-white m-10 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="recompensa">
        </form>
        <RouterLink to="/" class="my-10 mx-10 py-2 px-4 bg-blue-500 rounded-full">Volver</RouterLink>
    </div>
</template>


<style lang="scss" scoped>

</style>