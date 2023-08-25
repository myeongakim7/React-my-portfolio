import React from "react";
import Item from "../components/Item";
import Nav from "../components/Nav";

function Projects() {
  return (
    <>
      <Nav />
      <div id="project">
        <div className="container">
          <section
            className="itemList"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div className="itemBox">
              <ItemInfo />
            </div>
          </section>
        </div>
        {/* container */}
      </div>
      {/* project */}
    </>
  );
}

function ItemInfo() {
  const ImgStyle1 = {
    width: "720px",
    height: "350px",
  };
  const ImgStyle2 = {
    width: "390px",
    height: "350px",
  };
  const ImgStyle3 = {
    width: "603px",
    height: "340px",
  };
  const itemInfo = [
    {
      title: "대웅 플라스틱 컴파운드",
      desc: "기존 사이트의 노후화 개선을 위해 리뉴얼한 반응형 홈페이지입니다.",
      link: "https://myeongakim7.github.io/Daewoong-Plastic-Compound/",
      img: "/images/p-2.jpg",
      style: ImgStyle1,
    },
    {
      title: "[그룹 프로젝트] 금연어플 담담",
      desc: "금단증상을 극복하기 위한 정보, 변화 단계를 확인하실 수 있습니다. ",
      link: "https://port-0-damdam-no-smoking-app-1jx7m2gldidl1j7.gksl2.cloudtype.app/ ",
      img: "/images/p-3.jpg",
      style: ImgStyle2,
    },
    {
      title: "부산 119 구조 반려동물 조회",
      desc: "공공API 데이터를 기반으로 React로 제작한 구조 반려동물 조회어플입니다.",
      link: "https://web-animal-rescue119-3a9t2bldtzerfu.sel3.cloudtype.app/",
      img: "/images/p-4.jpg",
      style: ImgStyle2,
    },
    {
      title: "동아제약",
      desc: "기존 사이트의 노후화 개선을 위해 리뉴얼한 반응형 홈페이지입니다.",
      link: "https://myeongakim7.github.io/Dong-A-Pharmaceutical-Co.-Ltd.-Renewal/",
      img: "/images/p-1.jpg",
      style: ImgStyle1,
    },
    {
      title: "연하장(New year's card)",
      desc: "node.js를 활용, DB파일을 분류해 댓글 추가/삭제 할 수 있는 연하장입니다",
      link: "https://port-0-new-years-card-1jx7m2gldie61h6.gksl2.cloudtype.app/",
      img: "/images/p-5.jpg",
      style: ImgStyle3,
    },
  ];

  return itemInfo.map((a, i) => {
    console.log(a, i);

    return (
      <Item
        key={i}
        img={itemInfo[i].img}
        title={itemInfo[i].title}
        desc={itemInfo[i].desc}
        link={itemInfo[i].link}
        style={itemInfo[i].style}
      />
    );
  });
}

// }

export default Projects;
