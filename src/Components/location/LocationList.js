import React, { Component } from 'react'
import EmployeeCard from '../employee/EmployeeCard';
import LocationCard from './LocationCard'

export default class LocationList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="location">
                    {/* <h2>locations</h2> */}
                    {
                        this.props.locations.map(location =>
                            <div key={location.id}> <LocationCard location= {location} {...this.prop} />
                                <h6 className="card-title mb-2 text-muted">Location For</h6>
                                <div className="employees--location">
                                    {
                                        this.props.employees
                                            .filter(emp => emp.locationId === location.id)
                                            .map(emp => <EmployeeCard key={emp.id} employee={emp} {...this.props} />)
                                    }
                                </div>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

