import {  useEffect } from 'react';
import { Div } from './App.styled';
import ContactForm from 'components/ContactForm';
import {ContactList} from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';


import { useSelector, useDispatch} from 'react-redux'
import {  addContact, delContact, setFilter} from 'redux/createSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts)
  const filter = useSelector((state) => state.contacts.filter);
  

   const handleAddContact = (newContacts) => {
        dispatch(addContact(newContacts));
    };

  useEffect(() => {
  window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  const handelCheckUniqueContact = (name) => {
    const isNameContact = !!contacts.find((contact) => contact.name === name)
    isNameContact && alert(`${name} is already in contacts`)
    return !isNameContact
  }
  

  const handleDelContact = (id) => {
    dispatch(delContact(id));
  };
    
  const getVisibleContacts = () => {
   const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return filteredContacts;
  
}; 
  const handleFilterChange = (value) => {
  dispatch(setFilter(value));
};
 
  return (
    <Div>
   <h1>Phonebook</h1>
     <ContactForm onAdd={handleAddContact} onCheckUnique={handelCheckUniqueContact} />
  <h2>Contacts</h2>
     <Filter filter={filter} onChange={handleFilterChange} />
     <ContactList contacts={getVisibleContacts()} delContact={handleDelContact} />
         </Div>
  )
  }


