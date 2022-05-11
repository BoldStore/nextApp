import Card from "./Card";
import styles from "./styles.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PhoneComponent from "../PhoneComponent";

function AppWalkthrough() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 500 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className={styles.wrapper} id="projects">
      <h1 style={{ textAlign: "left" }}>
        App <span style={{ color: "#808080" }}>Walkthrough</span>
      </h1>
      <Carousel
        arrows={false}
        responsive={responsive}
        swipeable={true}
        draggable={true}
        infinite={false}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        partialVisible={true}
        minimumTouchDrag={0}
      >
        <PhoneComponent
          imgSrc={"/assets/startingScreen.png"}
          num={"01"}
          text={"Starting Screen"}
          left={true}
        />
        <PhoneComponent
          imgSrc={"/assets/startingScreen.png"}
          num={"01"}
          text={"Starting Screen"}
          left={true}
        />
        <PhoneComponent
          imgSrc={"/assets/startingScreen.png"}
          num={"01"}
          text={"Starting Screen"}
          left={true}
        />
        <PhoneComponent
          imgSrc={"/assets/startingScreen.png"}
          num={"01"}
          text={"Starting Screen"}
          left={true}
        />
        <PhoneComponent
          imgSrc={"/assets/startingScreen.png"}
          num={"01"}
          text={"Starting Screen"}
          left={true}
        />
        <PhoneComponent
          imgSrc={"/assets/startingScreen.png"}
          num={"01"}
          text={"Starting Screen"}
          left={true}
        />
        <PhoneComponent
          imgSrc={"/assets/startingScreen.png"}
          num={"01"}
          text={"Starting Screen"}
          left={true}
        />
      </Carousel>
    </div>
  );
}

export default AppWalkthrough;
