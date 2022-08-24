import {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Contact from '../components/Contact';
import {TContact} from '../custom-types';

const Contacts = () => {
  const [collect, setCollect] = useState<TContact[]>([]);
  const [tempCollect, setTempCollect] = useState<TContact[]>([]);
  const newName = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      const result = await axios('http://localhost:3000/contacts');

      setCollect(result.data);
      setTempCollect(result.data);
    };

    fetchContacts();
  }, []);

  const AddContact = async () => {
    if (!newName.current) {
      return;
    }
    const res = await axios.post('http://localhost:3000/contacts', {title: newName.current.value});
    const newContact = res.data;
    setCollect(prevCollect => [...prevCollect, newContact]);

    newName.current.value = '';
  };

  const SearchContact = (e: React.ChangeEvent<HTMLInputElement>) => {
    const findCollect = tempCollect.filter(elem => elem.title.includes(e.target.value));
    setCollect(findCollect);
  };

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
          {collect?.map((item: TContact) => {
            return <Contact collect={collect} setCollect={setCollect} item={item} key={item.id} />;
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

export default Contacts;
