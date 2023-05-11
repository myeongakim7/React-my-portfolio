// 작품
import React from "react";
// import Projects from "../pages/Projects";

function Item({ title, desc, link, img }) {
  return (
    <>
      <div className="item">
        <div className="text">
          <h2>{title}</h2>
          <p>{desc}</p>
          <a href={link}>작품 보러가기</a>
        </div>
        {/* text */}

        <div className="img">
          <img src={img} alt="{title}" />
        </div>
      </div>
      {/*item */}
    </>
  );
}

export default Item;
