import React from 'react';

const ContactsList = ({ contacts, deleteItem }) => {
  console.log('contacts', contacts);



  return (
    <div>
      <ul>
        {contacts &&
          contacts.map(contact => (
            <li key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button onClick={() => deleteItem(contact.id)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ContactsList;
