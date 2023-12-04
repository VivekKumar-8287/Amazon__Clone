import React from "react";
import "./subtotal.css";
import { useStateValue } from "../../components/StateProvider";
import { getBasketTotal } from "../../reducer";

function Subtotal() {
  const [{ basket }, setState] = useStateValue();

  const total = getBasketTotal(basket);

  return (
    <div className="subtotal">
      <div>
        <p>
          subtotal ({basket?.length} items) :{" "}
          <strong>
           
            {/* Format total as currency */}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD", // Change currency code as needed
            }).format(total)}
          </strong>
        </p>
      </div>
      <small className="subtotal_gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
