import { useState, useEffect } from "react";
import Nav from "../components/Nav";

function Home() {
  return (
    <>
      <Nav />
      <div id="contents">
        <div className="mainBanner1">
          <div className="myImage1"></div>
        </div>
        {/* <!--main-banner1--> */}
        <div className="mainBanner2">
          <div className="bannerBox">
            <div
              className="bannerTitle"
              data-AOS="fade-right"
              data-aos-duration="1000"
            >
              <h2>
                <strong>Hi,</strong> <span>I’m Myeong A Kim.</span>
                <br />
                Frontend developer & Web publisher
              </h2>
            </div>
            <div className="bannerButton btnPush">
              <a href="/about">about me → </a>
            </div>
            <div className="iconBox">
              <div className="icon">
                <a href="https://instagram.com/myonaa_?igshid=YmMyMTA2M2Y=">
                  <img src="../images/icon-instagram.svg" alt="instagram" />
                </a>
              </div>
              <div className="icon">
                <a href="https://blog.naver.com/myeongakim">
                  <img src="../images/icon-naver.svg" alt="naver-blog" />
                </a>
              </div>
              <div className="icon">
                <a href="https://github.com/myeongakim7">
                  <img src="../images/icon-github.svg" alt="github" />
                </a>
              </div>
            </div>
            {/* <!-- icon-box --> */}
            <Like />
          </div>
          {/* <!--banner-box--> */}
        </div>
        {/* <!-- main-banner2 --> */}
      </div>
      {/* <!--contents--> */}
    </>
  );
}

function Like() {
  // states
  const [likes, setLikes] = useState(23);
  const btnLike = () => {
    setLikes(likes + 1);
    console.log(likes);
  };

  useEffect(() => {
    console.log("Like state 상태 업데이트 ");
  }, [likes]);

  return (
    <div className="likeBox">
      <button
        onClick={() => {
          btnLike();
        }}
      >
        <img src="../images/icon-heart.svg" alt="github" />
      </button>
      <span className="likesCount">{likes}</span>
    </div>
  );
}

export default Home;
