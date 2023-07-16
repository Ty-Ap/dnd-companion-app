import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/" className="button-link">Home</Link></li>
          <li><Link to="/rolls" className="button-link">Dice</Link></li>
          <li><Link to="/character" className="button-link">Character Sheet</Link></li>
          <li><Link to="/monster" className="button-link">Monster Manual</Link></li>
          <li><Link to="/spell" className="button-link">Spell Book</Link></li>
          <li><Link to="/assistant" className="button-link">Assistant</Link></li>
          <li><Link to="/random-encounters" className="button-link">Random Encounters</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;
