import classes from "./NavigationBar.module.scss";
import image from "../Images/shopping-cart.png";
import icon from "../Images/restaurant-icon.png";

const NavigationBar = (props) => {
  const openCartTabHandler = () => {
    if (props.quantity === 0) {
      return;
    } else {
      props.onNavBar();
    }
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes["restaurant-logo"]}>
        <a href="#top">
          <img className={classes.icon} src={icon} alt="restaurant icon" />
        </a>
        <a href="#top">
          <h1>Delicious Meals</h1>
        </a>
      </div>
      <div>
        <button
          onClick={openCartTabHandler}
          type="button"
          className={classes.btn}
        >
          <img
            className={classes["cart-icon"]}
            src={image}
            alt="shopping-cart"
          />
          <p>
            <strong>Your Cart</strong>
          </p>
          <div className={classes["selected-items"]}>
            <strong>{props.quantity}</strong>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
