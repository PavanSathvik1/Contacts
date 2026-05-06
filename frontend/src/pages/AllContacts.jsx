import React, { useEffect, useState } from "react";
import axios from "axios";

function AllContacts() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  // 🔹 Fetch from backend
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/contacts");
      setContacts(res.data);
    } catch (error) {
      console.error("Error fetching contacts", error);
    }
  };

  // 🔍 Search filter
  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  // ❌ Delete contact (API)
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/contacts/${id}`);
      setContacts(contacts.filter((c) => c.id !== id));
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <div className="container nav-content">
          <div className="logo">MyContacts</div>
        </div>
      </div>

      {/* Main */}
      <div className="container mt-4">
        <h2 className="heading-lg mb-2">All Contacts</h2>

        {/* Search */}
        <div className="input-group">
          <input
            type="text"
            placeholder="Search contacts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Contact List */}
        <div className="grid grid-3 mt-3">
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
              <div key={contact.id} className="card">
                <h3>{contact.name}</h3>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>

                <div className="flex mt-2" style={{ gap: "10px" }}>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(contact.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No contacts found</p>
          )}
        </div>
      </div>
    </>
  );
}

export default AllContacts;