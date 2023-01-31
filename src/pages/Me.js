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
        <h1>Me</h1>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Me;
