import React, { Component } from "react"
import AnimalCard from "./AnimalCard"
import "./Animal.css"

export default class AnimalsList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/animals/new")
                        }
                        }>
                        Admit Animal
                </button>
                </div>
                <section className="animals">
                    {/* <h2>Animals</h2> */}
                    {
                        <section className="animals">
                            {
                                this.props.animals.map(animal =>
                                    <AnimalCard key={animal.id} animal={animal} {...this.props} />
                                )
                            }
                        </section>
                    }
                </section>
            </React.Fragment>
        )
    }
}