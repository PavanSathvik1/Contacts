
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AllContacts() {
  const [search, setSearch] = useState("");

  const contacts = [
    {
      id: 1,
      name: "Rahul Sharma",
      phone: "9876543210",
      email: "rahul@gmail.com",
    },
    {
      id: 2,
      name: "Priya Verma",
      phone: "9123456780",
      email: "priya@gmail.com",
    },
    {
      id: 3,
      name: "Arjun Reddy",
      phone: "9000011111",
      email: "arjun@gmail.com",
    },
  ];

  const filteredContacts = contacts.filter((contact) =>
    contact.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="card">
      <div className="flex-between mb-3">
        <h2 className="heading-md">
          All Contacts
        </h2>

        <Link
          to="/add-contact"
          className="btn btn-primary btn-sm"
        >
          Add Contact
        </Link>
      </div>

      {/* Search Bar */}
      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Search contacts by name..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      {/* Contacts Table */}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>

                <td>
                  <div
                    className="flex"
                    style={{ gap: "10px" }}
                  >
                    <Link
                      to="/details"
                      className="btn btn-outline btn-sm"
                    >
                      View
                    </Link>

                    <Link
                      to="/edit-contact"
                      className="btn btn-secondary btn-sm"
                    >
                      Edit
                    </Link>

                    <button className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                className="text-center"
              >
                No Contacts Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
=======
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

export default AllContacts;
