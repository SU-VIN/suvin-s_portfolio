import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import SideMenuBar from "../components/SideMenuBar";
const Me = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Me">
      <div className="top">
        <HiMenu className="Menu" onClick={toggleMenu} />
        {isOpen ? (
          <>
            <div className="opaque"></div>
            <SideMenuBar isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        ) : (
          <></>
        )}
        <div className="aboutMe">
          <h1>Me</h1>
          <div className="hashTag">
            <h5># 임수빈</h5>
            <h5># 프로젝트</h5>
            <h5># 수상경력</h5>
          </div>
        </div>
      </div>
      <div className="bottom">
        <h4>임수빈</h4>
        <div className="suvin">
          <img
            className="pic"
            src={process.env.PUBLIC_URL + `assets/SuvinPic.png`}
          />
          <div className="suvinList">
            <p>2019. 02 | 경인고등학교 졸업</p>
            <p>2019. 03 | 한성대학교 IT공과대학 입학</p>
            <p>2020. 06 ~ 2022. 12 | 한성대학교 학술소모임 BUG 회원</p>
            <p>2023. 02 | 한성대학교 졸업</p>
          </div>
        </div>

        <h4>프로젝트</h4>
        <div className="projectList">
          <h3>
            <p>HSU_On</p>한성대학교 메타버스 캠퍼스
          </h3>
          <h3>
            <p>왕이되자</p>대부호 카드게임
          </h3>
          <h3>
            <p>Hansung Vote</p>학생회 선거 웹페이지
          </h3>
          <h3>
            <p>내 MBTI를 맞춰봐</p>서비스형 웹페이지
          </h3>
        </div>

        <h4>수상경력</h4>
        <div className="awards"></div>
      </div>
    </div>
  );
};

export default Me;
