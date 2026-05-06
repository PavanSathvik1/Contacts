import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditContacts() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    altPhone: "",
    dob: "",
  });

  // 🔹 Fetch existing contact
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

  // 🔹 Handle input change
  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 Update contact
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:8080/contacts/${id}`,
        contact
      );

      alert("Contact Updated!");
      navigate("/");
    } catch (error) {
      console.error("Update failed", error);
    }
  };

  return (
    <div className="card">
      <h2 className="heading-md mb-3">
        Edit Contact
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-2">
          <div className="input-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={contact.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={contact.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-2">
          <div className="input-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={contact.phone}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Alternative Phone</label>
            <input
              type="tel"
              name="altPhone"
              value={contact.altPhone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-group">
          <label>DOB</label>
          <input
            type="date"
            name="dob"
            value={contact.dob}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-secondary mt-2"
        >
          Update Contact
        </button>
      </form>
    </div>
  );
}