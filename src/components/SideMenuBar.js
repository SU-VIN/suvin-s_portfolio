import { HiX } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
const SideMenuBar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="SideMenuBar">
      <HiX className="xbtn" onClick={toggleMenu}></HiX>
      <div className="MenuList">
        <h3
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </h3>
        <h3
          onClick={() => {
            location.pathname == "/me" ? setIsOpen(!isOpen) : navigate("/me");
          }}
        >
          About Me
        </h3>
        <h3
          onClick={() => {
            location.pathname == "/project"
              ? setIsOpen(!isOpen)
              : navigate("/project");
          }}
        >
          Project
        </h3>
        <h3
          onClick={() => {
            navigate("/contact");
          }}
        >
          Contact
        </h3>
      </div>
    </div>
  );
};
export default SideMenuBar;
