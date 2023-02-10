import { useState } from "react";
import QuantityContext from "./quantity-context";

const QuantityProvider = (props) => {
  const [value, setValue] = useState("");

  const updateQuantityHandler = (itemQuantity) => {
    setValue(itemQuantity);
  };

  const quantityContext = {
    quantity: updateQuantityHandler,
    quantityPassed: value,
  };

  return (
    <QuantityContext.Provider value={quantityContext}>
      {props.children}
    </QuantityContext.Provider>
  );
};

export default QuantityProvider;
