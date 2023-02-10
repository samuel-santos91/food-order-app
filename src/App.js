import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Main from "./components/Main";
import MenuList from "./components/MenuList";
import Cart from "./components/Cart";
import QuantityProvider from "./store/QuantityProvider";

const App = () => {
  const [activeCart, setActiveCart] = useState(false);

  const openCart = () => {
    setActiveCart(true);
  };

  const closeCart = () => {
    setActiveCart(false);
  };

  const [addOrder, setAddOrder] = useState("");

  const orderHandler = (order) => {
    if (order.value === true) {
      const savedData = (previousData) => {
        return [...previousData, order.item];
      };
      setAddOrder(savedData);
    } else if (order.value === undefined) {
      const savedData = (previousData) => {
        return [...previousData, order];
      };
      setAddOrder(savedData);
    } else {
      const savedData = () => {
        const index = addOrder.indexOf(order.item);
        const orderList = addOrder;
        const newList = orderList.filter((data, idx) => idx !== index);
        return newList;
      };
      setAddOrder(savedData);
    }
  };

  //SORTING BY ALPHABETICAL ORDER
  if (addOrder.length > 1) {
    addOrder.sort((a, b) => {
      const nameA = a.title.toUpperCase();
      const nameB = b.title.toUpperCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <QuantityProvider>
      {activeCart === true && (
        <Cart
          addToCart={addOrder}
          onCart={closeCart}
          onCartAdd={orderHandler}
          onCartSub={orderHandler}
        />
      )}
      <NavigationBar quantity={addOrder.length} onNavBar={openCart} />
      <Main />
      <MenuList onMenuList={orderHandler} orderList={addOrder}/>
    </QuantityProvider>
  );
};

export default App;
