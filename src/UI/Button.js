import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <div>
      <button className={classes.btn}>{props.children}</button>
    </div>
  );
};

export default Button;
