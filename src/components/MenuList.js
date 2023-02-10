import classes from "./MenuList.module.scss";
import salmon from "../Images/food/salmon.jpg";
import burger from "../Images/food/burger.jpg";
import beef from "../Images/food/beef.jpg";
import toast from "../Images/food/toast.jpg";
import Menu from "./Menu";

const MenuList = (props) => {
  const orderHandler = (order) => {
    props.onMenuList(order);
  };

  //QUANTITY ITEMS OF EACH DISH
  const salmonFunc = () => {
    return props.orderList.filter(
      (element) => element.title === "Gourmet Salmon"
    ).length;
  };

  const roastFunc = () => {
    return props.orderList.filter((element) => element.title === "Roast Beef")
      .length;
  };

  const burgerFunc = () => {
    return props.orderList.filter((element) => element.title === "Beef Burger")
      .length;
  };

  const toastFunc = () => {
    return props.orderList.filter(
      (element) => element.title === "French Egg Toast"
    ).length;
  };

  const menu = [
    {
      id: "salmon",
      image: salmon,
      title: "Gourmet Salmon",
      accompaniment: "with baked potatoes",
      price: "27.80",
    },
    {
      id: "beef and veggies",
      image: beef,
      title: "Roast Beef",
      accompaniment: "with veggies",
      price: "35.50",
    },
    {
      id: "burger and chips",
      image: burger,
      title: "Beef Burger",
      accompaniment: "with chips",
      price: "22.60",
    },
    {
      id: "egg and toast",
      image: toast,
      title: "French Egg Toast",
      accompaniment: "with veggies and avocado",
      price: "18.90",
    },
  ];

  //ADD PROPERTY 'QUANTITY'
  if (props.orderList.length > 0) {
    menu[0].quantity = salmonFunc();
    menu[1].quantity = roastFunc();
    menu[2].quantity = burgerFunc();
    menu[3].quantity = toastFunc();
  }

  return (
    <div className={classes["menu-grid"]}>
      {menu.map((element) => (
        <Menu
          key={element.id}
          image={element.image}
          title={element.title}
          accompaniment={element.accompaniment}
          price={element.price}
          quantity={element.quantity}
          onMenu={orderHandler}
        />
      ))}
    </div>
  );
};

export default MenuList;
