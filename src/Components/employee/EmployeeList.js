import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Employee.css"
import person from "./employee.svg"

export default class EmployeeList extends Component {
    render() {
        return (
            <section className="employee">
                {/* <h2>Employees</h2> */}
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id} className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <img src={person} className="icon--employee" alt="employee" />
                                    <h5>{employee.name}</h5>
                                    <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                                    <button
                                        onClick={() => this.props.deleteEmployee("employees", employee.id)}
                                        className="card-link">Delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </section>
            )
        }
}