import {useRef, useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import {toast} from 'react-toastify';
import {TContact} from '../custom-types';
import {contactsApi} from '../app/querys';

type TPageContact = {
  item: TContact;
};

const Contact = ({item}: TPageContact) => {
  const [edit, setEdit] = useState(false);
  const editName = useRef<HTMLInputElement>(null);
  const editTel = useRef<HTMLInputElement>(null);
  const editAddress = useRef<HTMLInputElement>(null);
  const [removeContact] = contactsApi.useRemoveContactMutation();
  const [updateContact] = contactsApi.useUpdateContactMutation();

  const editContact = () => {
    if (!editName.current || !editTel.current || !editAddress.current) {
      return;
    }
    updateContact({
      id: item.id,
      title: editName.current.value,
      tel: Number(editTel.current.value),
      address: editAddress.current.value,
    });
    toast.success('Отредактировано');
    setEdit(false);
  };

  const deleteContact = () => {
    removeContact(item.id);
  };
  const plus = !item.tel ? '' : '+';

  return (
    <tr key={item.id}>
      <td>
        {!edit ? (
          item.title
        ) : (
          <>
            <Form.Control type="text" ref={editName} defaultValue={item.title} />
          </>
        )}
      </td>
      <td>
        {!edit ? (
          <span>
            {plus}
            {item.tel}
          </span>
        ) : (
          <>
            <Form.Control type="tel" ref={editTel} defaultValue={item.tel} />
          </>
        )}
      </td>
      <td>
        {!edit ? (
          item.address
        ) : (
          <>
            <Form.Control type="text" ref={editAddress} defaultValue={item.address} />
          </>
        )}
      </td>
      <td>
        {!edit ? (
          <Button
            variant="info"
            onClick={() => {
              setEdit(prevState => !prevState);
            }}
          >
            Редактировать
          </Button>
        ) : (
          <>
            <Button size="sm" variant="success" onClick={editContact}>
              Принять
            </Button>
            <Button
              size="sm"
              variant="warning"
              onClick={() => {
                setEdit(prevState => !prevState);
              }}
            >
              Отменить
            </Button>
          </>
        )}
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
