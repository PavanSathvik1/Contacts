import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Contact Saved!");
    console.log(contact);
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
              placeholder="Enter first name"
              value={contact.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
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
            placeholder="Enter email"
            value={contact.email}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-2">
          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={contact.phone}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Alternative Number</label>
            <input
              type="tel"
              name="altPhone"
              placeholder="Enter alternative number"
              value={contact.altPhone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={contact.dob}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Save Contact
        </button>
      </form>
    </div>
  );
}