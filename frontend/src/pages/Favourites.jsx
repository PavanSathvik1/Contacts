import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Favourites() {
  const [contacts, setContacts] = useState([]);

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

  // ⭐ Filter favorites
  const favouriteContacts = contacts.filter(
    (c) => c.favorite === true
  );

  return (
    <div className="card">
      <div className="flex-between mb-3">
        <h2 className="heading-md">Favourite Contacts</h2>

        <span className="badge badge-success">
          {favouriteContacts.length} Favourites
        </span>
      </div>

      <div className="grid grid-2">
        {favouriteContacts.length > 0 ? (
          favouriteContacts.map((contact) => (
            <div key={contact.id} className="card">
              <h3>{contact.name}</h3>

              <p className="text-gray">
                {contact.email}
              </p>

              <p className="mt-1">{contact.phone}</p>
            </div>
          ))
        ) : (
          <p>No favourite contacts</p>
        )}
      </div>
    </div>
  );
}