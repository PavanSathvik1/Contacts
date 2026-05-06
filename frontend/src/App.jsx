import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllContacts from "./pages/AllContacts";
import AddContacts from "./pages/AddContacts";
import Details from "./pages/Details";
import EditContacts from "./pages/EditContacts";
import Favourites from "./pages/Favourites";
import Trash from "./pages/Trash";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllContacts />} />
        <Route path="/add-contact" element={<AddContacts />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit-contact/:id" element={<EditContacts />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/trash" element={<Trash />} />
      </Routes>
    </Router>
  );
}

export default App;