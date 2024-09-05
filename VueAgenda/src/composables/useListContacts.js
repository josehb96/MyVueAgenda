import { ref } from 'vue'

import { getAllContacts } from '../services/apiContacts'

export const contactList = ref(getAllContacts())