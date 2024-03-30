import { NavLink } from "react-router-dom";
import placeholder from "../assets/img/placeholder.png";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <nav>
      <div className="nav-left">
        <img className="icon" src={placeholder} alt="Placeholder" width="30" />
      </div>
      <div className="nav-right">
        <NavLink className={setActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={setActiveClass} to="/pokemones">
          Pokemones
        </NavLink>
      </div>
    </nav>
  );
}

