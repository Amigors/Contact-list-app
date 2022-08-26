import {useRef, useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import {toast} from 'react-toastify';
import {TContact} from '../custom-types';
import {contactsApi} from '../services/querys';

type TPageContact = {
  item: TContact;
};

const Contact = ({item}: TPageContact) => {
  const [edit, setEdit] = useState(false);
  const editName = useRef<HTMLInputElement>(null);
  const [removeContact, {}] = contactsApi.useRemoveContactMutation();
  const [updateContact, {}] = contactsApi.useUpdateContactMutation();

  const editContact = async () => {
    if (!editName.current) {
      return;
    }
    updateContact({id: item.id, title: editName.current.value});
    toast.success('Отредактировано');
    setEdit(false);
  };

  const deleteContact = async () => {
    removeContact(item.id);
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
