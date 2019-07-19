import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./Employee.css"
import person from "./employee.svg"
import AnimalCard from "../animal/AnimalCard";


export default class EmployeeCard extends Component {
    render() {
        return (
            <div key={this.props.employee.id} className="card" >
                <div className="card-body">
                    <div className="card-title">
                        <img src={person} className="icon--employee" alt="employee" />
                        <h5 className="h5">{this.props.employee.name}</h5>
                        {!window.location.href.includes("employees") ?
                        <Link className="nav-link" to={`/employees/${this.props.employee.id}`}>Details</Link>
                        :
                        <div className="card-title">
                        <Link className="nav-link" to={`/employees/${this.props.employee.id}`}>Details</Link>
                        <button
                            className="btn btn-success"
                            onClick={() => this.props.history.push(`/employees/${this.props.employee.id}/edit`)}>Edit</button>
                        <button
                            onClick={() => this.props.deleteEmployee("employees", this.props.employee.id)}
                            className="card-link">Fire</button></div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}