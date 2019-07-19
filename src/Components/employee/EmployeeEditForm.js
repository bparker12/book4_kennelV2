import React, { Component } from "react"
import apiManager from "../../modules/apiManager";

export default class EmployeeEditForm extends Component {
    // Set initial state
    state = {
      employeeName: "",
      locationId: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
        evt.preventDefault()

        if (!this.state.locationId === null) {
          window.alert("Please select a caretaker");
        } else {
          const editedEmployee = {
            id: this.props.match.params.employeeId,
            name: this.state.employeeName,
            locationId: parseInt(this.state.locationId)
          };
      this.props.updateEmployee(editedEmployee)
      .then(() => this.props.history.push("/employees"))
      }
    }

    componentDidMount() {
      apiManager.get("employees", this.props.match.params.employeeId)
      .then(employee => {
        this.setState({
          employeeName: employee.name,
          locationId: employee.locationId
        });
      });
    }


    render() {
      return (
        <React.Fragment>
          <form className="employeeForm">
            <div className="form-group">
              <label htmlFor="employeeName">Employee name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="employeeName"
                value = {this.state.employeeName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="location">Assign to location</label>
              <select
                name="location"
                id="locationId"
                onChange={this.handleFieldChange}
                value = {this.state.locationId}
              >
                <option value="">Select an location</option>
                {this.props.locations.map(e => (
                  <option key={e.id} id={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              onClick={this.updateExistingEmployee}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}