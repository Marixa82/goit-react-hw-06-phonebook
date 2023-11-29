import { Ul } from './ContactList.styled';
import {ContactListItem} from "./ContactListItem";
import {  useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';


 const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
 
  const getVisibleContacts = () => {
   const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return filteredContacts;
  
};
  
    if(getVisibleContacts === 0) return null
    return (
        <Ul>
            {getVisibleContacts().map(contact => {
                const { id } = contact
                return (
                    < ContactListItem
                        key={id}
                    {...contact}
                />)    
            })}
         </Ul>)
    }
    
export default ContactList;

