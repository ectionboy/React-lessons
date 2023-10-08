import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/actions';

const ContactsList = () => {
  const [filtered, setFiltered] = useState([]);
  const { contacts, filter } = useSelector(store => store.contacts);

  const dispatch = useDispatch();

  const deleteItem = id => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    setFiltered(
      contacts.filter(el =>
        el.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [contacts, filter]);

  return (
    <div>
      <ul>
        {filtered &&
          filtered.map(contact => (
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
