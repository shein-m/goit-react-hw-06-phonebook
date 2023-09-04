import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    removeContacts(state, action) {
      return state.filter(item => item.id !== action.payload);
    },

    addContacts(state, action) {
      state.push(action.payload);
    },
  },
});

export const { removeContacts, addContacts } = contactsSlice.actions;
