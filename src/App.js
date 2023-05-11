//리액트는 싱글페이지 방식으로 페이지가 하나임, 일반 홈페이지 처럼 여러 페이지로 경로를 나누려면 라우팅 처리를 하여야 함
// 라우팅이란 특정 URL로 요청하면 해당 페이지를 연결해 주는 기능, 각각에 해당하는 페이지를 컴포넌트로 만들어 연결하면 됨
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//라우터에 연결할 페이지
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//리액트 라우터 설치  npm install react-router-dom@6
