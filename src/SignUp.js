import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const styles = ({
    checkbox:{
        display: "block",        
    },
    submitBtn: {
        display: "block",
        marginTop: "1em",
        borderRadius: "15px",
        marginBottom: "1em",
        minWidth: "90%",
    },
    textInput: {
        maxWidth: "90%",
        display: "block",
        margin: "10px 0"
    },
    hr: {
        border: 0,
        height: "1px",
        margin: "1em 0",
        maxWidth: "90%",
        backgroundImage: "linear-gradient(to right, rgba(245,25,120, 0), rgba(245,25,120), rgba(245,25,120, 0))"
        },
    member: {
        textDecoration: "none",
        marginTop: "1em",
        minWidth: "90%",
        textAlign: "center",
        textTransform: "uppercase",
        color: "rgba(245, 25, 120, 0.75)",
        transition: "0.35s ease-in-out", 
        '&:hover': {
            textDecoration: "none !important",
            color: "#f51978",
            cursor: "pointer"
        },
        '&:focus': {
            color: "#f51978"
        },
    },
});

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state ={
                name           : '' ,
                emailId        : '' ,
                password       : '',
                repeatPassword : ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount (){
        // Custom form validation to check whether the 2 password fields match
        ValidatorForm.addValidationRule('doPasswordMatch', (value) => {
            if(value !== this.state.password) 
                return false;
            return true;
        });
    }

    componentWillMount(){
        // To remove the validation when not necessary
        ValidatorForm.removeValidationRule('doPasswordMatch')
    }

    handleChange (event){
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {name, emailId, password} = this.state;
        const payload = {
            name: name,
            emailId: emailId,
            password: password
        }
        axios({
            url: "/api/signup/save",
            method: "POST",
            data: payload
        })
        .then(() =>{
            console.log("Data has been sent successfully");
            this.resetFormInputs();
        })
        .catch(() =>{
            console.log("Oops some error occured in sending data");
        });
    };

    resetFormInputs = () => {
        this.setState({
            name           : '',
            emailId        : '' ,
            password       : '',
            repeatPassword : ''
        });
    }

    render(){
        const { classes, onClick } = this.props;
        const {name, emailId, password, repeatPassword} = this.state
    return(
        <>
            <ValidatorForm noValidate autoComplete = "off" onSubmit={this.handleSubmit}>
                <TextValidator 
                    className     = {classes.textInput}
                    onChange      = {this.handleChange}
                    value         = {name}
                    name          = "name"
                    color         = "secondary"
                    label         = "Full Name"
                    validators    ={['required']}
                    errorMessages ={['Name is required']} 
                    fullWidth
                />
                <TextValidator 
                    className     = {classes.textInput}
                    onChange      = {this.handleChange}
                    value         = {emailId}
                    name          = "emailId"
                    color         = "secondary"
                    label         = "Email-id" 
                    validators    ={['required', 'isEmail']}
                    errorMessages ={['Email-Id is required', 'email is not valid']}
                    fullWidth
                />
                <TextValidator 
                    className     = {classes.textInput}
                    value         = {password}
                    onChange      = {this.handleChange}
                    id            = "standard-password-input"
                    color         = "secondary"
                    name          = "password"
                    type          = "password"
                    label         = "Password"
                    validators    ={['required']}
                    errorMessages ={['Password is required']}
                    fullWidth
                />
                <TextValidator 
                    className     = {classes.textInput}
                    value         = {repeatPassword}
                    onChange      = {this.handleChange}
                    id            = "standard-password-input"
                    color         = "secondary"
                    name          = "repeatPassword"
                    type          = "password"
                    label         = "Re-Enter Password"
                    validators    ={['doPasswordMatch', 'required']}
                    errorMessages ={['The Password entered does not match' ,'This field is required']}
                    fullWidth
                />
                <CardActions>
                    <Button 
                        variant   = "outlined"
                        type      = 'submit' 
                        color     = "secondary"
                        className = {classes.submitBtn}
                    >
                        Submit
                    </Button>
                </CardActions>
            </ValidatorForm>
            <div className={classes.hr}></div>
            <CardActions>
                <Button
                    variant   = "text"   
                    className = {classes.member}
                    onClick   = {onClick}
                    component = {Link}
                    to        = {'/sign-in-up/login'}               
                >
                    Already a Member?
                </Button>
           </CardActions>
        </>
    )
    }
}

export default withStyles(styles)(SignUp); 