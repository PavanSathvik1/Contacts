import React from "react";

export default function EditContacts() {
  return (
    <div className="card">
      <h2 className="heading-md mb-3">
        Edit Contact
      </h2>

      <form>
        <div className="grid grid-2">
          <div className="input-group">
            <label>First Name</label>
            <input type="text" defaultValue="Rahul" />
          </div>

          <div className="input-group">
            <label>Last Name</label>
            <input type="text" defaultValue="Sharma" />
          </div>
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            defaultValue="rahul@gmail.com"
          />
        </div>

        <div className="grid grid-2">
          <div className="input-group">
            <label>Phone</label>
            <input
              type="tel"
              defaultValue="9876543210"
            />
          </div>

          <div className="input-group">
            <label>Alternative Phone</label>
            <input
              type="tel"
              defaultValue="9123456780"
            />
          </div>
        </div>

        <div className="input-group">
          <label>DOB</label>
          <input type="date" />
        </div>

        <button className="btn btn-secondary mt-2">
          Update Contact
        </button>
      </form>
    </div>
  );
}