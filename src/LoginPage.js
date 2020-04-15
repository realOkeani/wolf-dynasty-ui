import React, {useState, useEffect} from 'react'
import {withRouter} from "react-router";
import { TextField, Button} from "@material-ui/core";
import RegistrationForm from "./RegistrationForm";
import {Link} from "react-router-dom";
import logo from './wolfDynastyLogo.png';
import './LoginPage.css';

function useLoginPage () {

    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [username, setUserName] = useState("");

    return {password, setPassword, errorMsg, setErrorMsg, username, setUserName};

    // useEffect(() => {
    //     // update prod
    //     setProduct("All");
    // }, [experience]);


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //             password: '',
    //             email: ''
    //     }
    // }

    // state = {
    //     firstName: '',
    //     lastName: '',
    //     username: '',
    //     password: '',
    //     email: ''
    // };
}
function onChange(updatedValue) {
    this.setState({
        fields: {
            ...this.state.fields,
            ...updatedValue
        }
    });
}

function change(e) {
    this.props.onChange({[e.target.name]: e.target.value});
    this.setState({
        [e.target.name]: e.target.value
    });
}

function onSubmit(e) {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState(
        {
            username: '',
            password: '',
        });

    this.props.onChange(
           {
                username: '',
                password: '',
           }
           )
}


async function login(event) {
    event.preventDefault();
    let loginResponse = await fetch('https://www.something.com/', {
        headers: {
            'X-Token': this.state.token
        }
    });

    if (loginResponse.status === 200) {
        localStorage.setItem('trackerToken', this.state.token);
        this.props.history.push('/');
    } else {
        this.setState({errorMsg: 'Invalid Login'});
    }
}

    function handleTokenInput(event) {
        this.setState({
            token: event.target.value
        })
    }



export function LoginPage() {
        const { errorMsg, username, password } = useLoginPage();
        return (
            <>
            <div className="grid_container">
                <img className="logo" src={logo} alt="logo" />
                <form className="form" id='loginForm' onSubmit={login}>
                    <p id='errorMessage'>{errorMsg}</p>

                    {/*<p>Please Login by entering your username and password.</p>*/}
                    {/*<h3>Username</h3>*/}
                    {/*<TextField*/}
                    {/*    name='username'*/}
                    {/*    hintText='Username'*/}
                    {/*    floatingLabelText="Username"*/}
                    {/*    value={username}*/}
                    {/*    onChange={e => change(e)}*/}
                    {/*    style={{width: '200px'}}*/}
                    {/*    floatingLabelFixed*/}
                    {/*/>*/}
                    {/*<br />*/}
                    {/*<h3>Password</h3>*/}
                    {/*<TextField*/}
                    {/*    name='password'*/}
                    {/*    hintText='Password'*/}
                    {/*    floatingLabelText="Password"*/}
                    {/*    value={password}*/}
                    {/*    onChange={e => change(e)}*/}
                    {/*    style={{width: '200px'}}*/}
                    {/*    floatingLabelFixed*/}
                    {/*/>*/}
                    {/*/!*<TextField id='password'*!/*/}
                               {/*onChange={this.handleTokenInput}*/}
                               {/*margin="dense"*/}
                               {/*style={{width: '300px', marginRight:'20px'}}*/}

                    {/*/>*/}
                    <br/>
                    <br/>
                    {/*<Button variant="contained" type='submit'>Login</Button>*/}

                    {/*<Button variant="contained" onClick={e => onSubmit(e)} color="primary" > Submit </Button>*/}
                    {/*<br/>*/}
                    {/*<br/>*/}
                    {/*<Link underline="hover" to={"/registration"}>*/}
                    {/*    <Button variant="contained" color="secondary" class="nes-btn is-primary" >*/}
                    {/*        Register*/}
                    {/*    </Button>*/}
                    {/*</Link>*/}
                </form>
            </div>
            </>
        );
}

export default LoginPage;