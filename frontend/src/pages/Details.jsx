import React from "react";

export default function Details() {
  return (
    <div className="card">
      <h2 className="heading-md mb-3">
        Contact Details
      </h2>

      <div className="grid grid-2">
        <div>
          <p className="text-gray">First Name</p>
          <h4>Rahul</h4>
        </div>

        <div>
          <p className="text-gray">Last Name</p>
          <h4>Sharma</h4>
        </div>

        <div>
          <p className="text-gray">Email</p>
          <h4>rahul@gmail.com</h4>
        </div>

        <div>
          <p className="text-gray">Phone</p>
          <h4>9876543210</h4>
        </div>

        <div>
          <p className="text-gray">
            Alternative Number
          </p>
          <h4>9123456780</h4>
        </div>

        <div>
          <p className="text-gray">DOB</p>
          <h4>12-05-2004</h4>
        </div>
      </div>
    </div>
  );
}