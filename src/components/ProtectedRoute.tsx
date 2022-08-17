import {Navigate, Outlet} from 'react-router-dom';

type TProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};
export default function ProtectedRoute({isAuthenticated, authenticationPath, outlet}: TProtectedRouteProps) {
  if (isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{pathname: authenticationPath}} />;
  }
}
