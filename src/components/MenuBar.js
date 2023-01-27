import { AiOutlineHome, AiOutlineFolder } from "react-icons/ai";
import { BsPerson, BsTelephone } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const MenuBar = () => {
  const navigate = useNavigate();
  return (
    <div className="Menubar">
      <div className="backgrondMenu">
        <AiOutlineHome
          className="icon"
          onClick={() => {
            navigate("/");
          }}
        />
        <BsPerson
          className="icon"
          onClick={() => {
            navigate("/me");
          }}
        />
        <AiOutlineFolder
          className="icon"
          onClick={() => {
            navigate("/project");
          }}
        />
        <BsTelephone
          className="icon"
          onClick={() => {
            navigate("/contact");
          }}
        />
      </div>
    </div>
  );
};

export default MenuBar;
