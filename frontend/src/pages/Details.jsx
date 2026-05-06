import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Details() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/contacts/${id}`
      );
      setContact(res.data);
    } catch (error) {
      console.error("Error fetching contact", error);
    }
  };

  if (!contact) return <p>Loading...</p>;

  return (
    <div className="card">
      <h2 className="heading-md mb-3">
        Contact Details
      </h2>

      <div className="grid grid-2">
        <div>
          <p className="text-gray">Name</p>
          <h4>{contact.name}</h4>
        </div>

        <div>
          <p className="text-gray">Email</p>
          <h4>{contact.email}</h4>
        </div>

        <div>
          <p className="text-gray">Phone</p>
          <h4>{contact.phone}</h4>
        </div>
      </div>
    </div>
  );
}