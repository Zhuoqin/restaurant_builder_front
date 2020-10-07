import React, {Component} from 'react';
import {get, post} from "./restUser";
import {isEmpty} from "../helper";
import {withRouter} from "react-router-dom";

export const getProfile = () => {
    return get(process.env.REACT_APP_API_ENDPOINT + "/v1/users/me", true);
}

export const updateProfile = (profile) => {
    return post(process.env.REACT_APP_API_ENDPOINT + "/v1/users/me", profile, true);
}


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formValue: {
                username: "",
                password: "",
                firstName: "",
                lastName: "",
                email: ""
            },
            error: {
                username: "",
                password: "",
                firstName: "",
                lastName: "",
                email: ""
            },
            submitting: false,
            serverFeedback: "",
        };
    }

    async componentDidMount() {

        try {
            const response = await getProfile();
            console.log(response);
            this.setState({
                ...this.state,
                formValue: {
                    ...response
                }
            })

        } catch (error) {
            console.error(error);
        }
    }


    validate = (values) => {
        const {username, email, firstName, lastName, } = values;
        const error = {};
        if (username.trim() === "") {
            error.username = "username cannot be empty";
        }

        if (email.trim() === "") {
            error.email = "email cannot be empty";
        }

        if (firstName.trim() === "") {
            error.firstName = "first name cannot be empty";
        }
        if (lastName.trim() === "") {
            error.lastName = "last name cannot be empty";
        }


        return error;
    }

    handleInputChange = (event) => {
        this.setState({
            formValue: {
                ...this.state.formValue,
                [event.target.name]: event.target.value
            }
        })
    }

    handleFormSubmit = async (event) => {

        console.log(this.state.formValue);
        event.preventDefault();
        const error = this.validate(this.state.formValue);
        if (isEmpty(error)) {
            try {

                const response = await updateProfile(this.state.formValue);
                console.log(response);
                this.setState({
                    ...this.state,
                    formValue: {
                        ...response
                    }
                })
                this.props.history.push("/")

            } catch (error) {
                console.error(error);
            }
        }else {
            this.setState({
                submitting: false,
                serverFeedback: "",
                error: error
            });
        }

    }

    render() {
        const {username = '', password = '', email = '', firstName = '', lastName = ''} = this.state.formValue;
        const error = this.state.error;
        return (
            <div className="container">
                <h1>User Profile</h1>
                <h1>{'Edit profile for: '+username}</h1>

                <form onSubmit={this.handleFormSubmit}>
                    {this.state.serverFeedback && <h2 className={"text-danger"}>{this.state.serverFeedback}</h2>}
                    <div className={"form-group"}>
                        <label className="userName">User Name</label>
                        <input type="text" placeholder="Enter User Name" name="username" id='userName'
                               value={username}
                               onChange={this.handleInputChange}
                               className={`form-control ${error?.username ? "is-invalid" : "is-valid"}`}/>
                        {error.username && <div className="invalid-feedback">
                            {error.username}
                        </div>}
                    </div>

                    <div className={"form-group"}>
                        <label className="password">Password</label>
                        <input type="password" id='password' name="password"
                               placeholder="Enter New Password" value={password}
                               onChange={this.handleInputChange}
                               className={`form-control ${error?.password ? "is-invalid" : "is-valid"}`}/>
                        {error.password && <div className="invalid-feedback">
                            {error.password}
                        </div>}

                    </div>

                    <div className={"form-group"}>
                        <label className="email">Email</label>
                        <input type="text" name="email"
                               placeholder="Email" value={email}
                               onChange={this.handleInputChange}
                               className={`form-control ${error?.email ? "is-invalid" : "is-valid"}`}/>
                        {error.email && <div className="invalid-feedback">
                            {error.email}
                        </div>}
                    </div>
                    <div className={"form-group"}>
                        <label className="firstName">First Name</label>
                        <input type="text" name="firstName"
                               placeholder="firstName" value={firstName}
                               onChange={this.handleInputChange}
                               className={`form-control ${error?.firstName ? "is-invalid" : "is-valid"}`}/>
                        {error.firstName && <div className="invalid-feedback">
                            {error.firstName}
                        </div>}
                    </div>
                    <div className={"form-group"}>
                        <label className="lastName">Last Name</label>
                        <input type="text" name="lastName"
                               placeholder="lastName" value={lastName}
                               onChange={this.handleInputChange}
                               className={`form-control ${error?.lastName ? "is-invalid" : "is-valid"}`}/>
                        {error.lastName && <div className="invalid-feedback">
                            {error.lastName}
                        </div>}
                    </div>
                    <button type={"submit"} className="btn btn-primary">Update</button>
                </form>
            </div>
        );
    }
}

export default withRouter(Profile);