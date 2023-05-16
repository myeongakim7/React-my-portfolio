import React from "react";
import Nav from "../components/Nav";

function About() {
  return (
    <>
      <Nav />
      {/* About me */}
      <div id="about">
        <div className="container">
          <h1 data-aos="fade-right">About me</h1>
          <div className="introBox">
            <div className="myImageName">
              <div className="myImage2"></div>
              <h2>Myeong-A Kim</h2>
            </div>
            {/* <!--my-image-name--> */}
            <div className="aboutTextBox">
              <div className="intro">
                <p>
                  웹퍼블리셔&프론트엔드 개발자로 무한한 성장 잠재력을 가진
                  인재가 되겠습니다. 자기 발전과 회사의 발전을 함께 도모하며
                  계속 성장해 나아갈 수 있도록 서포트 하는 역할을 하고 싶습니다.
                </p>
                <p>
                  주어진 임무에 국한되지 않고 배움의 자세로 임해 당사에 꼭
                  필요한 일원이 되겠습니다.
                </p>
              </div>
              {/* <!--intro--> */}
              <div className="private">
                <div className="privateBox">
                  <div className="privateBoxText">
                    <div className="pIcon">
                      <img src="../images/icon-address.svg" alt="address" />
                    </div>
                    <p className="text1">
                      5, Eonaedeul-ro, Uiwang-si, Gyeonggi-do
                    </p>
                  </div>
                  <div className="privateBoxText">
                    <div className="pIcon">
                      <img src="../images/icon-call.svg" alt="call" />
                    </div>
                    <p className="text1">(82+) 10-7279-7724</p>
                  </div>
                  <div className="privateBoxText">
                    <div className="pIcon">
                      <img src="../images/icon-email.svg" alt="email" />
                    </div>
                    <p className="text1">okmyonga@naver.com</p>
                  </div>
                </div>
                {/* <!--private-box--> */}
              </div>
              {/* <!--private--> */}

              <div className="edu">
                <h3>Education</h3>
                <ul className="eduUl">
                  <li className="eduLi">
                    (스마트웹&콘텐츠개발) UI/UX 웹디자인(웹퍼블리셔&프론트엔드
                    개발)실무
                  </li>
                  <li>한세대학교 경찰행정학과 졸업</li>
                  <li>안양고 졸업</li>
                </ul>
              </div>
              {/* <!--edu--> */}
            </div>
            {/* <!--about-text-box--> */}
          </div>
          {/* <!--intro-box--> */}
        </div>
        {/* <!--container--> */}
      </div>
      {/* <!--about--> */}

      <div id="expertise">
        <div
          className="container"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h1>Expertise</h1>
          <div className="skillBox">
            <div className="skill">
              <div className="skillImg">
                <img
                  src="https://skillicons.dev/icons?i=html,css,js,react,nodejs,vscode,bootstrap,sqlite,git,figma&perline=5"
                  alt="icon"
                />
              </div>
            </div>
            {/* <!--skill--> */}
          </div>
          {/* skill-box */}
        </div>
        {/* container */}
      </div>
      {/* expertise */}
    </>
  );
}

export default About;
