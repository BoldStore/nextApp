import Card from "./Card";
import styles from "./styles.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Phone2 from "./Phone2";

function AppWalkthrough() {
  var cursor;
  var cursor2;
  var drag;

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

  const changeMouse = () => {
    cursor = document.getElementById("cursor");
    cursor2 = document.getElementById("cursor2");
    drag = document.getElementById("drag");
    document.body.addEventListener("mousemove", function (e) {
      (cursor.style.opacity = 0),
        (cursor2.style.opacity = 0),
        (drag.style.display = "flex"),
        (drag.style.left = e.clientX + "px"),
        (drag.style.top = e.clientY + "px");
    });

    document.addEventListener("mousedown", function (e) {
      (drag.style.height = "100px"), (drag.style.width = "100px");
    });
    document.addEventListener("mouseup", function (e) {
      (drag.style.height = "75px"), (drag.style.width = "75px");
    });
  };

  return (
    <div
      className={styles.wrapper}
      id="projects"
      onMouseEnter={() => {
        changeMouse();
      }}
    >
      <div className="drag" id="drag">
        Drag
      </div>
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
        <Phone2
          imgSrc={"/assets/startingScreen.png"}
          num={"01"}
          text={"Starting Screen"}
          left={true}
          animationOff={true}
        />
      </Carousel>
    </div>
  );
}

export default AppWalkthrough;
