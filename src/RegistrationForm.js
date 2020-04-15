import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Button from "@material-ui/core/Button";


export default class RegistrationForm extends Component {

    constructor(props) {
        super(props);
        this.mounted = false;
        this.state = {
            firstName: '',
            lastName: '',
            username: '',
            password: '',
            email: '',
        };
    }

    async componentDidMount() {
        this.mounted = true;
    };

    async componentDidUpdate( prevState) {
    }

    change = e => {
        this.props.onChange({[e.target.name]: e.target.value});
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        // this.props.onSubmit(this.state);
        this.setState(
            {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                email: ''
            }
        );
        this.props.onChange(
            {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                email: ''
            }
        )
    };

    render() {
        return (
            <div style={{margin: '30px 0 0 30px'}}>
            <form>
                <p>Please enter in your information to Register with Wolf Dynasty Football.</p>
                <TextField
                    name='firstName'
                    hintText='First Name'
                    floatingLabelText="First Name"
                    value={this.state.firstName}
                    onChange={e => this.change(e)}
                    floatingLabelFixed
                />
                <br />
                <TextField
                    name='lastName'
                    hintText='Last Name'
                    floatingLabelText="last Name"
                    value={this.state.lastName}
                    onChange={e => this.change(e)}
                    floatingLabelFixed
                />
                <br />
                <TextField
                    name='username'
                    hintText='Username'
                    floatingLabelText="Username"
                    value={this.state.username}
                    onChange={e => this.change(e)}
                    floatingLabelFixed
                />
                <br />
                <TextField
                    name="password"
                    hintText='Password'
                    floatingLabelText="Password"
                    type='password'
                    value={this.state.password}
                    onChange={e => this.change(e)}
                    floatingLabelFixed
                />
                <br />
                <TextField
                    name='email'
                    hintText='Email'
                    type='email'
                    floatingLabelText="Email"
                    value={this.state.email}
                    onChange={e => this.change(e)}
                    floatingLabelFixed
                />
                <br />
                <Button variant="contained" onClick={e => this.onSubmit(e)} color="primary" > Submit </Button>
                {/*<Button variant="contained" onClick={e} color="secondary"> Email </Button>*/}
            </form>
            </div>
        );
    }
}
