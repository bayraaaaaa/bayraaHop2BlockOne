
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { useContext } from "react";

// import { darkModeContext } from "../App";
const Header = () => {
  // const { setIsDarkMode } = useContext(darkModeContext);
  return (

    <div className="header">
      {/* <Form>
        <Form.Check
          onChange={(e) => setIsDarkMode(e.target.checked)}
          type="switch"
          id="custom-switch"
          label="darkmode"
        />
      </Form> */}
      <div div className="Logo" >
        <Link className="logo" to={"./"}></Link>
      </div>
      <div className="Bar">
        <Link className="App" to={"./Product"}>
          Product
        </Link>
        <Link className="App" to={"./Services"}>
          Services
        </Link>
        <Link className="App" to={"./Contacts"}>
          Contacts
        </Link>
        <Link className="App" to={"./Login"}>
          Login
        </Link>
        <button className="buttonOne">Get Access</button>
      </div>



    </div >
  );
};

export default Header;
