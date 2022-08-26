import {useEffect, useRef, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Contact from '../components/Contact';
import Spinner from 'react-bootstrap/Spinner';
import {TContact} from '../custom-types';
import {contactsApi, useGetContactsQuery} from '../services/querys';

const ContactsPage = () => {
  const [collect, setCollect] = useState<TContact[]>([]);
  const [tempCollect, setTempCollect] = useState<TContact[]>([]);
  const newName = useRef<HTMLInputElement>(null);
  const {data: contacts, isLoading} = contactsApi.useGetContactsQuery('');
  const [createContact, {}] = contactsApi.useCreateContactMutation();
  const [getContact, {}] = contactsApi.useGetContactsMutation();
  //

  const AddContact = () => {
    if (!newName.current) {
      return;
    }
    createContact({title: newName.current.value});
    newName.current.value = '';
  };

  const SearchContact = (e: React.ChangeEvent<HTMLInputElement>) => {
    getContact(e.target.value);
    // const findCollect = tempCollect.filter(elem => elem.title.includes(e.target.value));
    // setCollect(findCollect);
  };
  if (isLoading) {
    return <Spinner animation="grow" variant="primary" />;
  }
  return (
    <div
      style={{
        display: 'grid',
        gap: '16px',
      }}
    >
      <div>
        <Form.Label>Поиск</Form.Label>
        <Form.Control type="text" id="Search" onChange={SearchContact} />
      </div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th colSpan={2}>Действия</th>
          </tr>
        </thead>
        <tbody>
          {contacts?.map((item: TContact) => {
            return <Contact item={item} key={item.id} />;
          })}
        </tbody>
      </Table>
      <div
        style={{
          display: 'grid',
          gap: '8px',
        }}
      >
        <Form.Label>Новый контакт</Form.Label>
        <Form.Control type="text" ref={newName} />
        <Button variant="primary" onClick={AddContact}>
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default ContactsPage;

// useEffect(() => {
//   const fetchContacts = async () => {
//     // const result = await axios('http://localhost:3000/contacts');
//     dispatch(setContactsList(result.data));
//     // setCollect(result.data);
//     // setTempCollect(result.data);

// }, []);
