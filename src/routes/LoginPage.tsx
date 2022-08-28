import axios from 'axios';
import {useNavigate} from 'react-router';
import {Form, Button} from 'react-bootstrap';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {toast} from 'react-toastify';

type TLogin = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {control, handleSubmit} = useForm<TLogin>();
  const navigate = useNavigate();
  const SubmitForm: SubmitHandler<TLogin> = async (data: TLogin) => {
    try {
      const result = await axios.post('http://localhost:3000/login', data);
      localStorage.setItem('Token', result.data.accessToken);
      toast.success('Все ок, заходи');
      navigate('/contacts');
    } catch (error) {
      toast.error('Неверные данные');
    }
  };

  return (
    <>
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
    </>
  );
};

export default LoginPage;