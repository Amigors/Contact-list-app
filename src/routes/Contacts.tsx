import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Contact from '../components/Contact';
import {TContact} from '../custom-types';

//TODO: поиск

const Contacts = () => {
  const [collect, setCollect] = useState<TContact[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const result = await axios('http://localhost:3000/contacts');
      console.log(result.data);
      setCollect(result.data);
      return result;
    };
    fetchContacts();
  }, []);

  return (
    <>
      <div>
        <Form.Label>Поиск</Form.Label>
        <Form.Control
          type="text"
          id="Search"
          onChange={() => {
            const findCollect = collect.filter(elem => elem.title.includes(Search.value));
            setCollect(findCollect);
          }}
        />
      </div>
      <br />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th colSpan={2}>Действия</th>
          </tr>
        </thead>
        <tbody>
          {collect?.map((item: TContact) => {
            return <Contact collect={collect} setCollect={setCollect} item={item} key={item.id} />;
          })}
        </tbody>
      </Table>
      <div>
        <Form.Label>Новый контакт</Form.Label>
        <Form.Control type="text" id="newName" />
        <br />
        <Button
          variant="primary"
          onClick={async () => {
            const res = await axios.post('http://localhost:3000/contacts', {title: newName.value});
            const newContact = res.data;
            setCollect(prevCollect => [...prevCollect, newContact]);
            newName.value = '';
          }}
        >
          Добавить
        </Button>
      </div>
    </>
  );
};

export default Contacts;
