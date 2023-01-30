import { HiX } from "react-icons/hi";
const SideMenuBar = ({ isOpen, setIsOpen }) => {
  const toggleMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="sideMenuBar">
      <div className={isOpen ? "Open" : ""}>
        <HiX onClick={toggleMenu}></HiX>
        <div className="MenuList">
          <h2>Home</h2>
          <h2>Me</h2>
          <h2>Project</h2>
          <h2>Contact</h2>
        </div>
      </div>
    </div>
  );
};
export default SideMenuBar;
