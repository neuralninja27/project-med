import React, {Component}from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from "@material-ui/core/styles";
import CardActions from '@material-ui/core/CardActions';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
    forgotPwd: {
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

class LogIn extends Component{
    constructor(props){
        super(props);
        this.state ={
                emailId        : '' ,
                password       : '',
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

    handleSubmit = (event) =>{
        event.preventDefault();
        const { emailId, password} = this.state;
        const payload = {
            emailId: emailId,
            password: password
        }
        axios({
            url: "/api/login/save",
            method: "POST",
            data: payload
        })
        .then(() =>{
            console.log("Data has been sent successfully");
            console.log(payload);
        })
        .catch(() =>{
            console.log("Oops some error occured in sending data");
        });
    }

    render(){
        const { classes } = this.props;
        const {emailId, password} = this.state
    return(
        <>
            <ValidatorForm noValidate autoComplete = "off" onSubmit={this.handleSubmit}>
                <TextValidator 
                    className     = {classes.textInput}
                    onChange      = {this.handleChange}
                    value         = {emailId}
                    name          = "emailId"
                    color         = "secondary"
                    label         = "Email-id" 
                    validators    ={['required', 'isEmail']}
                    errorMessages ={['Emai-Id is required', 'email is not valid']}
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
                    errorMessages ={['Password cannot be empty']}
                    fullWidth
                />
                <CardActions>
                    <FormControlLabel 
                        value          = 'end'
                        control        = {
                            <Checkbox  color="primary"/>
                        }
                        label          = "Keep me Signed in"
                        labelPlacement = "end"
                    />
                </CardActions>
                <CardActions>
                    <Button 
                        variant   = "outlined" 
                        color     = "secondary"
                        type      = "submit"
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
                    className = {classes.forgotPwd}
                    
                >
                    Forgot Password?
                </Button>
           </CardActions>
        </>
    )
    }
}

export default withStyles(styles)(LogIn); 