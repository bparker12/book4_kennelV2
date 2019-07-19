import React, { Component } from "react"
import apiManager from "../../modules/apiManager";

export default class OwnerEditForm extends Component {
    // Set initial state
    state = {
        ownerName: "",
        phoneNumber: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingOwner = evt => {
        evt.preventDefault()

        const editedOwner = {
            id: this.props.match.params.ownerId,
            name: this.state.ownerName,
            phoneNumber: this.state.phoneNumber
        };
        this.props.updateOwner(editedOwner)
            .then(() => this.props.history.push("/owners"))
    }


    componentDidMount() {
        apiManager.get("owners", this.props.match.params.ownerId)
            .then(owner => {
                this.setState({
                    ownerName: owner.name,
                    phoneNumber: owner.phoneNumber
                });
            });
    }


    render() {
        return (
            <React.Fragment>
                <form className="ownerForm">
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="ownerName"
                            value={this.state.ownerName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="phoneNumber"
                            value={this.state.phoneNumber}
                        />
                        <button
                            type="submit"
                            onClick={this.updateExistingOwner}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}