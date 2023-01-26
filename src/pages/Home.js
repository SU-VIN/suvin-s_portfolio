import MenuBar from "../components/MenuBar";

const Home = () => {
  return (
    <div className="Home">
      <div className="top">
        <div className="Me_img">
          <img src={process.env.PUBLIC_URL + `assets/LIM.png`} />
        </div>
        <div className="Me_content">
          <h1>안녕하세요</h1>
          <h1>개발자</h1>
          <h1>임수빈입니다.</h1>
          <hr />
          <h5>방문해 주셔서 감사합니다.</h5>
        </div>
      </div>
      <div className="bottom">
        <MenuBar />
      </div>
    </div>
  );
};

export default Home;
