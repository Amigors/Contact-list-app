import axios from 'axios';
import {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import {TContact} from '../custom-types';

type TPageContact = {
  item: TContact;
  setCollect: React.Dispatch<React.SetStateAction<TContact[]>>;
  collect: TContact[];
};
const Contact = ({item, setCollect, collect}: TPageContact) => {
  const [edit, setEdit] = useState(false);
  return (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>
        {!edit ? (
          item.title
        ) : (
          <>
            <Form.Control type="text" id="editName" defaultValue={item.title} />
            <Button
              variant="success"
              onClick={() => {
                axios.put('http://localhost:3000/contacts/' + item.id, {title: editName.value});
                setEdit(false);
              }}
            >
              Принять
            </Button>
          </>
        )}
      </td>
      <td>
        <Button
          variant="info"
          onClick={() => {
            setEdit(true);
          }}
        >
          Редактировать
        </Button>
      </td>
      <td>
        <Button
          variant="danger"
          onClick={() => {
            axios.delete('http://localhost:3000/contacts/' + item.id);
            const newCollect = collect.filter((elem: {id: number}) => elem.id !== item.id);
            setCollect(newCollect);
          }}
        >
          Удалить
        </Button>
      </td>
    </tr>
  );
};

export default Contact;
