import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {useEffect, useState} from 'react';

//TODO: добавлять/удалять/редактировать/поиск
//
const Contacts = () => {
  const [collect, setCollect] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const res = (await fetch('http://localhost:3000/posts').then(data => console.log(data))) as any;
      console.log(res);
      setCollect(res);
      return res;
    };
  }, []);

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th colSpan={3}>Действия</th>
        </tr>
      </thead>
      <tbody>
        {collect.map(item => (
          <tr>
            <td>{item?.id}</td>
            <td>{item?.firstName}</td>
            <td>
              <Button variant="primary">Добавить</Button>
            </td>
            <td>
              <Button variant="info">Редактировать</Button>
            </td>
            <td>
              <Button variant="danger">Удалить</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Contacts;
