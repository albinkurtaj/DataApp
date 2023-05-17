import { Outlet, Link } from "react-router-dom";

const Layout1 = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Hello</Link>
          </li>
          <li>
            <Link to="/input">Input</Link>
          </li>
         
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout1;
