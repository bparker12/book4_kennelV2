import React, { Component } from 'react'
import "./Location.css"
// import person from "./location.svg"

export default class Location extends Component {
    state = {
        saveDisabled: false
    }

            render() {
                return (
                    <section className="locations">
                        <div key={this.props.location.id} className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    {/* <img src={person} className="icon--location" alt="location"/> */}
                                    <div>{this.props.location.name}</div>
                                    <div>{this.props.location.address}</div>
                                    <h6 className="card-title">{this.props.location.title}</h6>
                                    <button onClick={
                                        () => this.setState(
                                            {saveDisabled: true},
                                            ()=> this.props.deleteLocation("locations", this.props.location.id)
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