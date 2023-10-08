import React from 'react'
import { useSelector } from 'react-redux'

const ContactsList = () => {

    const { contacts } = useSelector((store) => store.contacts)
console.log('contacts', contacts)

  return (
    <div>
        <ul>
      {contacts && contacts.map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button
            // onClick={() => deleteContact(contact.id)}
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