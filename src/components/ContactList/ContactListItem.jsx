import { useDispatch } from 'react-redux';
import { Li, Span,Button } from './ContactListItem.styled';
import { delContact } from 'redux/createSlice';

export const ContactListItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    

        return (
        <Li>
           <Span>{name}</Span> : <Span>{number}</Span>
            <Button type="button" onClick={()=> dispatch(delContact(id))}>Delete</Button>
        </Li>
    )
}
