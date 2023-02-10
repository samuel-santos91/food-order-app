import classes from "./Main.module.scss";
import image from "../Images/chicken-wings.jpg";

const Main = () => {
  const scrollToMenu = () => {
    const elem = document.getElementById("scroll-to-menu");
    elem.scrollIntoView();
  };

  return (
    <main className={classes.main}>
      <img className={classes.img} src={image} alt="chicken-wings"></img>
      <div className={classes.center}>
        <div className={classes.text}>
          Get ready to taste <br />
          the best dishes!
        </div>
        <button onClick={scrollToMenu} className={classes.btn} type="button">
          <strong>DISCOVER MENU</strong>
        </button>
        <div className={classes.scroll} id="scroll-to-menu"/>
      </div>
    </main>
  );
};

export default Main;
