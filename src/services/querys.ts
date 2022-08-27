import { TContact } from './../custom-types';
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
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
    providesTags: result => ['Contacts']
    }),
    createContact: builder.mutation<TContact, TContact>({
       query: (contact: {title: string}) =>({
        url:`contacts`,
        method: 'POST',
        body: contact,
       }),
       invalidatesTags: ['Contacts']
    }),
    removeContact: builder.mutation<TContact, TContact>({
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

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContactsQuery } = contactsApi