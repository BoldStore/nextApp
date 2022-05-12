import styles from "./styles.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Phone2 from "./Phone2";
import { useEffect, useState } from "react";

function AppWalkthrough() {
  var cursor;
  var cursor2;
  var drag;

  const [mobile, setMobile] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1500 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1500, min: 600 },
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

  const steps = [
    {
      num: "01",
      imgSrc: "https://i.ibb.co/mbQPsLt/Group-19.png",
      text: "Get started by signing up as a store in one click",
    },
    {
      num: "02",
      imgSrc: "https://i.ibb.co/bL13RVC/Group-20.png",
      text: "Connect your instagram to convert all your posts into products!",
    },
    {
      num: "03",
      imgSrc: "https://i.ibb.co/7QDxS9w/Group-5.png",
      text: "We create your store on our app , which goes hand in hand with your instagram!",
    },
    {
      num: "04",
      imgSrc: "https://i.ibb.co/MMMW9dt/Group-10.png",
      text: "We strip out all important details like the price and size, from the caption of your post.",
    },
    {
      num: "05",
      imgSrc: "https://i.ibb.co/tLk0Yw7/Group-4.png",
      text: "We give you your store's analytics!",
    },
  ];

  if (process.browser) {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1000) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }

  useEffect(() => {
    if (process.browser) {
      if (window.innerWidth < 1000) {
        setMobile(true);
      }
    }
  }, []);

  return (
    <div
      className={styles.wrapper}
      id="app"
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
        infinite={true}
        autoPlay={mobile}
        keyBoardControl={true}
        partialVisible={true}
        minimumTouchDrag={0}
        autoPlaySpeed={3000}
      >
        {steps.map((step, i) => (
          <Phone2
            key={i}
            imgSrc={step.imgSrc}
            num={step.num}
            text={step.text}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default AppWalkthrough;
