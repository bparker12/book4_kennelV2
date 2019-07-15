import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import apiManager from "../modules/apiManager"

export default class ApplicationViews extends Component {
    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: [],
    }

    componentDidMount() {
        const newState = {}

        apiManager.getAll("animals")
            .then(animals => newState.animals = animals)
        apiManager.getAll("employees")
            .then(employees => newState.employees = employees)
        apiManager.getAll("locations")
            .then(locations => newState.locations = locations)
        apiManager.getAll("owners")
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
    }

    deleteAnimal = (database, id) => {
        apiManager.get(database, id)
            .then(animals => this.setState({
                animals: animals
            })
            )
    }
    deleteEmployee = (database, id) => {
        apiManager.get(database, id)
            .then(employees => this.setState({
                employees: employees
            })
            )
    }
    deleteOwner = (database, id) => {
        apiManager.get(database, id)
            .then(owners => this.setState({
                owners: owners
            })
            )
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}