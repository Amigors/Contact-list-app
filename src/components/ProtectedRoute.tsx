import {useSelector} from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';
import {selectToken, selectUser} from '../features/users/userSlice';

type TProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};
export default function ProtectedRoute({authenticationPath, outlet}: TProtectedRouteProps) {
  const auth = localStorage.getItem('Token');
  console.log(auth);
  if (auth) {
    return outlet;
  } else {
    return <Navigate to={{pathname: authenticationPath}} />;
  }
}
