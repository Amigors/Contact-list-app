import {Navigate} from 'react-router-dom';
import {ACCESS_KEY} from '../slices/users/constants';

type TProtectedRouteProps = {
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function ProtectedRoute({authenticationPath, outlet}: TProtectedRouteProps) {
  const auth = localStorage.getItem(ACCESS_KEY);
  if (auth) {
    return outlet;
  } else {
    return <Navigate to={{pathname: authenticationPath}} />;
  }
}
