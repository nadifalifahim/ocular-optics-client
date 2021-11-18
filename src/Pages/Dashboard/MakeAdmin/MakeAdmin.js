import React, { useRef } from "react";

const MakeAdmin = () => {
  const adminEmailRef = useRef();

  const handleAddNewAdmin = (e) => {
    const adminEmail = adminEmailRef.current.value;
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
