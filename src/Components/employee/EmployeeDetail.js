import React, { Component } from 'react'
import "./Employee.css"
import person from "./employee.svg"

export default class Employee extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="employees">
                <div key={this.props.employee.id} className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <img src={person} className="icon--employee" alt="employee" />
                            {this.props.employee.name}
                            <h6 className="card-title">{this.props.employee.title}</h6>
                            <button onClick={
                                () => this.setState(
                                    { saveDisabled: true },
                                    () => this.props.deleteEmployee("employees", this.props.employee.id)
                                )
                            }
                                disabled={this.state.saveDisabled}
                                className="card-link">Delete</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
