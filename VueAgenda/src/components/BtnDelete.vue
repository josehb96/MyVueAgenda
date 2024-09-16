<script setup>

    // imports
    import { ref } from 'vue'

    const showConfirmation = ref(false)
    
    // emits
    const emit = defineEmits(['deleteContact'])

    // methods
    const openDeleteConfirmation = () => {
        showConfirmation.value = true 
    }

    const removeContact = () => {
        showConfirmation.value = false
        emit('deleteContact')
    }

</script>

<template>
    <div v-if="!showConfirmation">
        <a href="#" class="py-2 px-4 bg-red-500 rounded-full" @click="openDeleteConfirmation">Eliminar</a>  
    </div>
    <div v-else>
        <a href="#" class="py-2 px-4 mx-1 bg-red-500 rounded-full" @click="removeContact">Si</a>  
        <a href="#" class="py-2 px-4 mx-1 bg-gray-500 rounded-full" @click="showConfirmation = false">No</a>  
    </div>
</template>

<style lang="scss" scoped>

</style>