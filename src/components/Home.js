import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Header2 from '../assets/header2.jpg'
import Header3 from '../assets/header3.jpg'
import Header from '../assets/header.jpg';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import '../App.css';

const useStyles = makeStyles(theme => ({
    paper: {
        padding: '30px',
        backgroundColor: '#fbfbfb',

    },
    quote: {
        padding: '30px',
        margin: '40px',
        fontSize: '30px'
    },
    margin: {
        margin: '40px'
    },
    icon: {
        display: 'flex',
        alignItems: 'center',
    }
}));

function Home() {
    const classes = useStyles();
    return (
        <div>
            <Navbar />
            <Carousel autoPlay transitionTime={1000} interval={4000} infiniteLoop >
                <div>
                    <img src={Header2} alt="" />
                </div>
                <div>
                    <img src={Header3} alt="" />
                </div>
                <div>
                    <img src={Header} alt="" />
                </div>
            </Carousel>


            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <div>
                                <li>
                                    Women in Technology is founded by Kristen Reeves and Sara Moore in
                                    2012
                            </li>
                                <li>
                                    A chapter of Louisiana Women in Technology, a group of
                                    professionals dedicated to networking women in STEM field
                                    (Science, Technology, Engineering & Math)
                         </li>
                                <li>
                                    It is a community of women promoting STEM to girls and college
                                    freshmen around the Baton Rouge community which was soon extended
                                    at Southeastern Louisiana University by Kristen Reeves and Vivian
                                    Boykin
                         </li>
                                <li>
                                    Some past events by Women in Technology were field trips to IBM
                                    (International Business Machine) and LIGO (Laser Interferometer
                                    Gravitational Wave Observatory), fundraisers like bake sale, ice
                                    cream with liquid Nitrogen, etc.
                         </li>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <div>
                                <LocationOnIcon className={classes.icon} />
                                <h4>Location</h4>
                                <p>Southeastern Louisiana University,</p>
                                <p>500 W University Ave, Hammond, LA 70402</p>
                            </div>
                            <div>
                                <EmailIcon className={classes.icon} />
                                <h4>Email</h4>
                            </div>
                            <p> slu_wit@southeastern.edu</p>
                        </Paper>
                    </Grid>

                    <div>
                        <div className={classes.margin}>
                            <hr />
                            <div align="center" className={classes.quote}>
                                “There is no tool for development more effective than the
                                empowerment of women. ”
                            </div>
                            <div align="center">— KOFI ANNAN</div>
                            <hr />
                        </div>
                    </div>
                </Grid>
            </Container>


            <Footer />
        </div>
    );
}

export default Home;