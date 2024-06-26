import React from 'react';
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
import '../App.css';
import { Typography } from '@material-ui/core';
import Corona from './Corona';



const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none',
        color: 'black',
    },
    quote: {
        paddingTop: '40px',
        paddingBottom: '40px',
        marginTop: '30px',
        marginBottom: '30px',
        fontSize: '30px',
    },
    margin: {
        marginTop: '30px',
        marginBottom: '30px',
        paddingTop: '30px',
        paddingBottom: '40px',
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
                    <Grid item xs={12} md={6} lg={6}>
                        <Typography >
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
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Typography align="center" >
                            <a href="https://www.google.com/maps/dir/30.5135616,-90.4790016/selu+location/@30.5163838,-90.4783979,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x862722985b04e61d:0xd65f00282c35660!2m2!1d-90.4688572!2d30.5173159" className={classes.link}>
                                <LocationOnIcon style={{ fontSize: '40px' }} />
                            </a>
                            <p>Southeastern Louisiana University,</p>
                            <p>500 W University Ave, Hammond, LA 70402</p>
                            <a href="mailto:slu_wit@southeastern.edu" className={classes.link}>
                                <EmailIcon style={{ fontSize: '40px', textAlign: 'center', justifyContent: 'center' }} />
                            </a>
                            <p> slu_wit@southeastern.edu</p>
                        </Typography>
                    </Grid>
                </Grid>
                <Container maxWidth="md">
                    <Typography className={classes.margin} align="center" >
                        <hr />
                        <Typography className={classes.quote} >
                            “There is no tool for development more effective than the
                                empowerment of women. ”</Typography>
                        <Typography align="center">— KOFI ANNAN</Typography>
                        <hr />
                    </Typography>
                </Container>
            </Container>
        </div >
    );
}

export default Home;
