import React from "react";

export default function Favourites() {
  return (
    <div className="card">
      <div className="flex-between mb-3">
        <h2 className="heading-md">Favourite Contacts</h2>

        <span className="badge badge-success">
          2 Favourites
        </span>
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3>Priya Verma</h3>

          <p className="text-gray">
            priya@gmail.com
          </p>

          <p className="mt-1">9123456780</p>
        </div>

        <div className="card">
          <h3>Rahul Sharma</h3>

          <p className="text-gray">
            rahul@gmail.com
          </p>

          <p className="mt-1">9876543210</p>
        </div>
      </div>
    </div>
  );
}