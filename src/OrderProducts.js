import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Container  from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CallMissedSharp } from '@material-ui/icons';
const styles = ({
    title: {
        color: "#FFD60A",
        marginTop: "10%",
        marginLeft: "5%",
    },
    cardDiv: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },
    firstCard: {
        minWidth: "50%",
        padding: "0 1.5%",
        marginTop: "2em",
        background: "#bee9e8"
    },
    secondCard: {
        minWidth: "30%",
        padding: "0 1.5%",
        marginTop: "2em",
        marginLeft: "8em",
        background: "#bee9e8"
    },
    searchFormTitle: {
        marginTop: "1%"
    },
    searchInput: {
        position: "relative",
        background: "rgba(255, 255, 255, 0.8)",
        float: "left",
        lineHeight: "2.5em",
        marginTop: "5%",
        maxWidth: "80%",
        paddingTop: "0.27em",
        borderRadius: "4px",
        "&:hover": {
            borderColor: "#00858F"
        },
        '&::placeholder': {
            color: "rgba(0,0,0, 0.8)"
        }
    },
    searchBtn: {
        color: "#000",
        marginTop: "20%",
        height: "2.5em",
        width: "2.5em",
        left: "0",
        background:"rgba(0,0,0,0.2)",
        borderRadius: "4px",
        transition: "0.4s all ease-in-out",
        padding: "1.1%",
        "&:hover": {
            color: "#fff",
            background: "rgba(0, 0 ,0, 0.8)",
            transition: "0.4s all ease-in-out",
        }
    },
    uploadBtn: {
        textDecoration: "none",
        minWidth: "100%",
    },
});

class OrderProducts extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
            value : '',
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event, value){
        // console.log(value);
        this.setState({
            redirect: true,
            value: value
        })
    }
    render() {
        const { classes, products} = this.props;
        const productList = products.map((product) => product.productName);
        const productList2 = products.map((product) => ({name: product.productName, id :product._id}));
        console.log(this.state.value);
        console.log(productList2);
        // console.log(products);
        return (
            <Container>
                <Typography
                    className = {classes.title}
                    variant   = "h4"
                    component = "h1"
                    align     = "left"
                >
                    Order Meds Online!
                </Typography>
                <div className= {classes.cardDiv}>
                <Card className={classes.firstCard}>
                    <CardContent>
                        <Typography
                            className = {classes.searchFormTitle}
                            variant   = "h6" 
                        >
                            Search for Medicines | HealthCare Products
                        </Typography>
                        <form>
                            <Autocomplete
                                freeSolo
                                onChange = {this.handleChange}
                                id          = "order-products-input"
                                options     = {productList}
                                renderInput = {(params) => (
                                    <TextField
                                        {...params}
                                        className = {classes.searchInput}
                                        value= {this.state.value}
                                        placeholder = "Eg. Disprin, Colgate, Limcee"
                                        margin  = "normal"
                                        variant = "outlined"
                                    />
                                )}
                            />
                            <CardActions>
                                <IconButton aria-label="search button" className={classes.searchBtn}>
                                    <SearchIcon />
                                </IconButton>
                            </CardActions>
                        </form>
                    </CardContent>
                </Card>
                <Card className = {classes.secondCard}>
                    <CardContent>
                        <CardActions>
                            <Button
                                className = {classes.uploadBtn}  
                                to        = {"/upload-prescription"} 
                                component = {Link} 
                                variant   = "outlined"
                            >
                                Upload Prescription
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>
                </div>                            
            </Container>
        )
    }
}

export default withStyles(styles)(OrderProducts);