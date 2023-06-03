import React from "react";
import Item from "../components/Item";
import Nav from "../components/Nav";

function Projects() {
  const itemInfo = [
    {
      title: "대웅 플라스틱 컴파운드",
      desc: "기존 사이트의 노후화 개선을 위해 리뉴얼한 반응형 홈페이지입니다.",
      link: "https://myeongakim7.github.io/Daewoong-Plastic-Compound/",
    },
    {
      title: "[그룹 프로젝트] 금연어플 담담",
      desc: "금단증상을 극복하기 위한 정보, 변화 단계를 확인하실 수 있습니다. ",
      link: "https://port-0-damdamv2-4fuvwk25lcstd4fc.gksl2.cloudtype.app/",
    },
    {
      title: "부산 119 구조 반려동물 조회",
      desc: "공공API 데이터를 기반으로 React로 제작한 구조 반려동물 조회어플입니다.",
      link: "https://web-animal-rescue119-3a9t2bldtzerfu.sel3.cloudtype.app/",
    },
    {
      title: "동아제약",
      desc: "기존 사이트의 노후화 개선을 위해 리뉴얼한 반응형 홈페이지입니다.",
      link: "https://myeongakim7.github.io/Dong-A-Pharmaceutical-Co.-Ltd.-Renewal/",
    },
    {
      title: "연하장(New year's card)",
      desc: "node.js를 활용, DB파일을 분류해 댓글 추가/삭제 할 수 있는 연하장입니다",
      link: "https://port-0-new-years-card-1jx7m2gldie61h6.gksl2.cloudtype.app/",
    },
  ];
  const imgInfo = [
    {
      img: "/images/p-2.jpg",
      title: "대웅 플라스틱 컴파운드",
    },
    {
      img: "/images/p-3.jpg",
      title: "[그룹 프로젝트] 금연어플 담담",
    },
    {
      img: "/images/p-4.jpg",
      title: "부산 119 구조 반려동물 조회",
    },
    {
      img: "/images/p-1.jpg",
      title: "동아제약",
    },
    {
      img: "/images/p-5.jpg",
      title: "연하장(New year's card)",
    },
  ];
  // 작품 수 만큼 만들기
  const ImgStyle1 = {
    width: "720px",
    height: "350px",
    // border: "3px solid yellow",
  };
  const ImgStyle2 = {
    width: "390px",
    height: "350px",
    // border: "3px solid purple",s
  };
  const ImgStyle3 = {
    width: "603px",
    height: "340px",
  };
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
              <Images
                style={ImgStyle1}
                img={imgInfo[0].img}
                title={imgInfo[0].title}
              />
              <Item
                // img={itemInfo[0].img}
                title={itemInfo[0].title}
                desc={itemInfo[0].desc}
                link={itemInfo[0].link}
              />
            </div>
            <div className="itemBox">
              <Images
                style={ImgStyle2}
                img={imgInfo[1].img}
                title={imgInfo[1].title}
              />
              <Item
                // img={itemInfo[1].img}
                title={itemInfo[1].title}
                desc={itemInfo[1].desc}
                link={itemInfo[1].link}
              />
            </div>
            <div className="itemBox">
              <Images
                style={ImgStyle1}
                img={imgInfo[3].img}
                title={imgInfo[3].title}
              />
              <Item
                title={itemInfo[3].title}
                desc={itemInfo[3].desc}
                link={itemInfo[3].link}
                // img={itemInfo[3].img}
              />
            </div>
            <div className="itemBox">
              <Images
                style={ImgStyle2}
                img={imgInfo[2].img}
                title={imgInfo[2].title}
              />
              <Item
                title={itemInfo[2].title}
                desc={itemInfo[2].desc}
                link={itemInfo[2].link}
                // img={itemInfo[2].img}
              />
            </div>
            <div className="itemBox">
              <Images
                style={ImgStyle3}
                img={imgInfo[4].img}
                title={imgInfo[4].title}
              />
              <Item
                title={itemInfo[4].title}
                desc={itemInfo[4].desc}
                link={itemInfo[4].link}
                // img={itemInfo[2].img}
              />
            </div>
          </section>
        </div>
        {/* container */}
      </div>
      {/* project */}
    </>
  );
}

function Images({ img, title, style }) {
  return (
    <div className="img" style={style}>
      <img src={img} alt={title} />
    </div>
  );
}

export default Projects;
