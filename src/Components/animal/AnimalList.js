import React, { Component } from "react"
import "./AnimalList.css"
import dog from "./DogIcon.svg"

export default class AnimalsList extends Component {
    render() {
        return (
            <section className="animals">
                <h2>Animals</h2>
                {
                    this.props.animals.map(animal =>
                        <div key={animal.id} className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <img src={dog} className="icon--dog" alt="Dog" />
                                    <h5>{animal.name}</h5>
                                    <button
                                        onClick={() => this.props.deleteAnimal(animal.id)}
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