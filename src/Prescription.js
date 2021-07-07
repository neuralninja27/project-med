import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Container  from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import AssignmentIcon from '@material-ui/icons/Assignment';

const styles = ({
    title: {
        margin: "9.5% 0 2% 0",
        color: "#FFD60A"
    },
    card: {
        display: "flex",
        paddingTop: "0.5%",
        justifyContent: "space-around",
        maxWidth: "50%",
        background: "#bee9e8"
    },
    input: {
        display: "none",
    },
    cardButton: {
        position: "relative",
        textAlign: "center",
        width: "16em",
        height: "10em",
        transition: "0.3s all ease-in-out",
        "&:hover": {    
            transition: "0.3s all ease-in-out",
            color: "#f51978"
        }
    },
});

class Prescription extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Container>
                <Typography
                    variant = "h3"
                    component = "h1"
                    className = {classes.title}
                >
                    Upload Prescripton
                </Typography>
                <Card className = {classes.card}>
                    <CardContent>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple
                            type="file"
                        />
                        <CardActions>
                            <label htmlFor="contained-button-file">
                                <Button
                                    startIcon = {<AssignmentIcon />} 
                                    className = {classes.cardButton}
                                    size      = "large"
                                    variant   = "outlined" 
                                    component = "span"
                                >
                                    Upload Prescription
                                </Button>
                            </label>
                        </CardActions>
                        <CardActions>
                                <Button
                                    to        = {"/user/uploaded-prescriptions"}
                                    component = {Link}
                                    className = {classes.cardButton}
                                    startIcon = {<BookmarksIcon />}
                                    size      = "large"
                                    variant   = "outlined"
                                >
                                    Uploaded Prescriptions
                                </Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Container>
        )
    }
}

export default withStyles(styles)(Prescription);