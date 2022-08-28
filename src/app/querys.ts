import { TContact } from '../custom-types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  tagTypes: ['Contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query<TContact[], string>({
      query: (search: string) => ({
        url: 'contacts',
        params: {
          q: search,
        }
    }),   
    providesTags: () => ['Contacts']
    }),
    createContact: builder.mutation<TContact, {title: string}>({
       query: (contact: {title: string}) =>({
        url:`contacts`,
        method: 'POST',
        body: contact,
       }),
       invalidatesTags: ['Contacts']
    }),
    removeContact: builder.mutation<TContact, number>({
       query: (id) =>({
        url:`contacts/${id}`,
        method: 'DELETE',
       }),
       invalidatesTags: ['Contacts'] 
    }),
    updateContact: builder.mutation<TContact, TContact>({
        query: (contact) => ({
            url: `contacts/${contact.id}`,
            method: 'PUT',
            body: contact
        }),
        invalidatesTags: ['Contacts']
    }),
})
})

export const { useGetContactsQuery } = contactsApi