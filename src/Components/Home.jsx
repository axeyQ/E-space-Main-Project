import Atropos from "atropos";
import "../App.css";
import IMG from "../assets/dark-angel.png";

const Home = () => {
  let container = document.querySelector(".body-container");
  // Initialize
  const myAtropos = Atropos({
    el: ".my-atropos",
    activeOffset: 40,
    shadowScale: 1.05,
    onEnter() {
      container.classList.add("add-border");
    },
    onLeave() {
      container.classList.remove("add-border");
    },
    onRotate(x, y) {
      console.log("Rotate", x, y);
    },
  });
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
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.0) 0%,rgba(0, 0, 0, 1.0) 100%)",
  };
  return (
    <div className='atropos my-atropos'>
      {/* <!-- scale container (required) --> */}
      <div className='atropos-scale'>
        {/* <!-- rotate container (required) --> */}
        <div className='atropos-rotate'>
          {/* <!-- inner container (required) --> */}
          <div className='atropos-inner'>
            {/* <!-- put your custom content here --> */}
            <div className='home-container' style={homeContainer}>
              <h1 className='home-container__heading'>
                Hey Guys Welcome to
                <br />
              </h1>
              <span className='home-container__heading__logo'>e-Space</span>
              <br />
              <img src={IMG} className='home-container__image' alt='ten' />
              <button className='home-container__button'>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
