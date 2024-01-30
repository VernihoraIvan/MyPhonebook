import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://jazzy-smakager-bb31ad.netlify.app/';
// axios.defaults.baseURL = 'https://vernihoraivan.github.io/myPhonebook-backend/';
axios.defaults.baseURL = 'https://my-phonebook-backend.vercel.app/';
axios.defaults.headers = 'Access-Control-Allow-Origin';

// axios.defaults.baseURL = 'http://localhost:8000/';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const { data } = await axios.get('/contacts');
  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contacts, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contacts);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
