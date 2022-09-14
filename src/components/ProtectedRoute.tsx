import {Navigate} from 'react-router-dom';

type TProtectedRouteProps = {
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function ProtectedRoute({authenticationPath, outlet}: TProtectedRouteProps) {
  const auth = localStorage.getItem('dc-access');
  if (auth) {
    return outlet;
  } else {
    return <Navigate to={{pathname: authenticationPath}} />;
  }
}
