import React, { useState } from "react";

const AddDetails = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [company, setCompany] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !company) {
      alert("PLEASE, Fill all the Details...!!!");
    } else {
      props.addDetail(firstname, lastname, company);
      setFirstname("");
      setLastname("");
      setCompany("");
    }
  };
  return (
    <div>
      <form className="container my-3" onSubmit={submit}>
        <h1 className="text-center">Add Employee Details</h1>
        <div className="mb-3">
          <label htmlFor="firstname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstname"
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="company" className="form-label">
            Company
          </label>
          <input
            type="text"
            className="form-control"
            id="company"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add details
        </button>
      </form>
    </div>
  );
};

export default AddDetails;