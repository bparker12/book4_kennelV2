import React, { Component } from "react"
import "./Animal.css"
import dog from "./DogIcon.svg"

export default class Animal extends Component {
    state = {
        saveDisabled: false
    }

    render() {
        return (
            <section className="animal">
                <div key={this.props.animal.id} className="card">
                    <div className="card-body">
                        <div className="card-title">
                            <img src={dog} className="icon--dog" alt="dog"/>
                            <div>{this.props.animal.name}</div>
                            <h6 className="card-title">{this.props.animal.breed}</h6>
                            <button onClick={
                                //Disabled is being input after an anonymous function (or lambda). Since setState() is an asynchronous operation, passing a function as the second parameter ensures that it is invoked after state is set.
                                () =>
                                    this.setState(
                                        { saveDisabled: true },
                                        () => this.props.deleteAnimal("animals", this.props.animal.id)
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