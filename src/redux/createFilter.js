import { createSlice } from '@reduxjs/toolkit';

const initialStateFilter = {
    filter: '',
}
const filterSlice = createSlice({
    name: 'filter',
    initialState: initialStateFilter,
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
    },
},
)
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;