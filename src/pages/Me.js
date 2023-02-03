import { useEffect, useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";
import SideMenuBar from "../components/SideMenuBar";

const Me = () => {
  const scrollRef = useRef([]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (ref) => {
    ref.scrollIntoView({ behavior: "smooth" });
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
            <h5
              onClick={() => {
                handleScroll(scrollRef.current[0]);
              }}
            >
              # 임수빈
            </h5>

            <h5
              onClick={() => {
                handleScroll(scrollRef.current[1]);
              }}
            >
              # 프로젝트
            </h5>
            <h5
              onClick={() => {
                handleScroll(scrollRef.current[2]);
              }}
            >
              # 수상경력
            </h5>
          </div>
        </div>
      </div>
      <div className="bottom">
        <h4
          ref={(el) => {
            scrollRef.current[0] = el;
          }}
        >
          임수빈
        </h4>
        <div className="suvin">
          <img
            className="suvinpic"
            src={process.env.PUBLIC_URL + `assets/SuvinPic.png`}
          />
          <div className="suvinList">
            <p>2019. 02 | 경인고등학교 졸업</p>
            <p>2019. 03 | 한성대학교 IT공과대학 입학</p>
            <p>2020. 06 ~ 2022. 12 | 한성대학교 학술소모임 BUG 회원</p>
            <p>2023. 02 | 한성대학교 졸업</p>
          </div>
        </div>

        <h4
          ref={(el) => {
            scrollRef.current[1] = el;
          }}
        >
          프로젝트
        </h4>
        <div className="projectList">
          <img
            className="pjList"
            src={process.env.PUBLIC_URL + `assets/pjList.png`}
          />
          <hr />
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
            <p>감정일기장</p>서비스형 웹페이지
          </h3>
          <h3>
            <p>내 MBTI를 맞춰봐</p>서비스형 웹페이지
          </h3>
        </div>

        <h4
          ref={(el) => {
            scrollRef.current[2] = el;
          }}
        >
          수상경력
        </h4>
        <div className="awards">
          <p>2021 한성공학경진대회 금상(2위)</p>
          <p>2021 한성 C&C Festival 대상(1위)</p>
          <p>2021 한성발전공헌상</p>
          <p>2022 컴퓨터공학부 캡스톤디자인 우수상(2위)</p>
          <p>2022 한성공학경진대회 동상(4위)</p>
        </div>
      </div>
    </div>
  );
};

export default Me;
