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