// Types
import imagesCardsTypes from "./ImagesCards.types.ts";

// Ant Design
import { Card } from "antd";
const { Meta } = Card;

// React Router
import { Link } from "react-router-dom";

// Imgs
import errImg from "../../../assets/imgs/icons/error.png";

const ImagesCards = (props: imagesCardsTypes) => {
  return (
    <Card
      style={{ width: 320, background: "rgba(242,208,164,0.1)" }}
      cover={
        <Link to={props.link} className={"w-[350px] h-[300px] object-cover"}>
          <img
            alt="Image"
            src={props.img}
            loading={"lazy"}
            onError={function (el) {
              //   @ts-ignore
              el.target.src = errImg;
            }}
          />
        </Link>
      }
    >
      <Meta
        title={
          <Link to={props.link} className={"font-danaBold"}>
            {props.title}
          </Link>
        }
        description={
          <span className={"font-dana line-clamp-4"}>{props.description}</span>
        }
      />
    </Card>
  );
};

export default ImagesCards;
