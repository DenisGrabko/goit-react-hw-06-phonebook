import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = { contacts: [] };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      // Об'єкт з 2 властивостями (reducer, prepare)
      reducer(state, { payload }) {
        state.contacts = [...state.contacts, payload];
      },
      prepare(newContact) {
        return { payload: { id: nanoid(), ...newContact } };
      },
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;