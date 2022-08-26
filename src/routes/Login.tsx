import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {Navigate, Route, useNavigate} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {toast} from 'react-toastify';
import Contacts from './ContactsPage';

// примеры
// {email olivier@mail.com" , password: bestPassw0rd}
// {email typycode@bk.ru" , password: typycode}
// {email plmx_help@x5.ru" , password: sssssss}

type TLogin = {
  email: string;
  password: string;
};

const Login = () => {
  const {control, handleSubmit} = useForm<TLogin>();
  const navigate = useNavigate();
  const SubmitForm: SubmitHandler<TLogin> = async (data: TLogin) => {
    try {
      await axios.post('http://localhost:3000/login', data);
      toast.success('Все ок, заходи');
      navigate('/contacts');
    } catch (error) {
      toast.error('Неверные данные');
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(SubmitForm)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Логин</Form.Label>

        <Controller
          render={({field}) => <Form.Control type="email" placeholder="Введите email" {...field} />}
          name="email"
          control={control}
          defaultValue=""
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Controller
          render={({field}) => <Form.Control type="password" placeholder="Пароль" {...field} />}
          name="password"
          control={control}
          defaultValue=""
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Войти
      </Button>
    </Form>
  );
};

export default Login;
