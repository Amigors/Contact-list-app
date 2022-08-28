import {Navigate} from 'react-router-dom';
import {TProtectedRouteProps} from '../custom-types';

export default function ProtectedRoute({authenticationPath, outlet}: TProtectedRouteProps) {
  const auth = localStorage.getItem('Token');
  console.log(auth);
  if (auth) {
    return outlet;
  } else {
    return <Navigate to={{pathname: authenticationPath}} />;
  }
}
