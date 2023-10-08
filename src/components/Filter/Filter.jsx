import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/contacts/actions';

export const Filter = () => {
  const { filter } = useSelector(store => store.contacts);

  const dispatch = useDispatch();

  const handleFilter = value => {
    dispatch(filterChange(value));
  };

  return (
    <div>
      <label htmlFor="contactsfilter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id="contactsfilter"
        value={filter}
        onChange={value => handleFilter(value.target.value)}
      />
    </div>
  );
};
