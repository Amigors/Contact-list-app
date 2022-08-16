import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

//TODO: добавлять/удалять/редактировать/поиск

//
const Contacts = () => {
  const collect = [
    {firstName: 'OTTO', id: 0},
    {firstName: 'Jacob', id: 1},
  ];
  const res = fetch('/posts').then(response => response.json());
  console.log(res);
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
            <td>{item.id}</td>
            <td>{item.firstName}</td>
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
