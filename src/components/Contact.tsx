import {useRef, useState} from 'react';
import axios from 'axios';
import {Button, Form} from 'react-bootstrap';
import {toast} from 'react-toastify';
import {TContact} from '../custom-types';

type TPageContact = {
  item: TContact;
  setCollect: React.Dispatch<React.SetStateAction<TContact[]>>;
  collect: TContact[];
};

const Contact = ({item, setCollect, collect}: TPageContact) => {
  const [edit, setEdit] = useState(false);
  const editName = useRef<HTMLInputElement>(null);

  const editContact = async () => {
    if (!editName.current) {
      return;
    }
    await axios.put('http://localhost:3000/contacts/' + item.id, {title: editName.current.value});
    toast.success('Отредактировано');

    const objIndex = collect.findIndex(obj => obj.id === item.id);
    if (objIndex === -1) {
      return;
    }
    const updatedObj = {...collect[objIndex], title: editName.current.value};
    const updatedCollect = [...collect.slice(0, objIndex), updatedObj, ...collect.slice(objIndex + 1)];
    setCollect(updatedCollect);

    setEdit(false);
  };

  const deleteContact = async () => {
    await axios.delete('http://localhost:3000/contacts/' + item.id);
    const newCollect = collect.filter((elem: {id: number}) => elem.id !== item.id);
    setCollect(newCollect);
  };

  return (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>
        {!edit ? (
          item.title
        ) : (
          <>
            <Form.Control type="text" ref={editName} defaultValue={item.title} />
            <Button variant="success" onClick={editContact}>
              Принять
            </Button>
          </>
        )}
      </td>
      <td>
        <Button
          variant="info"
          onClick={() => {
            setEdit(prevState => !prevState);
          }}
        >
          Редактировать
        </Button>
      </td>
      <td>
        <Button variant="danger" onClick={deleteContact}>
          Удалить
        </Button>
      </td>
    </tr>
  );
};

export default Contact;
