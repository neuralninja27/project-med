import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Container  from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Autocomplete from '@material-ui/lab/Autocomplete';
const styles = ({
    title: {
        color: "#FFD60A",
        marginTop: "10%"
    },
    card: {
        maxWidth: "50%",
        padding: "0.5% 1.5%",
        marginTop: "2em",
        background: "#bee9e8"
    },
    searchInput: {
        background: "rgba(255, 255, 255, 0.8)",
        maxWidth: "90%",
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
        position: "absolute",
        top: "36.5%",
        left: "44.5%",
        background:"rgba(0,0,0,0.2)",
        borderRadius: "4px",
        transition: "0.4s all ease-in-out",
        padding: "1.15%",
        "&:hover": {
            color: "#fff",
            background: "rgba(0, 0 ,0, 0.8)",
            transition: "0.4s all ease-in-out",
        }
    }
});

class OrderProducts extends Component {
    render() {
        const { classes, products} = this.props;
        const productList = products.map((product) => product.productName);
        console.log(productList);
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
                <Card className={classes.card}>
                    <CardContent>
                        <Typography
                        variant = "h6" 
                        >
                            Search for Medicines | HealthCare Products
                        </Typography>
                        <Autocomplete
                            freeSolo
                            id          = "order-products-input"
                            options     = {productList}
                            renderInput = {(params) => (
                                <TextField
                                    {...params}
                                    className = {classes.searchInput}
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
                    </CardContent>
                </Card>                            
            </Container>
        )
    }
}

export default withStyles(styles)(OrderProducts);