import React from "react";
import Item from "../components/Item";
import Nav from "../components/Nav";

function Projects() {
  const itemInfo = [
    {
      title: "프로젝트1",
      desc: "설명글1",
      link: "홈피주소1",
      img: "/images/project01.jpg",
    },
    {
      title: "프로젝트2",
      desc: "설명글2",
      link: "홈피주소2",
      img: "/images/project02.png",
    },
    {
      title: "프로젝트3",
      desc: "설명글3",
      link: "홈피주소3",
      img: "/images/project03.jpg",
    },
  ];
  // 작품 수 만큼 만들기

  return (
    <div className="container">
      <Nav />
      <div>Projects</div>
      <section className="itemList">
        <Item
          title={itemInfo[0].title}
          desc={itemInfo[0].desc}
          link={itemInfo[0].link}
          img={itemInfo[0].img}
        />
        <Item
          title={itemInfo[1].title}
          desc={itemInfo[1].desc}
          link={itemInfo[1].link}
          img={itemInfo[1].img}
        />
        <Item
          title={itemInfo[2].title}
          desc={itemInfo[2].desc}
          link={itemInfo[2].link}
          img={itemInfo[2].img}
        />
      </section>
    </div>
  );
}

export default Projects;
