import React from 'react';

export const Filter = ({ filter }) => {
  return (
    <div>
      <label htmlFor="contactsfilter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id="contactsfilter"
        //value={filter}
        //onChange={doFilter}
      />
    </div>
  );
};