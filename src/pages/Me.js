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
      <div className="Top">
        <HiMenu className="Menu" onClick={toggleMenu} />
        {isOpen ? (
          <>
            <SideMenuBar isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        ) : (
          <></>
        )}
        <h1>Me</h1>
      </div>
      <div className="Bottom"></div>
    </div>
  );
};

export default Me;
