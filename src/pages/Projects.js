import React from "react";
import Item from "../components/Item";
import Nav from "../components/Nav";

function Projects() {
  const itemInfo = [
    {
      title: "대웅 플라스틱 컴파운드",
      desc: "기존 사이트의 노후화 개선을 위해 리뉴얼한 반응형 홈페이지입니다.",
      link: "https://myeongakim7.github.io/Daewoong-Plastic-Compound/",
      img: "/images/p-2.jpg",
    },
    {
      title: "[그룹 프로젝트] 금연어플 담담",
      desc: "금연을 장려하고자 만든 금연어플입니다. 금단증상을 극복하기 위한 정보, 변화 단계를 확인하실 수 있습니다.",
      link: "https://port-0-damdamv2-4fuvwk25lcstd4fc.gksl2.cloudtype.app/",
      img: "/images/p-3.jpg",
    },
    {
      title: "부산 119 구조 반려동물 조회",
      desc: "공공API 데이터를 기반으로 React로 제작한 구조 반려동물 조회어플입니다.",
      link: "https://web-animal-rescue119-3a9t2bldtzerfu.sel3.cloudtype.app/",
      img: "/images/p-4.jpg",
    },
    {
      title: "동아제약",
      desc: "기존 사이트의 노후화 개선을 위해 리뉴얼한 반응형 홈페이지입니다.",
      link: "https://myeongakim7.github.io/Dong-A-Pharmaceutical-Co.-Ltd.-Renewal/",
      img: "/images/p-1.jpg",
    },
  ];
  // 작품 수 만큼 만들기

  return (
    <>
      <Nav />
      <div id="project">
        <div className="container">
          {/* <div>Projects</div> */}
          <section className="itemList">
            <Item
              className="pImage1 pImage"
              img={itemInfo[0].img}
              title={itemInfo[0].title}
              desc={itemInfo[0].desc}
              link={itemInfo[0].link}
            />
            <Item
              className="pImage2 pImage"
              img={itemInfo[1].img}
              title={itemInfo[1].title}
              desc={itemInfo[1].desc}
              link={itemInfo[1].link}
            />
            <Item
              className="pImage1 pImage"
              title={itemInfo[2].title}
              desc={itemInfo[2].desc}
              link={itemInfo[2].link}
              img={itemInfo[2].img}
            />
            <Item
              className="pImage2 pImage"
              title={itemInfo[3].title}
              desc={itemInfo[3].desc}
              link={itemInfo[3].link}
              img={itemInfo[3].img}
            />
          </section>
        </div>
        {/* container */}
      </div>
      {/* project */}
    </>
  );
}

export default Projects;
