import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Owner.css"
import boss from "./boss.svg"

export default class OwnerList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="ownerButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/owners/new")
                        }
                        }>
                        Admit Owner
                </button>
                </div>
                <section className="owner">
                    {/* <h2>Owners</h2> */}
                    {
                        this.props.owners.map(owner =>
                            <div key={owner.id} className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <img src={boss} className="icon--owner" alt="owner" />
                                        <h5>{owner.name}</h5>
                                        <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                                        <button
                                        className="btn btn-success"
                                        onClick={() => this.props.history.push(`/owners/${this.props.owner.id}/edit}`)}>Edit</button>
                                        <button
                                            onClick={() => this.props.deleteOwner("owners", owner.id)}
                                            className="card-link">Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}