import React, { Component } from 'react'
import "./Employee.css"
import AnimalCard from "../animal/AnimalCard"
import EmployeeCard from './EmployeeCard';
export default class EmployeeList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="employeeButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/employees/new")
                        }
                        }>
                        Admit Employee
                </button>
                </div>
                {/* <h2>Employees</h2> */}
                <section className="employee">
                    {
                        this.props.employees.map(employee =>
                            <section key={employee.id}>
                            <EmployeeCard employee={employee} {...this.props} />
                                <h6 className="card-title">Caretaker For</h6>
                                <div className="animals--caretaker">
                                    {
                                        this.props.animals
                                            .filter(anml => anml.employeeId === employee.id)
                                            .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                                    }
                                </div>
                            </section>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}