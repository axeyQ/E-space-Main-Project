import Atropos from "atropos/react";
import "../App.css";
import IMG from "../assets/testImg.png";

const Home1 = () => {
  const homeContainer = {
    // maxWidth: "50vw",
    // minHeight: "70%",
    borderRadius: "25px",
    // border: "1px solid #f2f2f2",
    // backgroundImage: 'url("./assets/main-bg.jpg")',
    padding: "2em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    overflow: "visible",
    // backgroundImage:
    //   "linear-gradient(rgba(0, 0, 0, 0.0) 0%,rgba(0, 0, 0, 1.0) 100%)",
  };
  let container = document.querySelector(".body-container");

  return (
    <Atropos
      className='my-atropos'
      activeOffset={100}
      shadowScale={1.25}
      onEnter={() => {
        container.classList.add("add-border");
      }}
      onLeave={() => {
        container.classList.remove("add-border");
      }}
      onRotate={(x, y) => console.log("Rotate", x, y)}
    >
      <div className='home-container' style={homeContainer}>
        <h1 className='home-container__heading' data-atropos-offset='-10'>
          Hey Guys Welcome to
          <br />
        </h1>
        <span
          className='home-container__heading__logo'
          data-atropos-offset='10'
        >
          e-Space
        </span>
        <br />
        <img
          src={IMG}
          className='home-container__image'
          alt='ten'
          data-atropos-offset='5'
        />
        <button className='home-container__button' data-atropos-offset='-10'>
          Get Started
        </button>
      </div>
      ;
    </Atropos>
  );
};

export default Home1;
