import React, { useState } from "react";
import Axios from "axios";

function Register() {
  const [inputs, setInputs] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post(
      '/api/authors',
      {
        authors: {
          firstName: inputs.firstName,
          lastName: inputs.lastName,
          email: inputs.email,
          password: inputs.password,
          passwordConfirmation: inputs.passwordConfirmation
        }
      }
    )
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleInputChange(event) {
    event.persist();
    const name = event.target.name;
    const value = event.target.value;

    setInputs(inputs => {
      // Below is a shallow merge. It takes the original inputs value and merges in the new object key and value using the spread operator
      return {
        ...inputs, [name]: value
      }
    });
  }

  return (
    <div className="container">
      <header>
        <h1>New Author</h1>
      </header>
      <div>
        <form action="/api/authors" method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input className="form-control" name="firstName" required="required" onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input className="form-control" name="lastName" required="required" onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input className="form-control" name="email" required="required" onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input className="form-control" name="password" type="password" required="required" onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Password Confirmation</label>
            <input className="form-control" name="passwordConfirmation" required="required" onChange={handleInputChange} type="password" />
          </div>

          <div className="form-group">
            <button className="btn btn-dark" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
