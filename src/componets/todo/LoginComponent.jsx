import React, {Component} from "react";
import AuthenticationService from "./AuthenticationService";

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: 'trystan',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState (
            {
                [event.target.name]: event.target.value
            }
        )
    }

    // handleUsernameChange(event) {
    //     this.setState (
    //         {
    //             [event.target.name]:event.target.value
    //         }
    //     )
    // }

    // handlePasswordChange(event) {
    //     this.setState (
    //         {
    //             password:event.target.value
    //         }
    //     )
    // }

    loginClicked() {
        // if(this.state.username==='trystan' && this.state.password==='dummy') {
        //     AuthenticationService.regsterSuccessfulLogin(this.state.username, this.state.password);
        //     this.props.history.push(`/welcome/${this.state.username}`)
        //     // this.setState({showSuccessMessage:true})
        //     // this.setState({hasLoginFailed:false})
        // }

        // else {
        //     this.setState({showSuccessMessage:false})
        //     this.setState({hasLoginFailed:true})
        // }

        AuthenticationService
        .executeBasicAuthenticationService(this.state.username, this.state.password)
        .then(() => {
            AuthenticationService.regsterSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
        }).catch(() => {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent;