import "./index.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import AllContacts from "./pages/AllContacts";
import AddContacts from "./pages/AddContacts";
import Details from "./pages/Details";
import EditContacts from "./pages/EditContacts";
import Favourites from "./pages/Favourites";
import Trash from "./pages/Trash";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">Contacts App</div>

          <div className="nav-links">
            <Link to="/">Dashboard</Link>

            <Link to="/add-contact">
              Add Contact
            </Link>

            <Link to="/favourites">
              Favourites
            </Link>

            <Link to="/trash">Trash</Link>
          </div>
        </div>
      </nav>

      {/* Pages */}
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={<AllContacts />}
          />

          <Route
            path="/add-contact"
            element={<AddContacts />}
          />

          <Route
            path="/details"
            element={<Details />}
          />

          <Route
            path="/edit-contact"
            element={<EditContacts />}
          />

          <Route
            path="/favourites"
            element={<Favourites />}
          />

          <Route
            path="/trash"
            element={<Trash />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;