import axios from 'axios';
import {useNavigate} from 'react-router';
import {Form, Button} from 'react-bootstrap';
import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {register} from '../slices/users/userSlice';

type TRegistration = {
  email: string;
  username: string;
  password: string;
};

const RegisterPage = () => {
  const {control, handleSubmit} = useForm<TRegistration>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const SubmitForm: SubmitHandler<TRegistration> = async (data: TRegistration) => {
    try {
      const response = await axios.post(`http://localhost:3000/users`, data);
      console.log('username', data.username);
      toast.success('Регистрация успешна');
      navigate('/login');
      dispatch(
        register({
          accessToken: response.data.access,
          user: {
            username: data.username,
            email: data.email,
            id: response.data.id,
          },
          isAuthenticated: Boolean(response.data.access),
        })
      );
    } catch (e) {
      toast.error('Ошибка регистрации');
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit(SubmitForm)}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Имя пользователя</Form.Label>

          <Controller
            render={({field}) => <Form.Control type="text" placeholder="Введите имя пользователя" {...field} />}
            name="username"
            control={control}
            defaultValue=""
          />
        </Form.Group>
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
          Зарегистрироваться
        </Button>
      </Form>
      <Link to="/login">У меня уже есть аккаунт</Link>
    </>
  );
};

export default RegisterPage;
