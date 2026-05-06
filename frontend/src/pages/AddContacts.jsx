import React, { useState } from "react";
import axios from "axios";

export default function AddContacts() {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    altPhone: "",
    dob: "",
  });

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 🔥 Combine first + last name for backend
      const payload = {
        name: contact.firstName + " " + contact.lastName,
        email: contact.email,
        phone: contact.phone,
      };

      const response = await axios.post(
        "http://localhost:8080/contacts",
        payload
      );

      alert("Contact Saved Successfully!");
      console.log(response.data);

      // Reset form
      setContact({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        altPhone: "",
        dob: "",
      });

    } catch (error) {
      console.error(error);
      alert("Error saving contact!");
    }
  };

  return (
    <div className="card">
      <h2 className="heading-md mb-3">Add Contact</h2>

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
            <label>Alt Phone</label>
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

        <button type="submit">Save Contact</button>
      </form>
    </div>
  );
}