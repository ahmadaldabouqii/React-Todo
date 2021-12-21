import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="nav-header">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/AboutUs">AboutUs</NavLink>
        <NavLink to="/TodoUI">Todo List</NavLink>
        <NavLink to="/ExpenseTrackerUI">Expense Tracker</NavLink>
      </nav>
    </header>
  );
};
export default NavBar;
