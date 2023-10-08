import React from 'react'
import { useSelector } from 'react-redux'

const ContactsList = () => {
    const { contacts } = useSelector((store) => store)
console.log('contacts', contacts)
  return (
    <div>ContactsList</div>
  )
}

export default ContactsList