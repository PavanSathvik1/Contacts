import React from "react";

export default function Trash() {
  return (
    <div className="card">
      <div className="flex-between mb-3">
        <h2 className="heading-md">Trash</h2>

        <button className="btn btn-danger btn-sm">
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
          <tr>
            <td>Rohit Kumar</td>
            <td>9999999999</td>
            <td>Today</td>

            <td>
              <div className="flex" style={{ gap: "10px" }}>
                <button className="btn btn-success btn-sm">
                  Restore
                </button>

                <button className="btn btn-danger btn-sm">
                  Delete Permanently
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}