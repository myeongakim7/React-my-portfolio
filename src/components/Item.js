// 작품
import React from "react";
// import Projects from "../pages/Projects";

function Item({ title, desc, link }) {
  return (
    <>
      <div className="item">
        <div className="text">
          <h2>{title}</h2>
          <p>{desc}</p>
          <a href={link}>Link&nbsp;&nbsp;→</a>
        </div>
        {/* text */}
      </div>
      {/*item */}
    </>
  );
}

export default Item;
