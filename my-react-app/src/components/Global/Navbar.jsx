import { Nav, Logo, Menu } from "./GlobalStyle";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navi = useNavigate();
  return (
    <>
      <Nav>
        <div className="container content">
          <Logo onClick={() => navi("/")}>PORTFOLIO</Logo>
          <Menu>
            <li>
              <a onClick={() => navi("/About")}>About</a>
            </li>
            <li>
              <a onClick={() => navi("/Skills")}>Skills</a>
            </li>
            <li>
              <a onClick={() => navi("/Projects")}>Projects</a>
            </li>
          </Menu>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;
