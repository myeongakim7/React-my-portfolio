import React from "react";
import { Link } from "react-router-dom";
// a 대신 Link 태그로 함 , href 대신 to로 함 => 다이나믹한 Link 태그로 페이지 로딩 없이 빠르게 이동 가능
// a 는 로딩해서 .. 로딩시간 느림
function Nav() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
}

export default Nav;
