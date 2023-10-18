import "./style.css";
import { Cart2 } from "react-bootstrap-icons";

const CartWidget = () => {
  return (
    <div className="cart-container">
      <Cart2 color="green" size={32} />
      <div className="cart-number">
        <span>10</span>
      </div>
    </div>
  );
};

export default CartWidget;
