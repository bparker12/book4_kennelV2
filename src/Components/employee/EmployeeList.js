import React, { Component } from 'react'



export default class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
                <h2>Employees</h2>
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id} className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    {/* <img src={dog} className="icon--dog" alt="Dog" /> */}
                                    <h5>{employee.name}</h5>
                                    <button
                                        onClick={() => this.props.deleteEmployee(employee.id)}
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