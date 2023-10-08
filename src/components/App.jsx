import ContactsList from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import Input from "./Input/Input";

import {  useDispatch, useSelector } from 'react-redux'
import { deleteContact } from 'redux/contacts/actions'



export const App = () => {
  const { contacts } = useSelector((store) => store.contacts)

  const dispatch = useDispatch();

  const deleteItem = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <Input />
      <p></p>
      <Filter />
      <p></p>
      <ContactsList contacts={contacts} deleteItem={ deleteItem }/>
    </div>
  );
};
