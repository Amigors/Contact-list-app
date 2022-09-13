import {Link} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Link to="/registration">Registration</Link> | <Link to="/login"> Login</Link>
    </div>
  );
};

export default App;
