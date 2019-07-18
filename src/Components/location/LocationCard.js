import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./Location.css"


export default class LocationCard extends Component {
    render() {
        return (
            <div key={this.props.location.id} className="card">
                <div className="card-body">
                    <div className="card-title">
                        {/* <img src={person} className="icon--location" alt="location" /> */}
                        <h5>{this.props.location.name}</h5>
                        <Link className="nav-link" to={`/locations/${this.props.location.id}`}>Details</Link>
                        <button
                            onClick={() => this.props.deleteLocation("locations", this.props.location.id)}
                            className="card-link">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}