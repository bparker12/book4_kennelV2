import React, { Component } from 'react'
import "./Owner.css"
import boss from "./boss.svg"

export default class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
                {/* <h2>Owners</h2> */}
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id} className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <img src={boss} className="icon--owner" alt="owner" />
                                    <h5>{owner.name}</h5>
                                    <button
                                        onClick={() => this.props.deleteOwner("owners", owner.id)}
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