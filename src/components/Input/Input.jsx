import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/actions';

const Input = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const dispatch = useDispatch()

const createContact = (data) =>{
    dispatch(addContact(data))
}


    const formSubmit = e => {
        e.preventDefault();
        createContact({ name, number });
        setName('');
        setNumber('');
    }


    const inputName = ({ target: { value } }) => {
      setName(value);
    };
    const inputNumber = ({ target: { value } }) => {
      setNumber(value);
    };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <div>
          <h3>Name</h3>
          <input
            type="text"
            onChange={inputName}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            required
          />
          <h3>Number</h3>
          <input
            type="tel"
            onChange={inputNumber}
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            required
          />
        </div>
        <button type="submit">
          Add contact
        </button>
      </form>
    </div>
  )
}

export default Input