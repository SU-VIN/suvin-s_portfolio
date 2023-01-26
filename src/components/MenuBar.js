import { AiOutlineHome, AiOutlineFolder } from "react-icons/ai";
import { BsPerson, BsTelephone } from "react-icons/bs";

const MenuBar = () => {
  return (
    <div className="Menubar">
      <div className="backgrondMenu">
        <AiOutlineHome className="icon" />
        <BsPerson className="icon" />
        <AiOutlineFolder className="icon" />
        <BsTelephone className="icon" />
      </div>
    </div>
  );
};

export default MenuBar;
