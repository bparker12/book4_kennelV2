import React, { Component } from "react"
import { Link } from "react-router-dom";
import "./Animal.css"
import dog from "./DogIcon.svg"

export default class AnimalsList extends Component {
    render() {
        return (
            <section className="animals">
                {/* <h2>Animals</h2> */}
                {
                    this.props.animals.map(animal =>
                        <div key={animal.id} className="card">
                            <div className="card-body">
                                <div className="card-title">
                                    <img src={dog} className="icon--dog" alt="Dog" />
                                    <h5>{animal.name}</h5>
                                    <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                                    <button
                                        onClick={() => this.props.deleteAnimal("animals", animal.id)}
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