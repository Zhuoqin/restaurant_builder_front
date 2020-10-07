import React, {Component} from 'react';
import {isEmpty} from "../helper";
import {withRouter} from "react-router-dom";


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValue: {
                username: "",
                password: "",
                confirmPassword: ""
            },
            error: {
                username: "",
                password: "",
                confirmPassword: ""
            },
            submitting: false,
            serverFeedback: "",
        };
    }

    componentDidMount() {
    }

    handleFormSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        const error = this.validate(this.state.formValue);
        if (isEmpty(error)) {
            this.setState(
                {
                    submitting: true,
                    error: {}
                }, () => {
                    fetch("http://localhost:8080/v1/register", {
                        method: "POST",
                        body: JSON.stringify(this.state.formValue),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(response => response.json()).then(response => {

                        alert(response.message);
                        if (response.result) {
                            this.setState({
                                serverFeedback: response.message,
                                submitting: false,
                                formValue: {
                                    ...response.result
                                },
                            },()=>{
                                this.props.history.push("/")
                            });
                        } else {
                            this.setState({
                                submitting: false,
                                serverFeedback: ''
                            }, ()=>{
                                this.props.history.push("/register")});
                        }
                    })
                })
        } else {
            this.setState({
                submitting: false,
                serverFeedback: "",
                error: error
            });
        }
    }

    validate = (values) => {
        const {username, password, confirmPassword} = values;
        const error = {};
        if (username.trim() === "") {
            error.username = "username cannot be empty";
        }
        if (password.trim() === "") {
            error.password = "password cannot be empty";
        }
        if (confirmPassword.trim() === "") {
            error.confirmPassword = "confirm password cannot be empty";
        }
        if (confirmPassword != password) {
            error.confirmPassword = "password doesn't match";
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

    render() {
        const {username, password, confirmPassword} = this.state.formValue;
        const error = this.state.error;
        return (
            <div className="container">
                <h1>New User Registration</h1>

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
                               placeholder="Enter Password" value={password}
                               onChange={this.handleInputChange}
                               className={`form-control ${error?.password ? "is-invalid" : "is-valid"}`}/>
                        {error.password && <div className="invalid-feedback">
                            {error.password}
                        </div>}

                    </div>

                    <div className={"form-group"}>
                        <label className="confirmPassword">Confirm Password</label>
                        <input type="password" name="confirmPassword"
                               placeholder="Confirm Password" value={confirmPassword}
                               onChange={this.handleInputChange}
                               className={`form-control ${error?.confirmPassword? "is-invalid" : "is-valid"}`}/>
                        {error.confirmPassword && <div className="invalid-feedback">
                            {error.confirmPassword}
                        </div>}
                    </div>
                    <button type={"submit"} className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default withRouter(Register);