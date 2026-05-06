import React, { useEffect, useState } from "react";

const dummyContacts = [
  {
    _id: 1,
    name: "John Doe",
    phone: "9876543210",
    email: "john@example.com",
    favorite: true,
  },
  {
    _id: 2,
    name: "Sara Khan",
    phone: "9123456780",
    email: "sara@example.com",
    favorite: false,
  },
  {
    _id: 3,
    name: "Rahul Sharma",
    phone: "9988776655",
    email: "rahul@example.com",
    favorite: false,
  },
];

function AllContacts() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Replace with API later
    setContacts(dummyContacts);
  }, []);

  // 🔍 Filter contacts
  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  // ❌ Delete contact
  const handleDelete = (id) => {
    setContacts(contacts.filter((c) => c._id !== id));
  };

  // ⭐ Toggle favorite
  const toggleFavorite = (id) => {
    setContacts(
      contacts.map((c) =>
        c._id === id ? { ...c, favorite: !c.favorite } : c
      )
    );
  };

  return (
    <>
      {/* 🔹 Navbar */}
      <div className="navbar">
        <div className="container nav-content">
          <div className="logo">MyContacts</div>
          <div className="nav-links">
            <a href="#">All Contacts</a>
            <a href="#">Favorites</a>
          </div>
        </div>
      </div>

      {/* 🔹 Main Section */}
      <div className="container mt-4">
        <h2 className="heading-lg mb-2">All Contacts</h2>

        {/* 🔍 Search */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Search contacts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* 🔹 Contact Grid */}
        <div className="grid grid-3 mt-3">
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
              <div key={contact._id} className="card">
                <div className="flex-between">
                  <h3 className="heading-md">{contact.name}</h3>

                  <span
                    className={`badge ${
                      contact.favorite
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {contact.favorite ? "★ Favorite" : "☆"}
                  </span>
                </div>

                <p className="text-gray mt-1">{contact.phone}</p>
                <p className="text-gray">{contact.email}</p>

                {/* Actions */}
                <div className="flex mt-3" style={{ gap: "10px" }}>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(contact._id)}
                  >
                    Delete
                  </button>

                  <button
                    className="btn btn-outline btn-sm"
                    onClick={() => toggleFavorite(contact._id)}
                  >
                    {contact.favorite ? "Unfavorite" : "Favorite"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray">No contacts found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default AllContacts;import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllContacts from "./pages/AllContacts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllContacts />} />
      </Routes>
    </Router>
  );
}

export default App;