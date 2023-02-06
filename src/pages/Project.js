import { useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { BiArrowToTop } from "react-icons/bi";
import SideMenuBar from "../components/SideMenuBar";
const Project = () => {
  const scrollRef = useRef([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (ref) => {
    ref.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="Project"
      ref={(el) => {
        scrollRef.current[0] = el;
      }}
    >
      <div className="top">
        <BiArrowToTop
          className="topButton"
          onClick={() => {
            handleScroll(scrollRef.current[0]);
          }}
        />
        <HiMenu className="Menu" onClick={toggleMenu} />
        {isOpen ? (
          <>
            <div className="opaque"></div>
            <SideMenuBar isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        ) : (
          <></>
        )}
        <div className="aboutProject">
          <h1>Project</h1>
          <div className="hashTag">
            <h5
              className="ht1"
              onClick={() => {
                handleScroll(scrollRef.current[1]);
              }}
            >
              # HSU_On
            </h5>

            <h5
              className="ht2"
              onClick={() => {
                handleScroll(scrollRef.current[2]);
              }}
            >
              # 왕이되자
            </h5>

            <h5
              className="ht3"
              onClick={() => {
                handleScroll(scrollRef.current[3]);
              }}
            >
              # Hansung Vote
            </h5>

            <h5
              className="ht4"
              onClick={() => {
                handleScroll(scrollRef.current[4]);
              }}
            >
              # 감정일기장
            </h5>

            <h5
              className="ht5"
              onClick={() => {
                handleScroll(scrollRef.current[5]);
              }}
            >
              # 내 MBTI를 맞춰봐
            </h5>
          </div>
        </div>
      </div>
      <div className="bottom">
        <h4
          ref={(el) => {
            scrollRef.current[5] = el;
          }}
        >
          내 MBTI를 맞추봐
        </h4>
        <div className="guessmymbti"></div>

        <h4
          ref={(el) => {
            scrollRef.current[4] = el;
          }}
        >
          감정 일기장
        </h4>
        <div className="emotiondiary"></div>

        <h4
          ref={(el) => {
            scrollRef.current[3] = el;
          }}
        >
          Hansung Vote
        </h4>
        <div className="hansungvote"></div>

        <h4
          ref={(el) => {
            scrollRef.current[2] = el;
          }}
        >
          왕이되자
        </h4>
        <div className="king"></div>

        <h4
          ref={(el) => {
            scrollRef.current[1] = el;
          }}
        >
          HSU_On
        </h4>
        <div className="hsuon"></div>
      </div>
    </div>
  );
};

export default Project;
