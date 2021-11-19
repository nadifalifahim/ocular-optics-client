import React, { useRef, useState } from "react";
import useAlert from "../../../Hooks/useAlert";

const MakeAdmin = () => {
  const adminEmailRef = useRef();
  const [success, setSuccess] = useState(false);
  const showAlert = useAlert("Admin added successfully", "success");

  const handleAddNewAdmin = (e) => {
    const adminEmail = adminEmailRef.current.value;
    const email = { adminEmail };

    fetch("http://localhost:5000/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
        console.log(data);
      })
      .finally((adminEmailRef.current.value = ""));
    e.preventDefault();
  };

  return (
    <div>
      <div className="new-service-container">
        <div>
          <h1 className="section-title">Add a new admin</h1>
          <form onSubmit={handleAddNewAdmin}>
            <label>
              Enter Admin Email
              <input type="text" required ref={adminEmailRef}></input>
            </label>

            <button type="submit" className="primary-button">
              Add New Admin
            </button>
            {success && <div className="successAlert">{showAlert}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
