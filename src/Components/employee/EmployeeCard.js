import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./Employee.css"
import person from "./employee.svg"

export default class EmployeeCard extends Component {
    render() {
        return (
            <div key={this.props.employee.id} className="card" >
                <div className="card-body">
                    <div className="card-title">
                        <img src={person} className="icon--employee" alt="employee" />
                        <h5>{this.props.employee.name}</h5>
                        <Link className="nav-link" to={`/employees/${this.props.employee.id}`}>Details</Link>
                        <button
                            onClick={() => this.props.deleteEmployee("employees", this.props.employee.id)}
                            className="card-link">Fire</button>
                    </div>
                </div>
            </div>
        )
    }
}