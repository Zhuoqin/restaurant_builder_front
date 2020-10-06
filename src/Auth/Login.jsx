import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {isEmpty} from "../helper";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formValue: {
                username: "",
                password: "",
            },
            error: {
                username: "",
                password: "",
            },
            Logged: false,
            serverFeedback: "",
        };
    }

    componentDidMount() {
    }

    validate = (values) => {
        const {username, password} = values;
        const error = {};
        if (username.trim() === "") {
            error.username = "username cannot be empty";
        }
        if (password.trim() === "") {
            error.password = "password cannot be empty";
        }
        return error;
    }

    handleFormSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
        const error = this.validate(this.state);
        if (isEmpty(error)) {
            alert("no error")
            alert(error)
            this.setState(
                {
                    error: {}
                }, () => {
                    fetch(process.env.REACT_APP_API_ENDPOINT +  "/v1/login", {
                        method: "POST",
                        body: JSON.stringify(this.state.formValue),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(response => response.json()).then(response => {
                        console.log(response);
                        alert(response.message);
                        if (response.result) {
                            localStorage.setItem("token", response.result)
                            this.setState({
                                serverFeedback: response.result.message,
                                logged: true,
                            },()=>{
                                this.props.history.push("/")
                            });
                        } else {
                            this.setState({
                                logged: false,
                                serverFeedback: response.result.message
                            });
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

    handleInputChange = (event) => {
        this.setState({
            formValue: {
                ...this.state.formValue,
                [event.target.name]: event.target.value
            }
        })
    }


    render(){
        const {username, password} = this.state.formValue;
        const error = this.state.error;
        return (
            <div className="container">
                <h1>Returning User Login</h1>

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

                    <button type={"submit"} className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }

}

export default withRouter(Login);