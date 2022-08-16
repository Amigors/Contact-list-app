import './App.css'
import { Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to='/login'>Login</Link> |{" "}
        <Link to="/contacts">Contacs</Link>
      </nav>
    </div>
  )
}

export default App
