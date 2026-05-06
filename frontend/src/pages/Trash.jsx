import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Trash() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchTrash();
  }, []);

  const fetchTrash = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8080/contacts/trash"
      );
      setContacts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔄 Restore
  const handleRestore = async (id) => {
    await axios.put(
      `http://localhost:8080/contacts/restore/${id}`
    );
    fetchTrash();
  };

  // ❌ Permanent Delete
  const handleDelete = async (id) => {
    await axios.delete(
      `http://localhost:8080/contacts/permanent/${id}`
    );
    fetchTrash();
  };

  // 🧹 Empty Trash
  const emptyTrash = async () => {
    for (let c of contacts) {
      await axios.delete(
        `http://localhost:8080/contacts/permanent/${c.id}`
      );
    }
    fetchTrash();
  };

  return (
    <div className="card">
      <div className="flex-between mb-3">
        <h2 className="heading-md">Trash</h2>

        <button
          className="btn btn-danger btn-sm"
          onClick={emptyTrash}
        >
          Empty Trash
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Deleted On</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts.length > 0 ? (
            contacts.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.phone}</td>
                <td>
                  {c.deletedAt
                    ? new Date(c.deletedAt).toLocaleDateString()
                    : "-"}
                </td>

                <td>
                  <div
                    className="flex"
                    style={{ gap: "10px" }}
                  >
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() =>
                        handleRestore(c.id)
                      }
                    >
                      Restore
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() =>
                        handleDelete(c.id)
                      }
                    >
                      Delete Permanently
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">Trash is empty</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}