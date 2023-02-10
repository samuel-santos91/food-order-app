import classes from "./CartItem.module.scss";

const CartItem = (props) => {
  const itemSelected = props.item.filter(
    (element) => element.title === props.food
  );

  const addHandler = () => {
    const obj = { item: itemSelected[0], value: true };
    props.onCartItemAdd(obj);
  };

  const subHandler = () => {
    const obj = { item: itemSelected[0], value: false };
    props.onCartItemSub(obj);
  };

  return (
    <div>
      <div className={classes["selected-food"]}>
        <div>
          <p className={classes.food}>
            <strong>{props.food}</strong>
          </p>
          <div className={classes["price-and-quantity"]}>
            <p>
              <strong>${props.price}</strong>
            </p>
            <div>&#215;{itemSelected.length}</div>
          </div>
        </div>
        <div className={classes["add-food"]}>
          <div>
            <div onClick={subHandler} className={classes.sub}>
              &#8722;
            </div>
            <div onClick={addHandler} className={classes.sum}>
              &#43;
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
