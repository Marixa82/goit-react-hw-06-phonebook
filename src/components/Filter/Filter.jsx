import { Input, Label } from './Filter.styled';
import { setFilter } from 'redux/createFilter';
import {useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';


 const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
 
        return (
            <>
                <Label>find contact by name
                <Input type="text" 
                name='filter'
                value={filter}
                onChange={(e) => dispatch(setFilter(e.target.value))}
                placeholder="Enter name for Search"
                    /></Label>
            </>
        )
    }
export default Filter;