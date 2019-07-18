import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import { withRouter } from 'react-router'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'
import EmployeeList from './employee/EmployeeList'
import EmployeeDetail from './employee/EmployeeDetail'
import EmployeeForm from './employee/EmployeeForm'
import OwnerList from './owner/OwnerList'
import OwnerDetail from './owner/OwnerDetail'
import OwnerForm from './owner/OwnerForm'
import apiManager from "../modules/apiManager"
import Login from './authentication/Login'

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
    //verifies if user is logged in session storage
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    deleteAnimal = (database, id) => {
        apiManager.get(database, id)
            .then(animals => {
                console.log(animals)
                this.props.history.push("/animals")
                this.setState({ animals: animals })
            })
    }
    deleteEmployee = (database, id) => {
        apiManager.get(database, id)
            .then(employees => {
                this.props.history.push("/employees")
                this.setState({ employees: employees })
            });
    }
    deleteOwner = (database, id) => {
        apiManager.get(database, id)
            .then(owners => {
                this.props.history.push("/owners")
                this.setState({
                    owners: owners
                })
            })
    }
    deleteLocation = (database, id) => {
        apiManager.get(database, id)
            .then(locations => {
                this.props.history.push("/")
                this.setState({
                    locations: locations
                })
            })
    }

    addAnimal = animal =>
        apiManager.post(animal, "animals")
            .then(() => apiManager.getAll("animals"))
            .then(animals =>
                this.setState({
                    animals: animals
                })
            );
    addEmployee = employee =>
        apiManager.post(employee, "employees")
            .then(() => apiManager.getAll("employees"))
            .then(employees =>
                this.setState({
                    employees: employees
                })
            );
    addOwner = owner =>
        apiManager.post(owner, "owners")
            .then(() => apiManager.getAll("owners"))
            .then(owners =>
                this.setState({
                    owners: owners
                })
            );

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <LocationList {...props} locations={this.state.locations} employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/locations/:locationId(\d+)" render={(props) => {
                    let location = this.state.locations.find(location =>
                        location.id === parseInt(props.match.params.locationId)
                    )
                    if (!location) {
                        location = { id: "404", name: "404", location: "location not found" }
                    }
                    return <LocationDetail deleteLocation={this.deleteLocation} location={location} />
                }} />

                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalList {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal} />
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    let animal = this.state.animals.find(animal =>
                        animal.id === parseInt(props.match.params.animalId)
                    )
                    if (!animal) {
                        animal = { id: "404", name: "404", breed: "dog not found" }
                    }
                    return <AnimalDetail deleteAnimal={this.deleteAnimal} animal={animal} />
                }} />
                <Route path="/animals/:animalId(\d+)/edit" render={(props) => {return <AnimalForm {...props} employees={this.state.animals} updateAnimal={this.state.updateAnimal}/>
                }}/>

                <Route exact path="/employees" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList {...props} deleteEmployee={this.deleteEmployee}
                            employees={this.state.employees}
                            animals={this.state.animals} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                        addEmployee={this.addEmployee} />
                }} />
                <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
                    let employee = this.state.employees.find(employee =>
                        employee.id === parseInt(props.match.params.employeeId)
                    )
                    if (!employee) {
                        employee = { id: "404", name: "404", breed: "dog not found" }
                    }
                    return <EmployeeDetail deleteEmployee={this.deleteEmployee} employee={employee} />
                }} />
                <Route path="/employees/:employeeId(\d+)/edit" render={(props) => {return <EmployeeForm {...props} employees={this.state.employees} updateEmployee={this.state.updateEmployee}/>}}/>

                <Route exact path="/owners" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnerList {...props} deleteOwner={this.deleteOwner} owners={this.state.owners} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props}
                        addOwner={this.addOwner} />
                }} />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    let owner = this.state.owners.find(owner =>
                        owner.id === parseInt(props.match.params.ownerId)
                    )
                    if (!owner) {
                        owner = { id: "404", name: "404", breed: "dog not found" }
                    }
                    return <OwnerDetail deleteOwner={this.deleteOwner} owner={owner} />
                }} />
                <Route path="/owners/:ownerId(\d+)/edit" render={(prop) => {return <OwnerForm {...props} employees={this.state.owners} updateOwner={this.state.updateOwner}/>
                }}/>
                <Route path="/login" component={Login} />
            </React.Fragment>
        )
    }
}
export default withRouter(ApplicationViews)