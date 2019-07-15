import React, { Component } from 'react'

export default class LocationList extends Component {
    render() {
        return (
            <section className="locations">
                <h2>Locations</h2>
                {
                    this.props.locations.map(location =>
                        <div key={location.id}>
                            {location.name}
                            {location.adress}
                        </div>
                    )
                }
            </section>
        )
    }
}

