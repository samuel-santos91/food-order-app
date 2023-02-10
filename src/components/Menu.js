import { useState } from "react";
import classes from "./Menu.module.scss";
import Button from "../UI/Button";

const Menu = (props) => {
  const order = {
    title: props.title,
    price: props.price,
  };
  const [receivedOrder, setReceivedOrder] = useState(order);

  const orderingHandler = (event) => {
    event.preventDefault();
    setReceivedOrder(order);
    props.onMenu(receivedOrder);
  };

  return (
    <form onSubmit={orderingHandler}>
      <div className={classes.card}>
        <div className={classes["card-image-container"]}>
          <img
            className={classes["card-image"]}
            src={props.image}
            alt={props.title}
          ></img>
        </div>
        <header>{props.title}</header>
        <p className={classes.accompaniment}>{props.accompaniment}</p>
        <div className={classes.price}>
          <p>
            <strong>${props.price}</strong>
          </p>
          <Button>
            <strong>ORDER&nbsp;</strong>
            {(props.quantity !== undefined && props.quantity !== 0) &&<p>
              <strong>{props.quantity}</strong>
            </p>}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Menu;
