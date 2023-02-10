import classes from "./Cart.module.scss";
import CartItem from "./CartItem";

const Cart = (props) => {
  const closeTabHandler = (event) => {
    event.preventDefault();
    props.onCart();
  };

  const addQuantityHandler = (order) => {
    props.onCartAdd(order);
  };

  const subQuantityHandler = (order) => {
    props.onCartSub(order);
  };

  const arrayOfPrices = props.addToCart.map((elem) => +elem.price);
  const totalSum = arrayOfPrices.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

  const removeDuplicates = (arr, key) => {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  };

  const newList = removeDuplicates(props.addToCart, "title");

  return (
    <div>
      <form onSubmit={closeTabHandler}>
        <div onClick={closeTabHandler} className={classes.backdrop} />
        <div className={classes["cart-display"]}>
          {newList.map((element) => (
            <CartItem
              key={Math.random()}
              food={element.title}
              price={element.price}
              item={props.addToCart}
              onCartItemAdd={addQuantityHandler}
              onCartItemSub={subQuantityHandler}
            />
          ))}

          <div className={classes.total}>
            <p className={classes["total-amount"]}>
              <strong>Total Amount</strong>
            </p>
            <p className={classes["total-sum"]}>
              <strong>${totalSum.toFixed(2)}</strong>
            </p>
          </div>
          <div className={classes.buttons}>
            <button
              onClick={closeTabHandler}
              type="button"
              className={classes.close}
            >
              Close
            </button>
            <button type="button" className={classes.order}>
              Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Cart;
