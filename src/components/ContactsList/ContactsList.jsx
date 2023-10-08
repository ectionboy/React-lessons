import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from 'redux/contacts/actions'

const ContactsList = () => {

    const { contacts } = useSelector((store) => store.contacts)

const dispatch = useDispatch()

    const deleteItem = (id) =>{
        dispatch(deleteContact(id))

    }
    const ct = (id) =>{
        deleteContact(id)

    }

    return (
    <div>
        <ul>
      {contacts && contacts.map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button
            onClick={() => deleteItem(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default ContactsList