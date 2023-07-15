import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/rolls">Dice</Link></li>
          <li><Link to="/character" >Character Sheet</Link></li>
          <li><Link to="/monster">Monster Manual</Link></li>
          <li><Link to="/spell">Spell Book</Link></li>
          <li><Link to="/assistant">Assistant</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;