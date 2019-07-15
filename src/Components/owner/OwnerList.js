import React, { Component } from 'react'

export default class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
                <h2>Owners</h2>
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id} className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    {/* <img src={dog} className="icon--dog" alt="Dog" /> */}
                                    <h5>{owner.name}</h5>
                                    <button
                                        onClick={() => this.props.deleteOwner(owner.id)}
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