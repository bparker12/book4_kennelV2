import React, { Component } from "react";
import "./Owner.css";

export default class ownerForm extends Component {
  // Set initial state
  state = {
    ownerName: "",
    ownerPhoneNumber: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
    // console.log("statechange", stateToChange)
  };

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewOwner = evt => {
    evt.preventDefault();
    if (this.state.ownerName === "") {
      window.alert("Please input a Owner's name");
    } else {
      const owner = {
        name: (this.state.ownerName),
        phoneNumber: (this.state.ownerPhoneNumber)
      };

      // Create the animal and redirect user to animal list
      this.props
        .addOwner(owner)
        .then(() => this.props.history.push("/owners"));
    }
  };

  render() {
    return (
      <React.Fragment>
        <form className="ownerForm">
          <div className="form-group">
          <div>
            <label htmlFor="ownerName">Owner Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="ownerName"
              placeholder="Owner Name"
              autoFocus
            />
            </div>
            <div>
            <label htmlFor="ownerPhoneNumber">Phone Number</label>
            <input
            type="text"
            required
            className="form-control"
            onClick={this.handleFieldChange}
            id="ownerPhoneNumber"
            placeholder="Phone Number"
            />
            </div>
          <button
            type="submit"
            onClick={this.constructNewOwner}
            className="btn btn-primary"
          >
            Submit
          </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}