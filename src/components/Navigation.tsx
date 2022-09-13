import {Button, Container, Navbar} from 'react-bootstrap';

import SvgIcon, {SvgIconProps} from '@mui/material/SvgIcon';
function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
const Navigation = () => {
  const username = localStorage.getItem('dc-username');
  const isAuthenticated = Boolean(localStorage.getItem('Token'));
  console.log('user', username);
  console.log('isauth', isAuthenticated);

  const LogOut = () => {
    localStorage.clear();
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
    </div>
  );
};

export default Navigation;
