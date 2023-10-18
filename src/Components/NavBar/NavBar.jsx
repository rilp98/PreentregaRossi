import "./style.css";
import CartWidget from "../CartWidget/CartWidget";
import Button from "react-bootstrap/Button";
import logo from "../../assets/images/Logo.jpg";

const NavBar = () => {
  return (
    <nav>
      <div className="image-container">
        <img src={logo} alt="Logo" />
      </div>
      <div className="options-container">
        <ul>
          <li>
            <Button variant="success" size="lg">
              Body lotion
            </Button>
          </li>
          <li>
            <Button variant="success" size="lg">
              Serum
            </Button>
          </li>
          <li>
            <Button variant="success" size="lg">
              Sunscreens
            </Button>
          </li>
          <li>
            <Button variant="success" size="lg">
              Exfoliant
            </Button>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
