import React, { Component } from 'react'
import "./Owner.css"
import boss from "./boss.svg"

export default class owner extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="owners">
                <div key={this.props.owner.id} className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <img src={boss} className="icon--owner" alt="owner" />
                            {this.props.owner.name}
                            <h6 className="card-title">{this.props.owner.title}</h6>
                            <button onClick={
                                () => this.setState(
                                    { saveDisabled: true },
                                    () => this.props.deleteOwner("owners", this.props.owner.id)
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
