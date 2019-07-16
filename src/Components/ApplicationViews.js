import { Route } from 'react-router-dom'
import React, { Component } from "react"
import { withRouter } from 'react-router'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import EmployeeDetail from './employee/EmployeeDetail'
import OwnerList from './owner/OwnerList'
import apiManager from "../modules/apiManager"

class ApplicationViews extends Component {
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
        .then(animals => {
            console.log(animals)
            this.props.history.push("/animals")
            this.setState({animals: animals})
        }   )
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
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )
                    if (!animal) {
                        animal = {id:"404", name:"404", breed: "dog not found"}
                    }
                    return <AnimalDetail deleteAnimal={this.deleteAnimal} animal={animal} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                    )
                    if (!employee) {
                        employee = {id:"404", name:"404", breed: "dog not found"}
                    }
                    return <EmployeeDetail deleteemployee={this.deleteEmployee} employee={employee} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}
export default withRouter(ApplicationViews)