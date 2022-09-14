import {Button, Container, Navbar} from 'react-bootstrap';
import SvgIcon, {SvgIconProps} from '@mui/material/SvgIcon';
import {Outlet, useNavigate} from 'react-router';

import {ACCESS_KEY, USERNAME_KEY} from '../slices/users/constants';

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
const Navigation = () => {
  const username = localStorage.getItem(USERNAME_KEY);
  const isAuthenticated = Boolean(localStorage.getItem(ACCESS_KEY));
  const navigate = useNavigate();

  const LogOut = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <HomeIcon color="primary" />
          </Navbar.Brand>
          <Navbar.Toggle />
          {isAuthenticated ? (
            <>
              <Navbar.Collapse className="justify-content-center">
                <Navbar.Text>
                  <span>Signed in as: {username}</span>
                </Navbar.Text>
              </Navbar.Collapse>
              <Button variant="danger" onClick={LogOut}>
                <span>Выход</span>
              </Button>
            </>
          ) : (
            <Navbar.Collapse className="justify-content-center">
              <Navbar.Text></Navbar.Text>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default Navigation;
