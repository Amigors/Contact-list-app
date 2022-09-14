import {useRef, useState} from 'react';
import {Spinner, Form, Button, Table} from 'react-bootstrap';
import Contact from '../components/Contact';
import {TContact} from '../custom-types';
import {contactsApi} from '../app/querys';

const ContactsPage = () => {
  const newName = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState('');

  const {data: contacts, isLoading} = contactsApi.useGetContactsQuery(search);
  const [createContact] = contactsApi.useCreateContactMutation();

  const AddContact = () => {
    if (!newName.current) {
      return;
    }
    createContact({title: newName.current.value});
    newName.current.value = '';
  };

  const SearchContact = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  if (isLoading) {
    return <Spinner animation="grow" variant="primary" />;
  }
  if (!contacts) {
    return null;
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
      {contacts?.length > 0 ? (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Телефон</th>
              <th>Адрес</th>
              <th colSpan={2}>Действия</th>
            </tr>
          </thead>
          <tbody>
            {contacts?.map((item: TContact) => {
              return <Contact item={item} key={item.id} />;
            })}
          </tbody>
        </Table>
      ) : (
        <span>Нет данных</span>
      )}
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
