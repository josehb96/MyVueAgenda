import { ref } from 'vue'

import { getAllContacts } from '../services/apiContacts'

const contactList = ref(getAllContacts())

export function useListContacts() {

    const msjEmpy = ref('')

    // methods
    const showEmpy = (msj) => {
        if (contactList.value.length < 1) {
            msjEmpy.value = msj 
        } else {
            msjEmpy.value = ''
        }
    }      

    // Se podrá utilizar en otros componentes lo que devolvemos aquí    
    return {
        contactList,
        msjEmpy,
        showEmpy
    }    

}
